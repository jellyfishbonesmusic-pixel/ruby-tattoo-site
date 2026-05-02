# Ruby Tattoo Website

A free-to-host Next.js App Router website for Ruby Tattoo, styled as a polished gothic Victorian tattoo parlor with burgundy, mauve, antique gold, and warm cream tones.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit Shop Content

Most site copy and links live in:

```txt
lib/siteData.ts
```

Update these values first:

- `business.bookingUrl`: replace `BOOKEDIN_URL_HERE` with the real Bookedin URL.
- `business.phone`, `business.address`, `business.instagram`, and `business.hours`.
- Artist bios, specialties, Instagram URLs, and booking URLs.
- FAQ answers and artist portfolio image paths.

## Replace Hero or Logo Images

The homepage hero is ready for a real shop photo at:

```txt
public/shop/hero-placeholder.jpg
```

The editable path is in `lib/siteData.ts` under `hero.image`. If that file is missing, the site shows a gothic burgundy/black gradient fallback.

The text logo can later be replaced with an image at:

```txt
public/logo/ruby-tattoo-logo.png
```

The future logo path is stored in `lib/siteData.ts` under `hero.logoImage`.

## Replace Artist Photos

Artist photo placeholders live in:

```txt
public/artists/
```

Add final artist photos to that folder, then update each artist's `photo` value in `lib/siteData.ts`.

Example:

```ts
photo: "/artists/kristen.jpg"
```

## Replace Gallery Images

Artist portfolio image paths are organized by artist in:

```txt
lib/siteData.ts
```

Each artist has a `portfolio` array. Add final tattoo photos to folders such as:

```txt
public/artists/kristen/
public/artists/lorenzo/
public/artists/gracy/
```

Then replace the placeholder paths in that artist's `portfolio` array.

Example:

```ts
portfolio: [
  { src: "/artists/kristen/blackwork-sleeve.jpg", alt: "Blackwork sleeve tattoo by Kristen Klepak", tall: true }
]
```

Use `tall: true` for portrait images and `tall: false` for landscape images.

The main `/gallery` page is automatically built from each artist's `portfolio` images and includes filters for All, Kristen Klepak, Lorenzo Diaz, and Gracy Minor.

## Artist Pages

Dynamic artist pages are generated at:

```txt
/artists/kristen-klepak
/artists/lorenzo-diaz
/artists/gracy-minor
```

Change artist names, slugs, bios, specialties, Instagram links, booking links, portraits, and portfolio images in `lib/siteData.ts`.

## Deploy Free

This site can be deployed free on hosts such as Vercel or Netlify. Connect the repository, keep the default Next.js settings, and add no database or paid API keys.
