import { ArtistCard } from "@/components/ArtistCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { siteData } from "@/lib/siteData";

export const metadata = {
  title: "Artists | Ruby Tattoo",
  description: "Meet the Ruby Tattoo artists and view their portfolios."
};

export default function ArtistsPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <section className="section-shell py-16">
          <SectionHeading eyebrow="Artists" title="Ruby Tattoo Portfolios">
            Browse each artist, see their work, and book with the artist whose style fits your idea.
          </SectionHeading>
          <div className="grid gap-6 lg:grid-cols-3">
            {siteData.artists.map((artist) => (
              <ArtistCard key={artist.slug} artist={artist} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
