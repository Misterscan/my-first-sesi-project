# First Big Sesi Starter

This project is a separate Sesi starter outside the main repo. It follows the repo's preferred pattern: fetch raw data, normalize it into JSON, and compile the final page from that data.

The source layer lives under `app/` instead of being folded into one large builder file.

The workspace uses our npm package `@misterscan/sesi` to provide the local `sesi` command used by the scripts in `package.json`.

## What it builds

- `data/feed.json`: raw API response persisted locally
- `data/site_payload.json`: normalized build payload used by the page compiler
- `out/index.html`: generated client-facing page

## Source layout

- `app/stages/pipeline.sesi`: fetch, transform, and voice-building steps
- `app/partials/render.sesi`: card and page rendering helpers
- `app/prompts/site_voice.txt`: editable Sesi copy brief
- `app/scripts/site.js`: lightweight client-side reveal behavior
- `tests/run.sesi`: smoke tests for the pipeline stages

## Setup

Clone the repository:

```bash
git clone https://github.com/Misterscan/my-first-sesi-project.git
cd my-first-sesi-project
npm install
```

## Run it

```bash
npm run build
```

## Test it

```bash
npm test
```

## Customize it

1. Edit `data/client_profile.json` to change the brand, accent, tone, and endpoint.
2. Set `api_url` to the endpoint you want to fetch.
3. Set `header` if your endpoint needs request headers.
4. Adjust `app/prompts/site_voice.txt` if you want a different copy style.
5. Re-run the builder to regenerate `data/feed.json`, `data/site_payload.json`, and `out/index.html`.

## Notes

- The script attempts a live `web_get()` first.
- If the API request fails, it falls back to `data/fallback_feed.json`.
- The feed normalization step maps common API field shapes into the `title` and `body` fields expected by the renderer.
- The copy layer uses `structured_output()` with `model()` when available, and falls back to built-in copy if the reasoning step fails.