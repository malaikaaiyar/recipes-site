# Recipes Site

A simple, clean recipe collection site built with Astro.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:4321](http://localhost:4321) in your browser

## Building for Production

```bash
npm run build
```

The built site will be in the `dist/` folder.

## Deployment

This site can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Adding Recipes

To add new recipes:
1. Add the recipe to the `recipes` array in `src/pages/recipes.astro`
2. Add the recipe data to the `recipes` object in `src/pages/recipes/[slug].astro`
3. Add the slug to the `getStaticPaths()` function in `src/pages/recipes/[slug].astro`
