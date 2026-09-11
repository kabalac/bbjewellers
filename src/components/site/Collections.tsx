import { ArrowUpRight } from "lucide-react";
import { collections } from "./data";
import { whatsappLink } from "@/config/business";
import { Reveal } from "./Reveal";

export function Collections() {
  return (
    <section id="collections" className="bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold-deep">The Collections</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">
            Explore Our Collections
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Four houses of craft, each curated for a different chapter — everyday gold, brilliant
            diamond, sculptural silver and the complete bridal suite.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {collections.map((c, i) => (
            <Reveal key={c.id} as="article" delay={i * 90}>
              <div className="group relative h-full overflow-hidden bg-card">
                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    width={1200}
                    height={1504}
                    className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/10 to-transparent" />
                  <span className="eyebrow absolute left-5 top-5 border border-ivory/30 bg-obsidian/45 px-3 py-2 text-ivory/85 backdrop-blur-sm">
                    {c.note}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <h3 className="font-display text-2xl text-ivory sm:text-3xl">{c.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/75">{c.blurb}</p>
                    <a
                      href={whatsappLink(
                        `Hello B.B. Jewellers, I'd like to enquire about your ${c.title}.`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="eyebrow mt-6 inline-flex items-center gap-2 text-gold transition-colors hover:text-gold-soft"
                    >
                      Enquire on WhatsApp
                      <ArrowUpRight className="size-4 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
