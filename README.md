# Innovation Lab

Smart agricultural technology for regenerative farming.

## Tech Stack

- [Next.js](https://nextjs.org) (React framework)
- [Tailwind CSS](https://tailwindcss.com) (styling)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Deployment

This project is configured for static export and GitHub Pages deployment.

### GitHub Pages setup

1. Push this repository to GitHub.
2. In your repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually).

The workflow in [.github/workflows/deploy-gh-pages.yml](.github/workflows/deploy-gh-pages.yml) will:

- install dependencies,
- run `npm run build` (static export),
- upload the `out/` folder,
- deploy to GitHub Pages.

### Notes

- `next.config.ts` auto-detects GitHub Actions and applies the correct `basePath` from your repository name.
- Images are configured as unoptimized so static export works on GitHub Pages.
