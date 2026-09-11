import heroImage from "@/assets/hero-bridal.jpg";
import { business } from "@/config/business";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-obsidian">
      <img
        src={heroImage}
        alt="Bride wearing an intricate 22kt gold bridal necklace, jhumkas and bangles"
        width={1600}
        height={1920}
        className="absolute inset-0 size-full object-cover object-[62%_center] opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-obsidian/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-5 pb-24 pt-32 sm:pb-28 lg:px-10 lg:pb-32">
        <p className="eyebrow text-gold">Fine Jewellery · {business.locality}</p>
        <h1 className="mt-6 max-w-3xl font-display text-[2.6rem] leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
          Timeless Jewellery.
          <span className="block italic text-gold-soft">Crafted for Every Story.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
          Discover jewellery that celebrates life's most meaningful moments.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#collections"
            className="eyebrow bg-gold px-8 py-4 text-center text-obsidian transition-colors hover:bg-gold-soft"
          >
            Explore Collections
          </a>
          <a
            href="#visit"
            className="eyebrow border border-ivory/35 px-8 py-4 text-center text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            Visit Our Showroom
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2">
        <span className="eyebrow text-ivory/45">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
