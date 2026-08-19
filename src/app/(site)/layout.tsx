import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {/* Each page's first section (VideoHero / PageHero) is responsible for
          clearing the fixed navbar itself, since the hero treatment differs
          per page (full-bleed video vs. a padded gradient band). */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
