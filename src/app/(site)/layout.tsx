import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GatewayProvider } from "@/components/providers/GatewayProvider";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GatewayProvider>
      <Navbar />
      {/* Each page's first section (VideoHero / PageHero) is responsible for
          clearing the fixed navbar itself, since the hero treatment differs
          per page (full-bleed video vs. a padded gradient band). */}
      <main>{children}</main>
      <Footer />
    </GatewayProvider>
  );
}
