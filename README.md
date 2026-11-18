# Cutout Cartoon Shorts

A reusable Remotion starter for vertical animated YouTube Shorts.

## Requirements

- Node.js 18.性 or newer
- npm

## Setup

```bash
npm install
npm run dev
```

Open the Remotion Studio preview and select the `Main` composition.

## Render

```bash
npm run render
```

The starter renders a 1080 × 1920 vertical video at 30 fps to `out/short.mp4`.

## Project layout

```text
src/
  compositions/Main.tsx   # Main short composition
  Root.tsx                # Remotion compositions
  index.ts                # Entry point
public/assets/            # Transparent character and prop artwork
out/                      # Rendered videos and thumbnails
```

## Next production steps

1. Add character and prop PNG/WebP assets to `public/assets/`.
2. Build reusable scene, character, camera, subtitle, and sound-effect components.
3. Add episode-specific scripts and scene timings.
4. Render and review each short before publishing.

Integrations for external voice, image, and video services should be configured with their own credentials locally; never commit API keys.
