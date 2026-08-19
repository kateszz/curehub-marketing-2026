import type { Metadata } from "next";
import { epilogue, syne } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.curehub.eu"),
  title: {
    default: "Curehub | Science-Backed Supplements Based on Your DNA",
    template: "%s | Curehub",
  },
  description:
    "AI-driven wellness genomics platform delivering personalized supplement and lifestyle guidance based on your unique biology. Backed by leading genetics researchers, built with the highest security and privacy standards.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/webclip.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${epilogue.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
