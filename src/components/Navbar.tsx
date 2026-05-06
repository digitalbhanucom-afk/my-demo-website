import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-primary transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 transition-all ${
            scrolled ? "" : ""
          }`}
        >
          <div
            className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
              scrolled ? "glass" : ""
            }`}
          >
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary blur-md opacity-60 group-hover:opacity-100 transition" />
                <div className="relative h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div className="leading-tight">
                <div className="font-bold tracking-tight text-foreground">
                  CYV <span className="text-gradient-primary">Solutions</span>
                </div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  Create Your Vision
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition rounded-lg hover:bg-white/5"
                  activeProps={{ className: "px-3 py-2 text-sm text-foreground rounded-lg bg-white/5" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-soft hover:scale-105 transition-transform"
              >
                Get Started
              </Link>
            </div>

            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mx-auto max-w-7xl px-4 mt-2"
            >
              <div className="glass rounded-2xl p-4 flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 rounded-lg text-foreground hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 text-center rounded-lg bg-gradient-primary px-4 py-3 font-semibold text-primary-foreground"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}