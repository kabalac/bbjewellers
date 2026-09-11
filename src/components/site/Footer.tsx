import { business } from "@/config/business";

const quickLinks = [
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#heritage" },
  { label: "Bridal", href: "#bridal" },
  { label: "Why Us", href: "#why-us" },
  { label: "Visit Us", href: "#visit" },
];

export function Footer() {
  return (
    <footer className="bg-obsidian pt-20 pb-10">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl tracking-[0.2em] text-ivory">{business.wordmark}</p>
            <div className="gold-rule mt-6 max-w-20" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/60">
              Fine gold, diamond, silver and bridal jewellery, crafted by hand and chosen in person
              at our {business.locality} showroom.
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold">Quick Links</p>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ivory/65 transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold">Showroom</p>
            <address className="mt-6 space-y-3 text-sm not-italic leading-relaxed text-ivory/65">
              <p>
                {business.address.line1}, {business.address.line2},<br />
                {business.address.city}, {business.address.state} {business.address.pincode}
              </p>
              <p className="space-y-1">
                <a href={business.phone.href} className="block hover:text-gold">
                  {business.phone.display}
                </a>
                <a href={`mailto:${business.email}`} className="block break-all hover:text-gold">
                  {business.email}
                </a>
                <a
                  href={business.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-gold"
                >
                  Get directions
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory/45">
            © {business.copyrightYear} {business.name}. All rights reserved.
          </p>
          <p className="text-xs text-ivory/45">Showroom visits by appointment or walk-in.</p>
        </div>
      </div>
    </footer>
  );
}
