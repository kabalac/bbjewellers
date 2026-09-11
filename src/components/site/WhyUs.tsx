import { whyUs } from "./data";
import { Reveal } from "./Reveal";

export function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold-deep">Why Choose Us</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">
            The Standards We Keep
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 80}>
              <div className="group h-full bg-background p-8 transition-colors hover:bg-secondary/60 lg:p-10">
                <span className="font-display text-2xl text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl">{w.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
