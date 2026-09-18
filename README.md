# Malu Birthday Storybook

GitHub Pages-ready version of the birthday website.

## What is already connected

- Homepage 4-image carousel
- Intro illustration (`Intro 01`)
- Storybook pages 01–10 with the uploaded images
- Storybook remains structured for 30 pages
- Final birthday-wish section
- Mobile-responsive layout and transitions

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy on GitHub Pages

1. Create a new GitHub repository, for example `malu-birthday`.
2. Upload/push every file in this folder to the repository.
3. Make sure the default branch is `main`.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **GitHub Actions**.
6. Open the **Actions** tab. The included `Deploy to GitHub Pages` workflow will build and publish the site.

The workflow automatically supports both:

- `username.github.io` repositories
- project repositories such as `username.github.io/malu-birthday/`

## Add story images 11–30 later

Put the files in `public/story/` using these names:

- `story-11.jpg`
- `story-12.jpg`
- ...
- `story-30.jpg`

Then update the matching image values in `src/lib/story-data.ts` to:

```ts
image: storyAsset('story-11.jpg')
```

and so on.

## Main editable files

- `src/app/page.tsx` — layout, navigation, animations
- `src/lib/story-data.ts` — story titles, text, dates, image mapping
- `src/app/globals.css` — global styling
- `public/story/` — all website images
