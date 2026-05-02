import { siteData } from "@/lib/siteData";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#c7a45d]/24 bg-[#080607]/86 shadow-[0_12px_42px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-5">
        <a href="/" className="group flex items-center gap-3 text-[#f2e4cf]" aria-label="Ruby Tattoo home">
          <span className="flex h-11 w-11 items-center justify-center border border-[#c7a45d]/58 bg-[#14090d]/88 shadow-[inset_0_0_0_1px_rgba(242,228,207,0.05)] transition group-hover:border-[#f2d07c]">
            <span className="h-4 w-4 rotate-45 border border-[#c7a45d]/80 transition group-hover:border-[#f2d07c]" />
          </span>
          <span className="font-display text-base font-bold uppercase leading-none tracking-[0.22em] sm:text-lg">
            Ruby
            <span className="block text-[#c7a45d]">Tattoo</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#f2e4cf]/72 md:flex">
          {siteData.nav.map((item) => (
            <a key={item.href} href={item.href} className="group relative py-2 transition hover:text-[#f2d07c]">
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-[#c7a45d] shadow-[0_0_14px_rgba(199,164,93,0.55)] transition group-hover:scale-x-100" />
            </a>
          ))}
        </div>
        <a
          href={siteData.business.bookingUrl}
          className="border border-[#f2d07c]/55 bg-[#c7a45d] px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-[#120a0d] shadow-[0_10px_30px_rgba(199,164,93,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f2d07c] hover:shadow-[0_14px_36px_rgba(199,164,93,0.28)]"
        >
          Book
        </a>
      </nav>
    </header>
  );
}
