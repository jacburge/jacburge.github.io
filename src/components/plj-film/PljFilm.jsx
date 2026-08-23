import { useCallback, useEffect, useRef, useState } from 'react';
import { pljScenes } from '../../data/embaPljScenes';
import { PljNarrative } from './PljNarrative';
import { PljStaticChapter } from './PljStaticChapter';
import '../../styles/plj-narrative.css';

const SCENE_COUNT = pljScenes.length;
const ANCHOR_IN_MS = 700;
const ANCHOR_HOLD_PAD_MS = 700;

export default function PljFilm() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [anchorVisible, setAnchorVisible] = useState(false);
  const [anchorOut, setAnchorOut] = useState(false);
  const timers = useRef([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  const goTo = useCallback((i) => {
    setSceneIndex(Math.max(0, Math.min(SCENE_COUNT - 1, i)));
  }, []);

  useEffect(() => {
    const prev = document.title;
    document.title = 'PLJ · Jaclyn Field Mathai';
    return () => {
      document.title = prev;
    };
  }, []);

  useEffect(() => {
    clearTimers();
    setAnchorVisible(false);
    setAnchorOut(false);

    const meta = pljScenes[sceneIndex];
    if (!meta?.phrase) return undefined;

    const t1 = window.setTimeout(() => {
      setAnchorOut(false);
      setAnchorVisible(true);
    }, ANCHOR_IN_MS);

    const t2 = window.setTimeout(() => {
      setAnchorOut(true);
      const t3 = window.setTimeout(() => {
        setAnchorVisible(false);
        setAnchorOut(false);
      }, 900);
      timers.current.push(t3);
    }, ANCHOR_IN_MS + meta.phraseMs + ANCHOR_HOLD_PAD_MS);

    timers.current = [t1, t2];
    return clearTimers;
  }, [sceneIndex, clearTimers]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea, [contenteditable]')) return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goTo(sceneIndex + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goTo(sceneIndex - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goTo(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goTo(SCENE_COUNT - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [sceneIndex, goTo]);

  const phrase = pljScenes[sceneIndex]?.phrase;
  const staticBlock = pljScenes[sceneIndex]?.staticBlock;
  const progressPct = ((sceneIndex + 1) / SCENE_COUNT) * 100;

  return (
    <div className="plj-film" role="application" aria-label="Personal leadership journey visual narrative">
      <PljNarrative step={sceneIndex} />

      {staticBlock ? <PljStaticChapter key={sceneIndex} variant={staticBlock} /> : null}

      {phrase && !staticBlock ? (
        <div
          className={`plj-anchor ${anchorVisible && !anchorOut ? 'plj-anchor--in' : ''} ${anchorOut ? 'plj-anchor--out' : ''}`}
          aria-live="polite"
        >
          <p>{phrase}</p>
        </div>
      ) : null}

      <div className="plj-progress" style={{ width: `${progressPct}%` }} aria-hidden />

      <nav className="plj-hud" aria-label="Story beats">
        {pljScenes.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`plj-hud-dot ${i === sceneIndex ? 'plj-hud-dot--on' : ''}`}
            aria-label={`${s.label} — ${i + 1} of ${SCENE_COUNT}`}
            aria-current={i === sceneIndex ? 'true' : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </nav>

      <p className="plj-hud-hint">← → space · home end · click to advance</p>

      <button type="button" className="plj-hit" aria-label="Next beat" onClick={() => goTo(sceneIndex + 1)} />
    </div>
  );
}
