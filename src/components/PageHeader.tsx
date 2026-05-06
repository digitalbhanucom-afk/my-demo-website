import { motion } from "framer-motion";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-12 pb-10 text-center overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative max-w-3xl mx-auto px-4">
        <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">{eyebrow}</div>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient">{title.split(" ").slice(0,-1).join(" ")} </span>
          <span className="text-gradient-primary">{title.split(" ").slice(-1)}</span>
        </h1>
        {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
      </motion.div>
    </section>
  );
}