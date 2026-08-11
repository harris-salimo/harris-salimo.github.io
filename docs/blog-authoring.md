# Markdown blog authoring

The blog uses Astro's build-time content collections. Articles live in `src/content/blog/`, and every Markdown file is validated during the build.

## Create an article

1. Copy `src/content/blog/draft-example.md` to a descriptive kebab-case filename, such as `designing-a-reliable-api.md`.
2. Replace the example frontmatter and body with the real article.
3. Keep `draft: true` while writing and reviewing.
4. Run the development server and open `/blog/<filename>/` to preview the article. The `.md` extension is not part of the URL.
5. Set `draft: false` when the article is ready to publish.
6. Run the production build. The article will appear on `/blog/`, in Latest articles on the homepage, and at its detail URL.

## Required frontmatter

```yaml
---
title: "A clear article title"
description: "A concise summary used on article lists and in page metadata."
publishedAt: 2026-08-11
tags:
  - TypeScript
  - Architecture
draft: true
---
```

- `title`: non-empty article title.
- `description`: non-empty summary for cards and SEO metadata.
- `publishedAt`: publication date in `YYYY-MM-DD` format.
- `updatedAt`: optional date in `YYYY-MM-DD` format.
- `tags`: an array of one or more descriptive strings; an empty array is allowed.
- `draft`: use `true` for private work in progress and `false` for published content.

Astro rejects invalid frontmatter at build time. Articles are sorted newest first by `publishedAt`.

## Draft behavior

- Drafts do not appear on the homepage or blog index.
- Development mode creates detail routes for drafts so they can be reviewed directly.
- Production builds do not create detail routes for drafts.
- The included example is intentionally a draft and must not be presented as Harris's published writing.

## Markdown body

Use standard Markdown headings, paragraphs, lists, links, blockquotes, horizontal rules, inline code, and fenced code blocks. Start body sections at `##` because the page template already renders the article title as the single `h1`.

The article template provides responsive typography, keyboard-visible links, horizontally scrollable code blocks, semantic `<time>` elements, and article metadata without requiring component edits.
