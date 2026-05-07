export const siteData = {
  business: {
    name: "Ruby Tattoo",
    tagline: "Custom tattoos, walk-ins when available, and oddities.",
    phone: "(810) 676-5307",
    address: "6738 River Rd, Marine City, MI 48039",
    instagram: "https://www.instagram.com/ruby_tattoo_inks",
    hours: [
      { day: "Sunday", time: "Closed" },
      { day: "Monday", time: "Closed" },
      { day: "Tuesday", time: "9:30 AM-6 PM" },
      { day: "Wednesday", time: "9:30 AM-6 PM" },
      { day: "Thursday", time: "9:30 AM-6 PM" },
      { day: "Friday", time: "11 AM-8 PM" },
      { day: "Saturday", time: "11 AM-8 PM" }
    ],
    bookingUrl: "https://bookedin.com/book/ruby-tattoo"
  },
  hero: {
    image: "/shop/shop-1.jpg",
    logoLines: ["Ruby", "Tattoo"],
    tagline: "Custom tattooing, antique charm, and oddities.",
    badges: ["Award-winning artists", "Custom work in many styles", "Walk-ins when available"]
  },
  shopVibe: {
    title: "Inside the Parlor",
    text: "A calm, antique, witchy studio filled with custom work, oddities, and warm vintage details.",
    images: [
      { src: "/shop/shop-1.jpg", alt: "Ruby Tattoo vintage sofa and parlor wall" },
      { src: "/shop/shop-2.jpg", alt: "Ruby Tattoo antique wall decor and parlor chairs" },
      { src: "/shop/shop-3.jpg", alt: "Ruby Tattoo neon open sign in the shop window" }
    ]
  },
  whyRuby: [
    {
      title: "Award-Winning Artists",
      text: "Custom tattooing from artists recognized for their work."
    },
    {
      title: "Calm, Open Studio",
      text: "A relaxed appointment experience without the cold intimidating shop feeling."
    },
    {
      title: "Oddities & Curiosities",
      text: "A rotating collection of strange little treasures, taxidermy, wet specimens, and curiosities."
    }
  ],
  nav: [
    { label: "About", href: "/#about" },
    { label: "Artists", href: "/artists" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" }
  ],
  about:
    "Ruby Tattoo is a calm, open, and welcoming tattoo shop with a vintage antique witchy vibe. The studio blends custom tattooing with the feeling of an old parlor: dark walls, ornate frames, oddities, tarot details, soft lighting, and a relaxed atmosphere where clients can feel comfortable.\n\nOur artists create custom work across many tattoo styles, from delicate pieces to bold statement tattoos. Ruby Tattoo is also home to award-winning artists, giving clients a professional experience without the cold or intimidating shop feeling.\n\nAlongside tattooing, we also carry a rotating collection of oddities, curiosities, wet specimens, taxidermy, and other strange little treasures.",
  artists: [
    {
      name: "Kristen Klepak",
      slug: "kristen-klepak",
      role: "Owner / Tattoo Artist",
      photo: "/artists/kristen-klepak.jpg",
      bio: "Kristen creates thoughtful custom work in a calm, collaborative appointment experience.",
      specialties: ["Custom tattoos", "All styles", "Intuitive tattoos"],
      instagram: "https://www.instagram.com/kristen_x_tattoos",
      bookingUrl: "https://bookedin.com/book/ruby-tattoo",
      portfolio: [
        { src: "/artists/kristen/work-1.jpg", alt: "Color dragon tattoo by Kristen Klepak", tall: true },
        { src: "/artists/kristen/work-2.jpg", alt: "Floral head and neck tattoo by Kristen Klepak", tall: false },
        { src: "/artists/kristen/work-3.jpg", alt: "Color koi hand tattoo by Kristen Klepak", tall: true },
        { src: "/artists/kristen/work-4.jpg", alt: "Color tree and skull leg tattoo by Kristen Klepak", tall: true },
        { src: "/artists/kristen/work-5.jpg", alt: "Black and gray portrait tattoo by Kristen Klepak", tall: true },
        { src: "/artists/kristen/work-6.jpg", alt: "Color sea character tattoo by Kristen Klepak", tall: true },
        { src: "/artists/kristen/work-7.jpg", alt: "Color skull and dreamcatcher tattoo by Kristen Klepak", tall: true }
      ]
    },
    {
      name: "Lorenzo Diaz",
      slug: "lorenzo-diaz",
      role: "Tattoo Artist",
      photo: "/artists/lorenzo-diaz.jpg",
      bio: "Lorenzo brings a steady hand and bold visual instincts to custom tattoo projects.",
      specialties: ["Illustrative work", "Animation", "Cover-ups"],
      instagram: "https://www.instagram.com/lorenz2573",
      bookingUrl: "https://bookedin.com/book/ruby-tattoo",
      portfolio: [
        { src: "/artists/lorenzo/work-1.jpg", alt: "Blue cartoon tattoo by Lorenzo Diaz", tall: true },
        { src: "/artists/lorenzo/work-2.jpg", alt: "Green cartoon tattoo by Lorenzo Diaz", tall: true },
        { src: "/artists/lorenzo/work-3.jpg", alt: "Red and pink cartoon tattoo by Lorenzo Diaz", tall: true },
        { src: "/artists/lorenzo/work-4.jpg", alt: "Color character tattoo by Lorenzo Diaz", tall: true },
        { src: "/artists/lorenzo/work-5.jpg", alt: "Rose and bee tattoo by Lorenzo Diaz", tall: true },
        { src: "/artists/lorenzo/work-6.jpg", alt: "Black and gray figure tattoo by Lorenzo Diaz", tall: true },
        { src: "/artists/lorenzo/work-7.jpg", alt: "Black and gray wildlife tattoo by Lorenzo Diaz", tall: true }
      ]
    },
    {
      name: "Gracy Minor",
      slug: "gracy-minor",
      role: "Tattoo Artist",
      photo: "/artists/gracy-minor.png",
      bio: "Gracy works with guests to shape personal ideas into elegant, lasting tattoos.",
      specialties: ["Custom pieces", "Fine line", "Creepy art"],
      instagram: "https://www.instagram.com/tattoo_pariah",
      bookingUrl: "https://bookedin.com/book/ruby-tattoo",
      portfolio: [
        { src: "/artists/gracy/work-1.jpg", alt: "Color dolphin tattoo by Gracy Minor", tall: true },
        { src: "/artists/gracy/work-2.jpg", alt: "Fine line food tattoo by Gracy Minor", tall: true },
        { src: "/artists/gracy/work-3.jpg", alt: "Color swordfish tattoo by Gracy Minor", tall: true },
        { src: "/artists/gracy/work-4.jpg", alt: "Black lettering tattoo by Gracy Minor", tall: false },
        { src: "/artists/gracy/work-5.jpg", alt: "Fine line hummingbird tattoo by Gracy Minor", tall: true }
      ]
    }
  ],
  faqs: [
    {
      question: "Do you take walk-ins?",
      answer:
        "Walk-ins are welcome based on artist availability. Booking ahead is the best way to secure a specific artist, date, and time."
    },
    {
      question: "How do I book?",
      answer:
        "Use the Book Appointment buttons on this site to request time through Bookedin. You can also contact the shop directly if you have questions before booking."
    },
    {
      question: "How should I prepare for my appointment?",
      answer:
        "Arrive rested, hydrated, and fed. Bring valid ID, wear clothing that gives easy access to the tattoo area, and avoid alcohol before your appointment."
    },
    {
      question: "Do you require deposits?",
      answer:
        "Deposits may be required to reserve tattoo appointments and are typically applied toward the final cost. Ask your artist for their current policy."
    },
    {
      question: "Can I choose a specific artist?",
      answer:
        "Yes. Each artist has their own style and availability. Use the artist booking buttons or mention your preferred artist when booking."
    }
  ]
};

export type Artist = (typeof siteData.artists)[number];
export type GalleryImage = Artist["portfolio"][number] & {
  artistName?: string;
  artistSlug?: string;
};

export function getArtistBySlug(slug: string) {
  return siteData.artists.find((artist) => artist.slug === slug);
}

export function getGalleryImages(artistSlug?: string): GalleryImage[] {
  if (artistSlug) {
    const artist = getArtistBySlug(artistSlug);
    return artist
      ? artist.portfolio.map((image) => ({
          ...image,
          artistName: artist.name,
          artistSlug: artist.slug
        }))
      : [];
  }

  return siteData.artists.flatMap((artist) =>
    artist.portfolio.map((image) => ({
      ...image,
      artistName: artist.name,
      artistSlug: artist.slug
    }))
  );
}
