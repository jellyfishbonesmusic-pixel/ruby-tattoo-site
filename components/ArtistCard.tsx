import Link from "next/link";
import type { Artist } from "@/lib/siteData";

type ArtistCardProps = {
  artist: Artist;
};

export function ArtistCard({ artist }: ArtistCardProps) {
  const firstName = artist.name.split(" ")[0];

  return (
    <article className="ornate-panel group relative overflow-hidden rounded-sm transition duration-300 hover:-translate-y-1 hover:border-[#c7a45d]/80 hover:shadow-[0_26px_86px_rgba(0,0,0,0.46),0_0_34px_rgba(199,164,93,0.12)]">
      <Link href={`/artists/${artist.slug}`} className="absolute inset-0 z-10" aria-label={`View ${artist.name}'s portfolio`} />
      <div className="aspect-[4/5] overflow-hidden border-b border-[#c7a45d]/25 bg-[#1f1518]">
        <img
          src={artist.photo}
          alt={`${artist.name} portrait`}
          className="h-full w-full object-cover opacity-88 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
      </div>
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c7a45d]">{artist.role}</p>
        <h3 className="mt-2 font-display text-3xl font-semibold text-[#fff4df]">{artist.name}</h3>
        <p className="mt-4 text-lg leading-7 text-[#f2e4cf]/75">{artist.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {artist.specialties.map((specialty) => (
            <span key={specialty} className="border border-[#c7a45d]/30 bg-[#4b1220]/35 px-3 py-1 text-sm text-[#f2e4cf]/82">
              {specialty}
            </span>
          ))}
        </div>
        <div className="relative z-20 mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={artist.bookingUrl} className="bg-[#c7a45d] px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-[#120a0d] transition hover:bg-[#f2d07c]">
            Book with {firstName}
          </a>
          <a href={artist.instagram} className="border border-[#f2e4cf]/25 px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-[#f2e4cf] transition hover:border-[#c7a45d] hover:text-[#c7a45d]">
            Instagram
          </a>
        </div>
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#c7a45d]/80 transition group-hover:text-[#f2d07c]">
          View Portfolio
        </p>
      </div>
    </article>
  );
}
