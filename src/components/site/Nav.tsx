import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { business } from "@/config/business";
import { cn } from "@/lib/utils";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#heritage" },
  { label: "Bridal", href: "#bridal" },
  { label: "Why Us", href: "#why-us" },
  { label: "Visit Us", href: "#visit" },
];

export function Nav({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-gold/20 bg-obsidian/95 py-2 backdrop-blur-xl"
          : "border-transparent bg-obsidian/70 py-4 backdrop-blur-md",
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-10">
        <a href="#top" className="flex min-w-0 flex-col">
          <span
            className={cn(
              "truncate font-display tracking-[0.2em] text-ivory transition-all duration-500",
              scrolled ? "text-base sm:text-lg" : "text-lg sm:text-2xl",
            )}
          >
            {business.wordmark}
          </span>
          <span className="eyebrow hidden text-gold/70 sm:block">Koramangala, Bengaluru</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow text-ivory/75 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onBook}
            className="eyebrow border border-gold/60 px-5 py-3 text-gold transition-colors hover:bg-gold hover:text-obsidian"
          >
            Book a Consultation
          </button>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={business.phone.href}
            aria-label={`Call ${business.name}`}
            className="grid size-10 shrink-0 place-items-center text-ivory/80 transition-colors hover:text-gold"
          >
            <Phone className="size-[18px]" />
          </a>
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp us"
            className="grid size-10 shrink-0 place-items-center text-ivory/80 transition-colors hover:text-gold"
          >
            <MessageCircle className="size-[18px]" />
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid size-10 shrink-0 place-items-center text-ivory"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-obsidian transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <span className="truncate font-display text-lg tracking-[0.2em] text-ivory">
              {business.wordmark}
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-10 shrink-0 place-items-center text-ivory"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="mt-14 flex flex-col gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-ivory transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-3">
            <button
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="eyebrow w-full bg-gold px-6 py-4 text-obsidian"
            >
              Book a Consultation
            </button>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={business.phone.href}
                className="eyebrow flex items-center justify-center gap-2 border border-ivory/25 px-4 py-4 text-ivory"
              >
                <Phone className="size-4 shrink-0" /> Call
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="eyebrow flex items-center justify-center gap-2 border border-ivory/25 px-4 py-4 text-ivory"
              >
                <MessageCircle className="size-4 shrink-0" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
