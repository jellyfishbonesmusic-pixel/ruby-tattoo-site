import { siteData } from "@/lib/siteData";

export function FAQ() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {siteData.faqs.map((faq) => (
        <details key={faq.question} className="group border border-[#c7a45d]/25 bg-[#120d0f]/82 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.22)] open:border-[#c7a45d]/60">
          <summary className="cursor-pointer list-none font-display text-xl font-semibold text-[#fff4df]">
            <span className="mr-3 text-[#c7a45d]">+</span>
            {faq.question}
          </summary>
          <p className="mt-4 text-lg leading-7 text-[#f2e4cf]/75">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
