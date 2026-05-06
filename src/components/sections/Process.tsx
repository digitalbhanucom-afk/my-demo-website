import { motion } from "framer-motion";
import { Search, Palette, Code2, Bug, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  { i: Search, t: "Requirement Analysis", d: "Deep discovery to align vision with execution." },
  { i: Palette, t: "UI/UX Design", d: "Interfaces designed for delight and clarity." },
  { i: Code2, t: "Development", d: "Modern stacks, clean code, scalable architecture." },
  { i: Bug, t: "Testing", d: "Rigorous QA across devices and edge cases." },
  { i: Rocket, t: "Deployment", d: "Smooth launches with zero-downtime delivery." },
  { i: LifeBuoy, t: "Support & Maintenance", d: "We're with you long after launch." },
];

export function Process() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">Process</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            How we <span className="text-gradient-primary">build with you</span>
          </h2>
        </div>

        <div className="relative mt-16">
          {/* center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent hidden md:block" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "" : ""}`}
              >
                <div className={`${i % 2 ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className={`inline-flex glass rounded-full px-3 py-1 text-xs text-primary`}>Step {i + 1}</div>
                  <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
                <div className={`relative ${i % 2 ? "md:order-1 md:flex md:justify-end md:pr-12" : "md:pl-12"}`}>
                  <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center glow-soft relative">
                    <s.i className="h-7 w-7 text-primary-foreground" />
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-primary opacity-30 blur-xl -z-10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}