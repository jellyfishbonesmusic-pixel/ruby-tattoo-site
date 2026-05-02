import { siteData } from "@/lib/siteData";

export function Footer() {
  const { business } = siteData;

  return (
    <footer id="contact" className="border-t border-[#c7a45d]/22 bg-[#070506] py-12">
      <div className="section-shell">
        <div className="ornate-panel mb-10 rounded-sm p-7 text-center sm:p-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.26em] text-[#c7a45d]">Ready for your next tattoo?</p>
          <h2 className="font-display text-3xl font-semibold text-[#fff4df] sm:text-4xl">Book through Bookedin or contact the shop with questions.</h2>
          <a
            href={business.bookingUrl}
            className="mt-6 inline-block bg-[#c7a45d] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#120a0d] transition hover:-translate-y-0.5 hover:bg-[#f2d07c]"
          >
            Book through Bookedin
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
          <h2 className="font-display text-3xl font-semibold text-[#fff4df]">{business.name}</h2>
          <p className="mt-3 max-w-md text-lg leading-7 text-[#f2e4cf]/72">{business.tagline}</p>
          </div>
          <div className="text-lg leading-8 text-[#f2e4cf]/76">
          <p>
            Phone:{" "}
            <a className="text-[#c7a45d] transition hover:text-[#f2d07c]" href="tel:+18106765307">
              {business.phone}
            </a>
          </p>
          <p>Address: {business.address}</p>
          <p>
            Instagram:{" "}
            <a className="text-[#c7a45d] transition hover:text-[#f2d07c]" href={business.instagram}>
              @ruby_tattoo_inks
            </a>
          </p>
          </div>
          <div className="text-lg leading-8 text-[#f2e4cf]/76">
          <p className="mb-1 text-[#fff4df]">Hours</p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 text-base leading-7">
            {business.hours.map((hour) => (
              <div key={hour.day} className="contents">
                <dt>{hour.day}</dt>
                <dd className="text-right text-[#f2e4cf]/68">{hour.time}</dd>
              </div>
            ))}
          </dl>
          <a className="mt-3 inline-block text-[#c7a45d] transition hover:text-[#f2d07c]" href="/#booking">
            Book Appointment
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
