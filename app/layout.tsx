import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruby Tattoo | Custom Tattoos in Marine City, MI",
  description: "Ruby Tattoo is a Marine City studio known for fine tattooing, vintage atmosphere, and curated curiosities."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
