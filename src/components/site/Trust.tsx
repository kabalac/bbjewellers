import { Star, BadgeCheck, MapPin } from "lucide-react";
import { business } from "@/config/business";
import { Reveal } from "./Reveal";

export function Trust() {
  return (
    <section className="bg-obsidian-soft py-20 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-5 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow text-gold">Customer Trust</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-ivory sm:text-4xl">
            Trusted by jewellery patrons across Bengaluru
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ivory/65 sm:text-base">
            Families return to us for milestones years apart — and bring their daughters, sisters and
            friends with them.
          </p>
        </Reveal>

        <Reveal delay={90} className="mt-12">
          <a
            href={business.maps}
            target="_blank"
            rel="noreferrer"
            className="gold-glow mx-auto flex max-w-md flex-col items-center gap-4 border border-gold/40 bg-obsidian px-6 py-8 transition-colors hover:border-gold sm:px-10"
          >
            <span className="flex items-center gap-2">
              <BadgeCheck className="size-5 shrink-0 text-gold" />
              <span className="eyebrow text-ivory/80">Verified on Google Maps</span>
            </span>
            <span className="flex items-center gap-1.5" aria-label="Rated 4.8 out of 5">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} className="size-4 shrink-0 fill-gold text-gold" />
              ))}
            </span>
            <span className="font-display text-4xl text-ivory">4.8 / 5</span>
            <span className="flex items-center gap-2 text-xs text-ivory/60">
              <MapPin className="size-3.5 shrink-0" />
              {business.name} · {business.locality}
            </span>
            <span className="eyebrow text-gold">Read reviews on Google</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
