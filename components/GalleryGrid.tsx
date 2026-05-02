import { getGalleryImages } from "@/lib/siteData";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export function GalleryGrid() {
  return <PortfolioGrid images={getGalleryImages()} showArtistName />;
}
