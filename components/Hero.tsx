import { siteData } from "@/lib/siteData";

export function Hero() {
  const { hero } = siteData;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8, 6, 7, 0.48), rgba(8, 6, 7, 0.88)), radial-gradient(circle at 50% 35%, rgba(199, 164, 93, 0.22), transparent 22rem), url('${hero.image}'), linear-gradient(135deg, #080607 0%, #4b1220 48%, #12080b 100%)`
        }}
      />
      <div className="hero-lace absolute inset-0 opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(8,6,7,0.18)_38%,rgba(8,6,7,0.88)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080607] to-transparent" />

      <div className="section-shell relative flex min-h-[calc(100vh-5rem)] items-center justify-center py-20 text-center">
        <div className="hero-frame relative w-full max-w-5xl px-4 py-12 sm:px-10">
          <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#c7a45d]/18" />
          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#f2e4cf]/10" />
          <div className="relative">
            <div className="mx-auto flex max-w-3xl items-center gap-4 sm:gap-7">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c7a45d]/70 to-[#c7a45d]/20" />
              <div className="h-2 w-2 rotate-45 border border-[#c7a45d]/80" />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c7a45d]/70 to-[#c7a45d]/20" />
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.84] tracking-[0.1em] text-[#fff4df] drop-shadow-[0_14px_34px_rgba(0,0,0,0.72)] sm:text-8xl sm:tracking-[0.14em] lg:text-9xl">
              {hero.logoLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="mx-auto mt-7 flex max-w-2xl items-center gap-4 sm:gap-7">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c7a45d]/55 to-[#c7a45d]/15" />
              <div className="h-3 w-3 rotate-45 bg-[#c7a45d]/85 shadow-[0_0_24px_rgba(199,164,93,0.45)]" />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c7a45d]/55 to-[#c7a45d]/15" />
            </div>
            <p className="mx-auto mt-7 max-w-2xl text-2xl font-semibold leading-8 text-[#f2e4cf]/90 sm:text-3xl">
              {hero.tagline}
            </p>
            <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
              {hero.badges.map((badge) => (
                <span key={badge} className="border border-[#c7a45d]/34 bg-[#080607]/46 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f2e4cf]/84 backdrop-blur-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={siteData.business.bookingUrl}
              className="bg-[#c7a45d] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#120a0d] shadow-[0_18px_46px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:bg-[#f2d07c]"
            >
              Book Appointment
            </a>
            <a
              href="/artists"
              className="border border-[#f2e4cf]/40 bg-[#080607]/45 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#f2e4cf] backdrop-blur transition hover:-translate-y-1 hover:border-[#c7a45d] hover:text-[#c7a45d]"
            >
              Meet the Artists
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
