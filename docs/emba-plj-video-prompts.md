# Video prompts for PLJ visual chapter

Set `VITE_PLJ_VIDEO_URL` in `.env` (see `.env.example`) — path under `public/` or full HTTPS URL.

Use for **Runway**, **Pika**, **Kling**, **Sora**, etc. Export **silent**, **10–30s**, **landscape 16:9**, loop-friendly if possible. Style: **cinematic, textured, not literal stock**.

---

## Prompt A — “Integration merge” (primary)

> **Single continuous shot.** Split frame: left side cool charcoal and silver mist with faint **grid lines like a faint spreadsheet or wireframe** dissolving into fog; right side **warm umber, persimmon, and soft gold** with **organic curves** like branch shadows or ink in water. A **vertical seam** between them **breathes** — the two halves **slowly interleave**: cool geometry **warps** into warm organic forms; warm texture **carries** a hint of **structured light** (data-as-light, not UI). **No text, no logos, no faces.** **Film grain**, shallow depth, **slow dolly**. Feels like **memory and rigor becoming one** — elegant, intimate, **not corporate**, not sci-fi neon.

**Negative prompt (if the tool supports it):** text, logo, Disney characters, corporate presentation, bright blue gradient, cartoon, busy UI, human face close-up, explainer graphics.

---

## Prompt B — “Spine / line / field”

> **Abstract.** A **single luminous line** curves through darkness like a **spine or path**; it **morphs** into **parallel rows** (orchard / furrows) seen from above as **texture**, then **folds** back to a line. **Earth tones and deep ink.** **Hand-crafted** feel — paper grain, **no characters**. Slow, **meditative**, **15 seconds**, loop.

---

## Prompt C — “Letters / belonging / layers”

> **Abstract archival mood.** **Translucent rectangles** drift like **stacked paper** or **light through rice paper**; **warm edge light**; occasional **ink bleed** shapes (no readable words). **Korean hanji or parchment** suggestion without text. **Slow parallax layers.** Melancholic → **gentle opening** of light at the end. **No faces.**

---

## Technical notes

- Host the file under `**public/plj/`** (e.g. `public/plj/merge.mp4`) and set in `.env`:
  - `VITE_PLJ_VIDEO_URL=/plj/merge.mp4`
- Or use a full HTTPS URL if hosted elsewhere.
- For **GitHub Pages**, keep files **under repo size limits**; compress with **HandBrake** (H.264, web-optimized).

