import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const plans = [
  {
    name: "Starter",
    monthly: 499,
    yearly: 4990,
    desc: "For small businesses launching online.",
    features: ["Landing page (5 sections)", "Mobile responsive", "Basic SEO", "Contact form", "1 month support"],
  },
  {
    name: "Professional",
    monthly: 1499,
    yearly: 14990,
    desc: "For growing teams who need scale.",
    features: ["Up to 10 pages", "CMS + Blog", "AI chatbot integration", "CRM connection", "Advanced SEO", "3 months support"],
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: 3999,
    yearly: 39990,
    desc: "Custom systems for ambitious companies.",
    features: ["Custom platform", "AI workflows & automation", "Mobile app", "Dedicated team", "SLA & priority", "12 months support"],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">Pricing</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Plans that <span className="text-gradient-primary">scale with you</span>
          </h2>

          <div className="mt-8 inline-flex glass rounded-full p-1">
            <button onClick={() => setYearly(false)} className={`px-5 py-2 rounded-full text-sm transition ${!yearly ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground"}`}>Monthly</button>
            <button onClick={() => setYearly(true)} className={`px-5 py-2 rounded-full text-sm transition ${yearly ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="ml-1 text-[10px] opacity-80">-17%</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 glass ${p.popular ? "ring-1 ring-primary/60 glow-soft" : ""}`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </div>
              )}
              <div className="text-sm text-muted-foreground">{p.name}</div>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-bold">${yearly ? p.yearly : p.monthly}</span>
                <span className="text-muted-foreground text-sm pb-1">/{yearly ? "yr" : "mo"}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-semibold ${
                  p.popular ? "bg-gradient-primary text-primary-foreground glow-soft" : "glass hover:bg-white/10"
                }`}
              >
                Get started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}