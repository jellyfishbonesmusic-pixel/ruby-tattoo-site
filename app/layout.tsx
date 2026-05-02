import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruby Tattoo | Custom Tattoos in Marine City, MI",
  description:
    "Ruby Tattoo is a calm, welcoming tattoo shop in Marine City, Michigan offering custom tattoos, walk-ins when available, and oddities."
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
