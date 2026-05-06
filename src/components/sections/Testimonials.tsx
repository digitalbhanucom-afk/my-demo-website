import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Arjun Reddy", role: "CEO, Northwind", text: "CYV transformed our digital presence. Sales doubled within 4 months.", initials: "AR" },
  { name: "Priya Sharma", role: "Founder, FitLab", text: "Their AI automation saved us 30+ hours every single week.", initials: "PS" },
  { name: "Rahul Verma", role: "CTO, Aurora", text: "Best engineering team we've ever worked with. Period.", initials: "RV" },
  { name: "Meera Iyer", role: "COO, BrightSmile", text: "From design to launch, the experience was world class.", initials: "MI" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">Testimonials</div>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
          Loved by <span className="text-gradient-primary">teams worldwide</span>
        </h2>

        <div className="mt-12 relative h-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 glass rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center"
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-lg md:text-2xl font-medium leading-relaxed">"{testimonials[i].text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center font-bold">
                  {testimonials[i].initials}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{testimonials[i].name}</div>
                  <div className="text-xs text-muted-foreground">{testimonials[i].role}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gradient-primary" : "w-2 bg-muted"}`}
              aria-label={`testimonial ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}