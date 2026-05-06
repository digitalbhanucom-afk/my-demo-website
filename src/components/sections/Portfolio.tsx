import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const categories = ["All", "Business", "School", "Healthcare", "Fitness", "E-Commerce", "AI", "Mobile"] as const;

const items = [
  { cat: "Business", title: "Northwind Corp", desc: "Corporate site with CMS & multi-language.", color: "from-blue-500 to-purple-600" },
  { cat: "School", title: "EduPlus ERP", desc: "End-to-end school management system.", color: "from-cyan-500 to-blue-600" },
  { cat: "Healthcare", title: "BrightSmile Dental", desc: "Patient portal & online booking.", color: "from-pink-500 to-purple-600" },
  { cat: "Fitness", title: "FitLab Trainer", desc: "Coach booking + workout tracking.", color: "from-emerald-500 to-cyan-600" },
  { cat: "E-Commerce", title: "ShopVerse", desc: "Headless commerce & checkout.", color: "from-orange-500 to-pink-600" },
  { cat: "AI", title: "Aurora AI", desc: "AI ops platform with agent studio.", color: "from-violet-500 to-fuchsia-600" },
  { cat: "Mobile", title: "Routely App", desc: "Cross-platform delivery routing.", color: "from-indigo-500 to-blue-600" },
  { cat: "Business", title: "Lumen Studio", desc: "Brand & product launch site.", color: "from-rose-500 to-orange-500" },
];

export function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<typeof items[number] | null>(null);
  const filtered = items.filter((i) => active === "All" || i.cat === active);

  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
          <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">Work</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Selected <span className="text-gradient-primary">case studies</span>
          </h2>
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-1.5 rounded-full text-sm transition ${
                active === c ? "bg-gradient-primary text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((it) => (
              <motion.button
                layout
                key={it.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setOpen(it)}
                className="group text-left rounded-2xl glass overflow-hidden"
              >
                <div className={`relative h-48 bg-gradient-to-br ${it.color} overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <motion.div whileHover={{ scale: 1.1 }} className="absolute inset-0 flex items-center justify-center text-white/90 font-bold text-2xl tracking-tight">
                    {it.title}
                  </motion.div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-primary">{it.cat}</div>
                  <div className="mt-1 font-semibold">{it.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{it.desc}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[80] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl max-w-2xl w-full overflow-hidden"
            >
              <div className={`h-56 bg-gradient-to-br ${open.color} relative`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <button onClick={() => setOpen(null)} className="absolute top-4 right-4 h-9 w-9 rounded-full glass flex items-center justify-center">
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">{open.title}</div>
              </div>
              <div className="p-6">
                <div className="text-xs text-primary">{open.cat} · Case Study</div>
                <h3 className="mt-1 text-2xl font-bold">{open.title}</h3>
                <p className="mt-3 text-muted-foreground">{open.desc} A complete redesign and rebuild — focused on conversion, performance and a beautiful brand experience.</p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="glass rounded-xl p-3"><div className="text-lg font-bold text-gradient-primary">+210%</div><div className="text-xs text-muted-foreground">Leads</div></div>
                  <div className="glass rounded-xl p-3"><div className="text-lg font-bold text-gradient-primary">98</div><div className="text-xs text-muted-foreground">Lighthouse</div></div>
                  <div className="glass rounded-xl p-3"><div className="text-lg font-bold text-gradient-primary">6 wks</div><div className="text-xs text-muted-foreground">Delivery</div></div>
                </div>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-primary text-sm">View live <ExternalLink className="h-4 w-4" /></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}