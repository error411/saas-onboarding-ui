import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <a
        className="skip-link rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        href="#main-content"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className="container-page flex min-h-16 items-center justify-between gap-4"
      >
        <Link
          aria-label="OnboardKit home"
          className="flex items-center gap-3 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href="/"
        >
          <Image
            src="/logo.svg"
            alt=""
            width={32}
            height={32}
            priority
            aria-hidden="true"
          />
          <span>OnboardKit</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              className="transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <ButtonLink href="#start" size="sm">
          Get started
        </ButtonLink>
      </nav>
    </header>
  );
}
