import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { getGalleryImages, siteData } from "@/lib/siteData";

type GalleryPageProps = {
  searchParams: Promise<{
    artist?: string;
  }>;
};

export const metadata = {
  title: "Gallery | Ruby Tattoo",
  description: "Browse Ruby Tattoo portfolio work by artist."
};

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const { artist: artistSlug } = await searchParams;
  const activeArtist = artistSlug ? siteData.artists.find((artist) => artist.slug === artistSlug) : undefined;
  const activeSlug = activeArtist?.slug;
  const images = getGalleryImages(activeSlug);
  const tabs = [{ label: "All", href: "/gallery", slug: undefined }, ...siteData.artists.map((artist) => ({
    label: artist.name,
    href: `/gallery?artist=${artist.slug}`,
    slug: artist.slug
  }))];

  return (
    <>
      <Header />
      <main className="pt-28">
        <section className="section-shell py-16">
          <SectionHeading eyebrow="Gallery" title="Ruby Tattoo Portfolio">
            Filter tattoo work by artist, then click any image to view it larger.
          </SectionHeading>

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => {
              const isActive = tab.slug === activeSlug || (!tab.slug && !activeSlug);

              return (
                <Link
                  key={tab.label}
                  href={tab.href}
                  className={`border px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] transition hover:-translate-y-0.5 ${
                    isActive
                      ? "border-[#c7a45d] bg-[#c7a45d] text-[#120a0d]"
                      : "border-[#c7a45d]/35 bg-[#120d0f]/78 text-[#f2e4cf] hover:border-[#c7a45d] hover:text-[#c7a45d]"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>

          <PortfolioGrid images={images} showArtistName={!activeSlug} />
        </section>
      </main>
      <Footer />
    </>
  );
}
