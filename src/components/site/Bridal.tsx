import bridal from "@/assets/collection-bridal.jpg";
import { Reveal } from "./Reveal";

export function Bridal({ onBook }: { onBook: () => void }) {
  return (
    <section id="bridal" className="relative overflow-hidden bg-obsidian">
      <div className="mx-auto grid w-full max-w-7xl lg:grid-cols-2">
        <div className="relative min-h-[60svh] lg:min-h-[85svh]">
          <img
            src={bridal}
            alt="Indian bridal gold suite with choker, maang tikka, jhumkas and bangles on red silk"
            loading="lazy"
            width={1200}
            height={1504}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-obsidian/10 lg:to-obsidian" />
        </div>

        <Reveal className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:py-28 lg:pl-16 lg:pr-10">
          <p className="eyebrow text-gold">The Bridal Atelier</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] text-ivory sm:text-5xl">
            Made for Your Most
            <span className="block italic text-gold-soft">Memorable Moments</span>
          </h2>
          <div className="gold-rule mt-8 max-w-24" />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-ivory/70 sm:text-base">
            <p>
              A bride's jewellery is worn once and remembered for a lifetime. We plan it the way it
              deserves — ceremony by ceremony, from the muhurtham choker to the reception diamonds.
            </p>
            <p>
              Temple-work haars, kemp chokers, vanki, maang tikka, oddiyanam and bangles are curated
              as one considered suite, matched to your silks and to the pieces your family already
              treasures.
            </p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              "Trousseau planning across ceremonies",
              "Heirloom redesign & restoration",
              "Coordination with your outfits",
              "Private appointment viewings",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-ivory/75">
                <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold" />
                {f}
              </li>
            ))}
          </ul>

          <button
            onClick={onBook}
            className="eyebrow mt-12 self-start bg-gold px-8 py-4 text-obsidian transition-colors hover:bg-gold-soft"
          >
            Plan Your Bridal Visit
          </button>
        </Reveal>
      </div>
    </section>
  );
}
