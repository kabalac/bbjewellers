import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Heritage } from "@/components/site/Heritage";
import { Collections } from "@/components/site/Collections";
import { Gallery } from "@/components/site/Gallery";
import { Bridal } from "@/components/site/Bridal";
import { WhyUs } from "@/components/site/WhyUs";
import { Trust } from "@/components/site/Trust";
import { Visit } from "@/components/site/Visit";
import { ConsultationCta, ConsultationDrawer } from "@/components/site/Consultation";
import { Footer } from "@/components/site/Footer";
import { business } from "@/config/business";

const title = "B.B. Jewellers — Gold, Diamond & Bridal Jewellery, Koramangala";
const description =
  "Hallmarked gold, diamond, silver and bridal jewellery crafted by hand. Visit our Koramangala 8th Block showroom in Bengaluru or book a private consultation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Nav onBook={openBooking} />
      <main>
        <Hero />
        <Heritage />
        <Collections />
        <Gallery />
        <Bridal onBook={openBooking} />
        <WhyUs />
        <Trust />
        <Visit />
        <ConsultationCta onBook={openBooking} />
      </main>
      <Footer />
      <ConsultationDrawer open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JewelryStore",
            name: business.name,
            telephone: business.phone.display,
            email: business.email,
            hasMap: business.maps,
            address: {
              "@type": "PostalAddress",
              streetAddress: `${business.address.line1}, ${business.address.line2}`,
              addressLocality: business.address.city,
              addressRegion: business.address.state,
              postalCode: business.address.pincode,
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: business.coords.lat,
              longitude: business.coords.lng,
            },
          }),
        }}
      />
    </div>
  );
}
