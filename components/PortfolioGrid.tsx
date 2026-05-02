"use client";

import { useState } from "react";
import type { GalleryImage } from "@/lib/siteData";

type PortfolioGridProps = {
  images: GalleryImage[];
  showArtistName?: boolean;
};

export function PortfolioGrid({ images, showArtistName = false }: PortfolioGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="masonry">
        {images.map((image) => (
          <button
            key={`${image.artistSlug ?? "shop"}-${image.src}`}
            type="button"
            onClick={() => setSelectedImage(image)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm border border-[#c7a45d]/30 bg-[#120d0f] p-1 text-left shadow-[0_16px_50px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(242,228,207,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#c7a45d]/75 hover:shadow-[0_22px_70px_rgba(0,0,0,0.44),0_0_28px_rgba(199,164,93,0.08)]"
          >
            <div className="relative overflow-hidden">
              <PortfolioImage image={image} />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#080607]/88 via-[#080607]/18 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f2e4cf]">{image.artistName ?? "Ruby Tattoo"}</p>
              </div>
            </div>
            {showArtistName && image.artistName ? (
              <div className="border-t border-[#c7a45d]/20 px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7a45d]">{image.artistName}</p>
              </div>
            ) : null}
          </button>
        ))}
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#030202]/88 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <div className="ornate-panel max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-sm" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-[#c7a45d]/25 px-5 py-4">
              <p className="font-display text-xl font-semibold text-[#fff4df]">{selectedImage.artistName ?? "Ruby Tattoo"}</p>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="border border-[#c7a45d]/40 px-3 py-1 text-sm font-bold uppercase tracking-[0.14em] text-[#f2e4cf] transition hover:border-[#c7a45d] hover:text-[#c7a45d]"
              >
                Close
              </button>
            </div>
            <div className="max-h-[76vh] overflow-auto p-4">
              <PortfolioImage image={selectedImage} large />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function PortfolioImage({ image, large = false }: { image: GalleryImage; large?: boolean }) {
  const [hasError, setHasError] = useState(false);
  const aspectClass = large ? "max-h-[70vh] min-h-[420px]" : image.tall ? "aspect-[3/4]" : "aspect-[4/3]";

  if (hasError) {
    return (
      <div className={`flex w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_32%,rgba(199,164,93,0.18),transparent_12rem),linear-gradient(135deg,#32121a,#0b0607)] p-6 ${aspectClass}`}>
        <div className="w-full max-w-sm border border-[#c7a45d]/45 p-6 text-center shadow-[inset_0_0_0_1px_rgba(242,228,207,0.06)]">
          <p className="font-display text-2xl font-semibold text-[#fff4df]">Portfolio Image</p>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-[#c7a45d]">{image.artistName ?? "Ruby Tattoo"}</p>
          <p className="mt-4 break-words text-sm leading-6 text-[#f2e4cf]/66">{image.src}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      onError={() => setHasError(true)}
      className={`w-full bg-[#120d0f] object-cover transition duration-700 group-hover:scale-[1.06] ${aspectClass}`}
    />
  );
}
