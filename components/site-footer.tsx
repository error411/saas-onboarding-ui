import Link from "next/link";
import { NAV_ITEMS } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-page flex flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        <nav aria-label="Footer navigation" className="flex gap-5">
          {NAV_ITEMS.map((item) => (
            <Link
              className="transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
