import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vica Blog",
  description: "next application for vica blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
