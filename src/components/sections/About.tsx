import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Cpu, Rocket, ShieldCheck, Clock, Users, TrendingUp } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const reasons = [
  { icon: Cpu, t: "Modern Technologies" },
  { icon: Rocket, t: "AI-Powered Solutions" },
  { icon: TrendingUp, t: "Affordable Pricing" },
  { icon: Clock, t: "Fast Delivery" },
  { icon: Users, t: "24/7 Support" },
  { icon: ShieldCheck, t: "Scalable Systems" },
  { icon: CheckCircle2, t: "Business Growth Focus" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">About CYV</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Why choose <span className="text-gradient-primary">CYV Solutions?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We blend product thinking with engineering rigor — shipping intelligent
            systems that grow with your business.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {reasons.map((r) => (
              <li key={r.t} className="flex items-center gap-3 glass rounded-xl px-3 py-2.5">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <r.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-sm">{r.t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { k: 120, s: "+", l: "Projects" },
            { k: 80, s: "+", l: "Happy Clients" },
            { k: 50, s: "+", l: "AI Workflows" },
            { k: 5, s: " yrs", l: "Experience" },
          ].map((x) => (
            <div key={x.l} className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary">
                <Counter to={x.k} suffix={x.s} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{x.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}