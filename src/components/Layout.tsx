import { ReactNode, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ArrowUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: ReactNode }) {
  const [showTop, setShowTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-50 animate-pulse" />
              <div className="relative text-3xl font-bold text-gradient-primary">CYV</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919114731147"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-primary flex items-center justify-center glow animate-glow-pulse"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-6 z-40 h-11 w-11 rounded-full glass flex items-center justify-center hover:glow-soft"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}