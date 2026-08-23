import { useEffect, useState } from 'react';
import grandpa from '../../assets/art/abstract/grandpa.jpeg';

/**
 * Unified visual system: World A + World B → merge.
 * Imagery is masked, layered, and scene-orchestrated — not rectangular slides.
 */

const LINE_PATHS = [
  'M 40 320 Q 200 180 480 260',
  'M 24 338 Q 280 272 500 292 T 976 318',
  'M 120 400 Q 500 280 880 400',
  'M 128 472 Q 500 108 872 96',
  'M 96 232 L 236 312 L 376 212 L 536 292 L 696 212 L 864 268',
  'M 52 198 L 172 318 L 292 148 L 412 308 L 532 138 L 652 298 L 772 158 L 928 242',
  'M 72 302 C 210 72 390 528 500 298 S 790 108 928 302',
  'M 36 292 Q 500 232 964 288',
  'M 80 340 Q 500 280 920 340',
  'M 100 380 Q 500 320 900 360',
];

const LETTER_URLS = [
  '/plj/letter-grandpa-1.png',
  '/plj/letter-grandpa-2.png',
  '/plj/letter-grandpa-3.png',
  '/plj/letter-grandpa-4.png',
];

const RUPI_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp'];

export function PljNarrative({ step }) {
  const s = Math.min(Math.max(0, step), 9);
  const d = LINE_PATHS[s] ?? LINE_PATHS[0];
  const [rupiSrc, setRupiSrc] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const ext of RUPI_EXTENSIONS) {
        const url = `/plj/rupi-kaur.${ext}`;
        const ok = await new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = url;
        });
        if (cancelled) return;
        if (ok) {
          setRupiSrc(url);
          return;
        }
      }
      setRupiSrc(null);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const lineGlow = s === 5 || s === 7;
  const lineStroke = s === 7 || s === 9 ? 2.35 : s === 5 ? 2.05 : s === 8 ? 1.75 : 1.55;

  return (
    <div className={`plj-story plj-story--s${s}`} data-plj-step={s}>
      <div className="plj-story__base" aria-hidden />

      {/* —— World A —— */}
      <div className="plj-story__world plj-story__world--a" aria-hidden>
        <div className="plj-story__warm-depth" />
        <div className="plj-story__paper-fiber" />
        <div className="plj-story__orchard" />
        <div className="plj-story__orchard-glow" />
        <div className="plj-story__row-furrows" />
        <div
          className="plj-story__archival-wash"
          style={{ '--plj-archival': `url(${grandpa})` }}
        />
        <div className="plj-story__root-mass" />
        <svg className="plj-story__branches" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMax slice">
          <path
            fill="none"
            stroke="rgba(90, 72, 55, 0.35)"
            strokeWidth="1.2"
            d="M 500 500 Q 480 320 420 200 Q 360 120 280 80 M 500 500 Q 530 340 600 220 Q 680 100 780 60 M 420 200 Q 340 160 260 180 M 600 220 Q 720 200 820 240"
          />
        </svg>
        <svg className="plj-story__hand-scrawl" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
          <path
            fill="none"
            stroke="rgba(100, 78, 58, 0.14)"
            strokeWidth="0.9"
            d="M 140 420 C 220 200 300 400 380 240 S 460 380 540 260"
          />
          <path
            fill="none"
            stroke="rgba(85, 70, 55, 0.11)"
            strokeWidth="0.65"
            d="M 620 440 Q 700 200 820 320 T 940 240"
          />
        </svg>
        <div className="plj-story__brush-veil" />
      </div>

      {/* —— World B —— */}
      <div className="plj-story__world plj-story__world--b" aria-hidden>
        <div className="plj-story__cool-depth" />
        <div className="plj-story__grid" />
        <div className="plj-story__grid-fine" />
        <div className="plj-story__nodes" />
        <div className="plj-story__data-contour" />
        <svg className="plj-story__vectors" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
          <path
            fill="none"
            stroke="rgba(130, 168, 208, 0.18)"
            strokeWidth="0.8"
            d="M 80 120 L 280 120 L 280 320 L 480 320 L 480 480"
          />
          <path
            fill="none"
            stroke="rgba(110, 150, 195, 0.14)"
            strokeWidth="0.55"
            d="M 640 100 L 900 220 L 740 420"
          />
        </svg>
        <div className="plj-story__cool-rim" />
      </div>

      {/* Map / topography (memory + structure) */}
      <svg className="plj-story__topo" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <path
          fill="none"
          stroke="rgba(160, 140, 115, 0.12)"
          strokeWidth="0.7"
          d="M 100 400 Q 200 380 300 400 T 500 360 T 700 390 T 900 350"
        />
        <path
          fill="none"
          stroke="rgba(140, 155, 175, 0.1)"
          strokeWidth="0.6"
          d="M 120 450 Q 280 420 440 440 T 760 410 T 920 430"
        />
        <path
          fill="none"
          stroke="rgba(150, 130, 105, 0.08)"
          strokeWidth="0.5"
          d="M 200 320 Q 400 300 600 310 T 880 290"
        />
      </svg>

      {/* Body beat: Rupi figure as soft masked layer (asset: /plj/rupi-kaur.{png,jpg,…}) */}
      <div className="plj-story__body-figure-wrap" aria-hidden>
        {rupiSrc ? (
          <img className="plj-story__body-figure" src={rupiSrc} alt="" decoding="async" />
        ) : null}
      </div>

      {/* Letter fragments: transformed, never plain rectangles */}
      <div className="plj-story__letter-layer" aria-hidden>
        {LETTER_URLS.map((url, i) => (
          <span
            key={url}
            className={`plj-story__letter-frag plj-story__letter-frag--${i + 1}`}
            style={{ '--plj-letter': `url(${url})` }}
          />
        ))}
      </div>

      {/* Belonging: layered translucency */}
      <div className="plj-story__belong-panels" aria-hidden>
        <span className="plj-story__b-panel" />
        <span className="plj-story__b-panel" />
        <span className="plj-story__b-panel" />
      </div>

      {/* Story / theater trace */}
      <svg className="plj-story__proscenium" viewBox="0 0 1000 200" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <path
          fill="none"
          stroke="rgba(220, 200, 175, 0.08)"
          strokeWidth="1"
          d="M 80 160 Q 500 20 920 160"
        />
      </svg>

      {/* Pressure overlay */}
      <div className="plj-story__pressure" aria-hidden>
        <div className="plj-story__pressure-scan" />
        <div className="plj-story__pressure-veil" />
      </div>

      {/* Merge: roots become network */}
      <div className="plj-story__fuse-stack" aria-hidden>
        <div className="plj-story__fuse-rows" />
        <div className="plj-story__fuse-mesh" />
        <div className="plj-story__fuse-bloom" />
      </div>
      <svg className="plj-story__roots-net" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <path
          fill="none"
          stroke="rgba(185, 155, 120, 0.2)"
          strokeWidth="0.9"
          d="M 500 520 Q 420 400 360 320 Q 300 240 240 200 M 500 520 Q 580 400 640 320 Q 700 240 760 200"
        />
        <path
          fill="none"
          stroke="rgba(140, 175, 210, 0.18)"
          strokeWidth="0.7"
          d="M 240 200 L 180 140 M 360 320 L 320 240 M 640 320 L 680 240 M 760 200 L 820 140"
        />
        <circle cx="180" cy="140" r="2.5" fill="rgba(170, 200, 230, 0.35)" />
        <circle cx="320" cy="240" r="2" fill="rgba(170, 200, 230, 0.3)" />
        <circle cx="680" cy="240" r="2" fill="rgba(170, 200, 230, 0.3)" />
        <circle cx="820" cy="140" r="2.5" fill="rgba(170, 200, 230, 0.35)" />
      </svg>

      <div className="plj-story__horizon" aria-hidden />

      {/* Recurring line */}
      <svg
        className="plj-story__line"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id="plj-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(215, 175, 125, 0.9)" />
            <stop offset="48%" stopColor="rgba(195, 205, 230, 0.85)" />
            <stop offset="100%" stopColor="rgba(165, 190, 220, 0.75)" />
          </linearGradient>
          <filter id="plj-line-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {s === 0 ? (
          <>
            <path
              key="l"
              className="plj-story__line-path"
              d="M 40 320 Q 200 180 480 260"
              fill="none"
              stroke="rgba(210, 175, 130, 0.82)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              key="r"
              className="plj-story__line-path"
              style={{ animationDelay: '0.15s' }}
              d="M 520 248 Q 720 160 960 208"
              fill="none"
              stroke="rgba(145, 185, 220, 0.78)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </>
        ) : (
          <path
            key={s}
            className="plj-story__line-path"
            d={d}
            fill="none"
            stroke="url(#plj-line-grad)"
            strokeWidth={lineStroke}
            strokeLinecap="round"
            filter={lineGlow ? 'url(#plj-line-glow)' : undefined}
          />
        )}
      </svg>
    </div>
  );
}
