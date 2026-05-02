import { ArtistCard } from "@/components/ArtistCard";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteData } from "@/lib/siteData";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="section-shell py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#c7a45d]">Shop Vibe</p>
              <h2 className="font-display text-4xl font-semibold text-[#fff4df] sm:text-5xl">{siteData.shopVibe.title}</h2>
              <p className="mt-4 text-xl leading-8 text-[#f2e4cf]/76">{siteData.shopVibe.text}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {siteData.shopVibe.images.map((image, index) => (
                <figure
                  key={image.src}
                  className="group relative min-h-56 overflow-hidden rounded-sm border border-[#c7a45d]/28 bg-[linear-gradient(135deg,#2b1017,#080607)] shadow-[0_18px_54px_rgba(0,0,0,0.32)] sm:min-h-72"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(8,6,7,0.18), rgba(8,6,7,0.68)), url('${image.src}'), radial-gradient(circle at 50% 34%, rgba(199,164,93,0.2), transparent 14rem), linear-gradient(135deg, #4b1220, #080607)`
                    }}
                    aria-label={image.alt}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(8,6,7,0.55))]" />
                  <figcaption className="absolute bottom-4 left-4 right-4 border-t border-[#c7a45d]/35 pt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f2e4cf]/78">
                    Parlor Detail {index + 1}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <OrnamentalDivider />

        <section id="about" className="section-shell py-20 sm:py-24">
          <div className="ornate-panel rounded-sm p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#c7a45d]">The Parlor</p>
                <h2 className="font-display text-4xl font-semibold text-[#fff4df] sm:text-5xl">
                  Antique warmth, custom work, and a little mystery.
                </h2>
              </div>
              <div className="space-y-5 text-2xl leading-9 text-[#f2e4cf]/78">
                {siteData.about.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <OrnamentalDivider />

        <section className="section-shell py-20 sm:py-24">
          <SectionHeading eyebrow="Why Ruby Tattoo" title="Warm, Skilled, A Little Strange" />
          <div className="grid gap-5 md:grid-cols-3">
            {siteData.whyRuby.map((item) => (
              <article key={item.title} className="ornate-panel rounded-sm p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-[#c7a45d]/75 hover:shadow-[0_24px_80px_rgba(199,164,93,0.1)]">
                <div className="mx-auto mb-5 h-4 w-4 rotate-45 border border-[#c7a45d]/80 bg-[#c7a45d]/12 shadow-[0_0_26px_rgba(199,164,93,0.16)]" />
                <h3 className="font-display text-2xl font-semibold text-[#fff4df]">{item.title}</h3>
                <p className="mt-4 text-lg leading-7 text-[#f2e4cf]/74">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <OrnamentalDivider />

        <section id="artists" className="section-shell py-20 sm:py-24">
          <SectionHeading eyebrow="Artists" title="Meet the Artists">
            Choose the artist whose style fits your idea, or book a consultation and let the shop help guide the match.
          </SectionHeading>
          <div className="grid gap-6 lg:grid-cols-3">
            {siteData.artists.map((artist) => (
              <ArtistCard key={artist.name} artist={artist} />
            ))}
          </div>
        </section>

        <OrnamentalDivider />

        <section id="gallery" className="bg-[#0c0809]/74 py-20 sm:py-24">
          <div className="section-shell">
            <SectionHeading eyebrow="Gallery" title="Tattoos" />
            <GalleryGrid />
          </div>
        </section>

        <OrnamentalDivider />

        <section id="booking" className="section-shell py-20 sm:py-24">
          <div className="ornate-panel overflow-hidden rounded-sm p-8 text-center sm:p-14">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#c7a45d]">Appointments</p>
            <h2 className="font-display text-4xl font-semibold text-[#fff4df] sm:text-5xl">Book Appointment</h2>
            <p className="mx-auto mt-5 max-w-2xl text-2xl leading-9 text-[#f2e4cf]/78">
              Ready to start your next tattoo or ask about availability?
            </p>
            <a
              href={siteData.business.bookingUrl}
              className="mt-8 inline-block bg-[#c7a45d] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#120a0d] shadow-[0_18px_46px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:bg-[#f2d07c]"
            >
              Book through Bookedin
            </a>
            <p className="mt-5 text-lg text-[#f2e4cf]/70">Walk-ins are welcome based on artist availability.</p>
          </div>
        </section>

        <OrnamentalDivider />

        <section id="faq" className="section-shell py-20 pt-8 sm:py-24">
          <SectionHeading eyebrow="FAQ" title="Before You Visit" />
          <FAQ />
        </section>

        <OrnamentalDivider />

        <section className="section-shell py-20 text-center">
          <div className="ornate-panel mx-auto max-w-3xl rounded-sm p-8 sm:p-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#c7a45d]">Find the Shop</p>
            <h2 className="font-display text-4xl font-semibold text-[#fff4df] sm:text-5xl">Find Ruby Tattoo</h2>
            <address className="mt-6 not-italic text-2xl leading-9 text-[#f2e4cf]/78">
              Ruby Tattoo
              <br />
              6738 River Rd
              <br />
              Marine City, MI 48039
            </address>
            <a
              href="https://maps.google.com/?q=Ruby+Tattoo+Marine+City"
              className="mt-8 inline-block bg-[#c7a45d] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#120a0d] shadow-[0_18px_46px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:bg-[#f2d07c]"
            >
              Get Directions
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function OrnamentalDivider() {
  return (
    <div className="section-shell flex items-center gap-4">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c7a45d]/45 to-[#c7a45d]/15" />
      <span className="h-2.5 w-2.5 rotate-45 border border-[#c7a45d]/70 bg-[#080607]" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c7a45d]/45 to-[#c7a45d]/15" />
    </div>
  );
}
