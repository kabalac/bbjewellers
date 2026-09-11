import gold from "@/assets/collection-gold.jpg";
import diamond from "@/assets/collection-diamond.jpg";
import silver from "@/assets/collection-silver.jpg";
import bridal from "@/assets/collection-bridal.jpg";
import craft from "@/assets/heritage-craft.jpg";
import hero from "@/assets/hero-bridal.jpg";

export const images = { gold, diamond, silver, bridal, craft, hero };

export type Collection = {
  id: string;
  title: string;
  blurb: string;
  image: string;
  note: string;
};

export const collections: Collection[] = [
  {
    id: "gold",
    title: "Gold Jewellery",
    blurb:
      "Hallmarked 22kt and 18kt gold — temple work, antique finishes and everyday classics shaped by hand.",
    image: gold,
    note: "22kt & 18kt hallmarked",
  },
  {
    id: "diamond",
    title: "Diamond Jewellery",
    blurb:
      "Brilliance selected stone by stone, set into solitaires, tennis lines and occasion-ready statements.",
    image: diamond,
    note: "Certified stones",
  },
  {
    id: "silver",
    title: "Silver Jewellery",
    blurb:
      "Oxidised bangles, anklets and heirloom-style silver pieces with quiet, sculptural detail.",
    image: silver,
    note: "925 sterling",
  },
  {
    id: "bridal",
    title: "Bridal Jewellery",
    blurb:
      "Complete bridal suites — chokers, long haars, maang tikka, vanki and bangles curated as one story.",
    image: bridal,
    note: "Made to your ceremony",
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: "Necklaces" | "Earrings" | "Rings" | "Bangles" | "Bridal Sets";
  image: string;
  detail: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Lakshmi Temple Haar",
    category: "Necklaces",
    image: gold,
    detail: "Antique-finish 22kt long haar with kemp detailing and gold bead fringe.",
  },
  {
    id: "g2",
    title: "Pear Drop Diamond Line",
    category: "Necklaces",
    image: diamond,
    detail: "Graduated brilliant-cut line necklace finished with a pear drop centre.",
  },
  {
    id: "g3",
    title: "Nagas Jhumka",
    category: "Earrings",
    image: bridal,
    detail: "Domed jhumkas with pearl fringe, balanced for long ceremony wear.",
  },
  {
    id: "g4",
    title: "Solitaire Ring",
    category: "Rings",
    image: diamond,
    detail: "Round brilliant solitaire on a pavé-set band in white gold.",
  },
  {
    id: "g5",
    title: "Oxidised Silver Kada",
    category: "Bangles",
    image: silver,
    detail: "Broad sterling kada with hand-chased repoussé panels.",
  },
  {
    id: "g6",
    title: "Bridal Choker Suite",
    category: "Bridal Sets",
    image: bridal,
    detail: "Choker, maang tikka and paired bangles curated as a single bridal suite.",
  },
  {
    id: "g7",
    title: "Antique Gold Bangles",
    category: "Bangles",
    image: gold,
    detail: "Pair of 22kt bangles with deity motifs and matte antique finish.",
  },
  {
    id: "g8",
    title: "Goldsmith's Study",
    category: "Necklaces",
    image: craft,
    detail: "A necklace under final finishing at the bench before showroom display.",
  },
];

export const galleryCategories = [
  "All",
  "Necklaces",
  "Earrings",
  "Rings",
  "Bangles",
  "Bridal Sets",
] as const;

export const whyUs = [
  {
    title: "Trusted Craftsmanship",
    body: "Every piece is finished by artisans we know by name, then inspected before it reaches the showroom floor.",
  },
  {
    title: "Hallmarked Purity",
    body: "18kt and 22kt gold with hallmarking you can verify, and clear disclosure on stones and weight.",
  },
  {
    title: "Personalised Service",
    body: "One-to-one guidance on design, budget and occasion — never a sales counter rush.",
  },
  {
    title: "Curated Bridal Expertise",
    body: "Complete trousseau planning across ceremonies, coordinated with your outfits and family heirlooms.",
  },
  {
    title: "Private Showroom Experience",
    body: "Reserve a quiet viewing at our Koramangala showroom with pieces set aside for you in advance.",
  },
];
