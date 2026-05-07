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

- `business.bookingUrl`
- `business.phone`, `business.address`, `business.instagram`, and `business.hours`.
- Artist bios, specialties, Instagram URLs, and booking URLs.
- FAQ answers and artist portfolio image paths.

## Update Hero and Shop Images

The homepage hero image is currently:

```txt
public/shop/shop-1.jpg
```

The editable path is in `lib/siteData.ts` under `hero.image`. If that image is missing, the site shows a gothic burgundy/black gradient fallback.

The "Inside the Parlor" photo strip uses:

```txt
public/shop/shop-1.jpg
public/shop/shop-2.jpg
public/shop/shop-3.jpg
```

Those image paths are also controlled in `lib/siteData.ts`.

## Update Artist Photos

Artist portraits live in:

```txt
public/artists/
```

Update each artist's `photo` value in `lib/siteData.ts` if you want to swap portraits later.

Example:

```ts
photo: "/artists/kristen-klepak.jpg"
```

## Update Portfolio Images

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

Then update that artist's `portfolio` array.

Example:

```ts
portfolio: [
  { src: "/artists/kristen/blackwork-sleeve.jpg", alt: "Blackwork sleeve tattoo by Kristen Klepak", tall: true }
]
```

Use `tall: true` for portrait images and `tall: false` for landscape images.

The main `/gallery` page is automatically built from each artist's `portfolio` images and includes filters for all three artists.

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
