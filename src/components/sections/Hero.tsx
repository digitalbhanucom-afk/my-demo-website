import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Bot, Cpu, Zap } from "lucide-react";
import { Particles } from "@/components/Particles";

const phrases = [
  "AI Automation & Digital Transformation",
  "Web & Mobile Applications",
  "Smart Business Systems",
  "Cloud-Native Solutions",
];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [pos, setPos] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, pos + 1));
        setPos(pos + 1);
        if (pos + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, pos - 1));
        setPos(pos - 1);
        if (pos - 1 === 0) {
          setDel(false);
          setI((i + 1) % phrases.length);
        }
      }
    }, del ? 30 : 60);
    return () => clearTimeout(t);
  }, [pos, del, i]);

  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0">
        <Particles density={70} />
      </div>

      {/* Floating glowing cards */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="hidden lg:flex absolute top-32 left-10 glass rounded-2xl p-4 gap-3 items-center"
      >
        <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center"><Bot className="h-5 w-5 text-primary-foreground" /></div>
        <div className="text-left">
          <div className="text-xs text-muted-foreground">AI Agents</div>
          <div className="text-sm font-semibold">98.4% accuracy</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 0.4 }}
        className="hidden lg:flex absolute top-44 right-10 glass rounded-2xl p-4 gap-3 items-center"
      >
        <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center"><Zap className="h-5 w-5 text-primary-foreground" /></div>
        <div className="text-left">
          <div className="text-xs text-muted-foreground">Automation</div>
          <div className="text-sm font-semibold">+312% efficiency</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="hidden lg:flex absolute bottom-32 left-16 glass rounded-2xl p-4 gap-3 items-center"
      >
        <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center"><Cpu className="h-5 w-5 text-primary-foreground" /></div>
        <div className="text-left">
          <div className="text-xs text-muted-foreground">Workflows</div>
          <div className="text-sm font-semibold">24/7 running</div>
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-muted-foreground">Building the future of business with AI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          <span className="text-gradient">Create Your Vision</span>
          <br />
          <span className="text-gradient-primary">{typed}</span>
          <span className="inline-block w-1 h-10 md:h-14 bg-primary ml-1 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground"
        >
          CYV Solutions helps businesses grow with AI automation, websites, mobile apps, cloud
          solutions, and smart digital systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-7 py-3.5 font-semibold text-primary-foreground glow hover:scale-105 transition-transform"
          >
            Get Started
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-semibold hover:bg-white/10 transition"
          >
            <Calendar className="h-4 w-4" />
            Book Free Consultation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            ["120+", "Projects Delivered"],
            ["50+", "AI Workflows"],
            ["98%", "Client Retention"],
            ["24/7", "Support"],
          ].map(([k, v]) => (
            <div key={k} className="glass rounded-xl p-4">
              <div className="text-2xl font-bold text-gradient-primary">{k}</div>
              <div className="text-xs text-muted-foreground mt-1">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}