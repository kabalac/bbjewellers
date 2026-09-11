import craft from "@/assets/heritage-craft.jpg";
import { business } from "@/config/business";
import { Reveal } from "./Reveal";

export function Heritage() {
  return (
    <section id="heritage" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <img
              src={craft}
              alt="A goldsmith finishing a gold necklace by hand at the workbench"
              loading="lazy"
              width={1408}
              height={1104}
              className="w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 border border-gold/30" />
            <div className="absolute -bottom-6 left-6 right-6 bg-obsidian px-6 py-5 sm:left-10 sm:right-auto">
              <p className="eyebrow text-gold">Made by hand</p>
              <p className="mt-2 font-display text-xl text-ivory">Artisan-finished, piece by piece</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={80}>
          <p className="eyebrow text-gold-deep">Our Heritage</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">
            A Legacy of Trust &amp; Craftsmanship
          </h2>
          <div className="gold-rule mt-8 max-w-24" />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            <p>
              {business.name} began with a simple conviction: jewellery should be chosen slowly, with
              someone who understands the occasion behind it. That belief still shapes every
              conversation on our showroom floor.
            </p>
            <p>
              Our pieces are made in small batches by artisans who work in gold the traditional way —
              drawing, setting and polishing by hand. Nothing is mass-finished, and nothing leaves the
              bench until it is right.
            </p>
            <p>
              From a first mangalsutra to a full bridal trousseau, we sit with families through the
              decision. You will find us in {business.locality}, where the door is open for an
              unhurried, private viewing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
