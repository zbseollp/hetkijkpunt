# HetKijkpunt

Astro 5 static site for **hetkijkpunt.nl**, migrated from WordPress and deployed to Cloudflare Workers.

## Stack

- [Astro](https://astro.build) 5 (`output: "static"`, `trailingSlash: "always"`)
- Cloudflare Workers static assets (`wrangler.toml`)

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server
npm run build     # build to ./dist
npm run deploy    # build + wrangler deploy
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/pages/[...slug].astro` | post + page detail routes → `/{slug}/` |
| `src/pages/blog/` | blog index |
| `src/pages/category/`, `src/pages/tag/`, `src/pages/author/` | taxonomy archives |
| `src/lib/posts.ts` | post loading + sorting helpers |
| `src/data/` | site config, page and static content |
| `src/layouts/` | shared layouts |
| `public/` | assets mirrored from the old site |

## URL structure

Every URL matches the original WordPress site exactly: lowercase slug with a
trailing slash.

## Not in this repository

`migration/mirror-backup/` holds the local WordPress mirror used as source
material during the migration. It is gitignored — it is input for the
migration, not site code.
