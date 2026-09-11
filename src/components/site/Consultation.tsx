import { useEffect, useState } from "react";
import { X, MessageCircle, Phone } from "lucide-react";
import { business, whatsappLink } from "@/config/business";
import { cn } from "@/lib/utils";

const interests = ["Bridal Suite", "Gold", "Diamond", "Silver", "Not sure yet"] as const;

export function ConsultationCta({ onBook }: { onBook: () => void }) {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto w-full max-w-4xl px-5 text-center lg:px-10">
        <div className="gold-rule mx-auto max-w-24" />
        <h2 className="mt-10 font-display text-4xl leading-[1.08] sm:text-6xl">
          Let's Find Something
          <span className="block italic text-gold-deep">Extraordinary.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Request a private showroom consultation, or preview pieces with our stylist over WhatsApp
          before you visit.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={onBook}
            className="eyebrow bg-obsidian px-8 py-4 text-ivory transition-colors hover:bg-obsidian-soft"
          >
            Book a Consultation
          </button>
          <a
            href={whatsappLink("Hello B.B. Jewellers, I'd like a WhatsApp stylist preview.")}
            target="_blank"
            rel="noreferrer"
            className="eyebrow border border-obsidian/25 px-8 py-4 transition-colors hover:border-gold hover:text-gold-deep"
          >
            WhatsApp Stylist Preview
          </a>
        </div>
      </div>
    </section>
  );
}

export function ConsultationDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [interest, setInterest] = useState<string>("Bridal Suite");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const message = [
    `Hello ${business.name}, I'd like to request a showroom consultation.`,
    `Name: ${name || "—"}`,
    `Phone: ${phone || "—"}`,
    `Preferred date: ${date || "—"}`,
    `Interest: ${interest}`,
    notes ? `Notes: ${notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-300",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-obsidian/70 backdrop-blur-sm" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book a consultation"
        className={cn(
          "absolute inset-x-0 bottom-0 max-h-[92svh] overflow-y-auto bg-ivory transition-transform duration-500 ease-out sm:inset-y-0 sm:left-auto sm:right-0 sm:max-h-none sm:w-[460px]",
          open ? "translate-y-0 sm:translate-x-0" : "translate-y-full sm:translate-y-0 sm:translate-x-full",
        )}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-border px-6 py-6 sm:px-8">
          <div className="min-w-0">
            <p className="eyebrow text-gold-deep">Private Appointment</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl">Book a Consultation</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid size-10 shrink-0 place-items-center text-muted-foreground hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        <form
          className="px-6 py-6 sm:px-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(whatsappLink(message), "_blank", "noopener");
          }}
        >
          <div className="space-y-5">
            <Field label="Your name">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </Field>
            <Field label="Phone number">
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91"
                className="w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </Field>
            <Field label="Preferred visit date">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </Field>
            <Field label="What are you looking for?">
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setInterest(i)}
                    className={cn(
                      "eyebrow border px-3 py-2.5 transition-colors",
                      interest === i
                        ? "border-gold bg-obsidian text-gold"
                        : "border-border text-muted-foreground hover:border-gold/50",
                    )}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Anything else (optional)">
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Occasion, budget range, designs you like…"
                className="w-full resize-none border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold"
              />
            </Field>
          </div>

          <button
            type="submit"
            className="eyebrow mt-8 flex w-full items-center justify-center gap-2 bg-gold px-6 py-4 text-obsidian transition-colors hover:bg-gold-soft"
          >
            <MessageCircle className="size-4 shrink-0" /> Send Request on WhatsApp
          </button>
          <a
            href={business.phone.href}
            className="eyebrow mt-3 flex w-full items-center justify-center gap-2 border border-obsidian/20 px-6 py-4 transition-colors hover:border-gold"
          >
            <Phone className="size-4 shrink-0" /> Call {business.phone.display}
          </a>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Your request opens a pre-filled WhatsApp message to our showroom team — no payment, no
            online order.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow block text-muted-foreground">{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
