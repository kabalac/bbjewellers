import { useState } from "react";
import { X, Expand } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryItem } from "./data";
import { whatsappLink } from "@/config/business";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items =
    filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <section id="gallery" className="bg-background py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold-deep">Featured Pieces</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">
            A Closer Look at the Craft
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:px-0">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "eyebrow shrink-0 border px-4 py-3 transition-colors",
                  filter === c
                    ? "border-gold bg-obsidian text-gold"
                    : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 70}>
              <button
                onClick={() => setActive(item)}
                className="group relative block w-full overflow-hidden text-left"
              >
                <div className="aspect-[3/4] overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
                  <span className="min-w-0">
                    <span className="eyebrow block text-gold/85">{item.category}</span>
                    <span className="mt-1 block truncate font-display text-base text-ivory sm:text-lg">
                      {item.title}
                    </span>
                  </span>
                  <Expand className="size-4 shrink-0 text-ivory/70" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-obsidian/95 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-4 top-4 grid size-11 place-items-center text-ivory/80 hover:text-gold"
          >
            <X className="size-5" />
          </button>
          <div
            className="grid max-h-[88svh] w-full max-w-4xl gap-6 overflow-y-auto sm:grid-cols-[1.1fr_1fr] sm:items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={active.title}
              className="max-h-[52svh] w-full object-contain sm:max-h-[80svh]"
            />
            <div className="pb-2">
              <p className="eyebrow text-gold">{active.category}</p>
              <h3 className="mt-3 font-display text-3xl text-ivory">{active.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/70">{active.detail}</p>
              <a
                href={whatsappLink(
                  `Hello B.B. Jewellers, I'd like to know more about the "${active.title}".`,
                )}
                target="_blank"
                rel="noreferrer"
                className="eyebrow mt-8 inline-block bg-gold px-6 py-4 text-obsidian"
              >
                Enquire About This Piece
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
