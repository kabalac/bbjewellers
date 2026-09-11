import { Phone, MessageCircle, Navigation, Clock, MapPin, Mail } from "lucide-react";
import { business } from "@/config/business";
import { Reveal } from "./Reveal";

const embedSrc = `https://maps.google.com/maps?q=${business.coords.lat},${business.coords.lng}&z=16&output=embed`;

export function Visit() {
  return (
    <section id="visit" className="bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold-deep">Visit Us</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">Our Showroom</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Step in for an unhurried viewing in Koramangala. Call ahead and we'll set pieces aside
            for you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          <Reveal>
            <div className="flex h-full flex-col bg-card p-7 sm:p-9">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-gold-deep" />
                <div className="min-w-0">
                  <h3 className="font-display text-xl">Address</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {business.address.line1}
                    <br />
                    {business.address.line2}
                    <br />
                    {business.address.city}, {business.address.state} {business.address.pincode}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-gold-deep" />
                <div className="min-w-0">
                  <h3 className="font-display text-xl">Showroom Hours</h3>
                  <dl className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {business.hours.map((h) => (
                      <div key={h.days} className="flex flex-wrap gap-x-2">
                        <dt>{h.days}</dt>
                        <dd className="text-foreground">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-gold-deep" />
                <div className="min-w-0">
                  <h3 className="font-display text-xl">Reach Us</h3>
                  <p className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <a href={business.phone.href} className="block hover:text-gold-deep">
                      {business.phone.display}
                    </a>
                    <a
                      href={`mailto:${business.email}`}
                      className="block break-all hover:text-gold-deep"
                    >
                      {business.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <a
                  href={business.phone.href}
                  className="eyebrow flex items-center justify-center gap-2 bg-obsidian px-4 py-4 text-ivory transition-colors hover:bg-obsidian-soft"
                >
                  <Phone className="size-4 shrink-0" /> Call Now
                </a>
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow flex items-center justify-center gap-2 bg-gold px-4 py-4 text-obsidian transition-colors hover:bg-gold-soft"
                >
                  <MessageCircle className="size-4 shrink-0" /> WhatsApp
                </a>
                <a
                  href={business.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow flex items-center justify-center gap-2 border border-obsidian/25 px-4 py-4 transition-colors hover:border-gold"
                >
                  <Navigation className="size-4 shrink-0" /> Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="relative h-[340px] w-full overflow-hidden border border-gold/25 sm:h-[440px] lg:h-full lg:min-h-[520px]">
              <iframe
                title={`Map to ${business.name}, ${business.locality}`}
                src={embedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
