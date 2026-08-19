import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const COMPANY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-product", label: "Our Product" },
  { href: "/why-trust-us", label: "Why Trust Us" },
  { href: "/our-team", label: "Our Team" },
  { href: "/for-partners", label: "For Partners" },
];

const ABOUT_LINKS = [
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-500 text-snow">
      <Container className="relative z-10 flex flex-col gap-fluid-4xl py-section-md">
        <p className="text-h5 max-w-md">Building the future of healthcare, with love.</p>

        <div className="grid grid-cols-2 gap-fluid-3xl sm:grid-cols-2 md:w-1/2 md:justify-self-end">
          <div className="flex flex-col gap-fluid-md">
            <span className="font-display text-body-sm uppercase tracking-[0.08em] text-snow/50">
              Company
            </span>
            {COMPANY_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-body text-snow/80 hover:text-snow">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-fluid-md">
            <span className="font-display text-body-sm uppercase tracking-[0.08em] text-snow/50">
              About
            </span>
            {ABOUT_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-body text-snow/80 hover:text-snow">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-fluid-xl text-body-sm text-snow/50">
          <span>Copyright © {new Date().getFullYear()}</span>
        </div>
      </Container>

      <Image
        src="/images/logotype-snow.svg"
        alt=""
        aria-hidden="true"
        width={1000}
        height={300}
        className="pointer-events-none absolute -bottom-55 left-1/2 w-[101%] max-w-none -translate-x-1/2 opacity-[0.9] h-full"
      />
    </footer>
  );
}
