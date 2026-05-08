import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { getArtistBySlug, siteData } from "@/lib/siteData";

type ArtistPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return siteData.artists.map((artist) => ({
    slug: artist.slug
  }));
}

export async function generateMetadata({ params }: ArtistPageProps) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  return {
    title: artist ? `${artist.name} | Ruby Tattoo` : "Artist | Ruby Tattoo",
    description: artist ? `Selected tattoo work by ${artist.name} at Ruby Tattoo.` : "Selected tattoo work from Ruby Tattoo."
  };
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-28">
        <section className="section-shell py-14">
          <Link href="/artists" className="text-sm font-bold uppercase tracking-[0.18em] text-[#c7a45d] transition hover:text-[#f2d07c]">
            Back to Artists
          </Link>

          <div className="ornate-panel mt-8 grid gap-8 rounded-sm p-6 sm:p-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="overflow-hidden border border-[#c7a45d]/30 bg-[#1f1518]">
              <img src={artist.photo} alt={`${artist.name} portrait`} className="aspect-[4/5] h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#c7a45d]">{artist.role}</p>
              <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-[#fff4df] sm:text-6xl">{artist.name}</h1>
              <p className="mt-5 text-2xl leading-9 text-[#f2e4cf]/78">{artist.bio}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {artist.specialties.map((specialty) => (
                  <span key={specialty} className="border border-[#c7a45d]/30 bg-[#4b1220]/35 px-3 py-1 text-sm text-[#f2e4cf]/82">
                    {specialty}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={artist.bookingUrl} className="bg-[#c7a45d] px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-[#120a0d] transition hover:-translate-y-0.5 hover:bg-[#f2d07c]">
                  Book with {artist.name}
                </a>
                <a href={artist.instagram} className="border border-[#f2e4cf]/25 px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-[#f2e4cf] transition hover:-translate-y-0.5 hover:border-[#c7a45d] hover:text-[#c7a45d]">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-16">
          <SectionHeading eyebrow="Portfolio" title="Selected Work">
            By {artist.name}
          </SectionHeading>
          <PortfolioGrid
            images={artist.portfolio.map((image) => ({
              ...image,
              artistName: artist.name,
              artistSlug: artist.slug
            }))}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
