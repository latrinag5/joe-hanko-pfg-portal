import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Finance Advisory Briefing - Joe Hanko",
  description: "A private advisory briefing prepared for Joe Hanko, The UPS Store (Non-Traditional), Concord / Pittsburg / Walnut Creek, CA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-noise">{children}</body>
    </html>
  );
}
