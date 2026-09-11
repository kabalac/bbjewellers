export const business = {
  name: "B.B. Jewellers",
  wordmark: "B.B. JEWELLERS",
  tagline: "Timeless Jewellery. Crafted for Every Story.",
  locality: "Koramangala 8th Block, Bengaluru",
  address: {
    line1: "818, 20th Main Road, Ganapathi Temple Rd",
    line2: "Koramangala 8th Block",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560095",
    full: "818, 20th Main Road, Ganapathi Temple Rd, Koramangala 8th Block, Bengaluru, Karnataka 560095",
  },
  phone: {
    display: "+91 97396 77790",
    href: "tel:+919739677790",
  },
  whatsapp: "https://wa.me/919739677790",
  email: "amith@bbjewellers.in",
  maps: "https://www.google.com/maps/place/B.B.Jewellers/@12.942342,77.622111,17z/data=!4m16!1m9!3m8!1s0x3bae1446f7da7c6d:0xad58844f8b3e81b6!2sB.B.Jewellers!8m2!3d12.942342!4d77.622111!9m1!1b1!16s%2Fg%2F1vhkh_1m",
  coords: { lat: 12.942342, lng: 77.622111 },
  hours: [
    { days: "Monday – Saturday", time: "10:30 AM – 8:30 PM" },
    { days: "Sunday", time: "11:00 AM – 7:00 PM" },
  ],
  copyrightYear: 2026,
} as const;

export function whatsappLink(message: string) {
  return `${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
