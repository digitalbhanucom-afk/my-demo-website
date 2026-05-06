import { motion } from "framer-motion";
import {
  Bot, Code2, Smartphone, Database, ShoppingBag, Palette, Cloud, Megaphone,
  Boxes, Plug, MessageCircle, Crown, ArrowRight,
} from "lucide-react";

const services = [
  { icon: Bot, title: "AI Automation", desc: "End-to-end intelligent workflows that scale your operations." },
  { icon: Code2, title: "Website Development", desc: "Blazing fast, conversion-optimized websites." },
  { icon: Smartphone, title: "Mobile App Development", desc: "iOS and Android apps with native-grade UX." },
  { icon: Database, title: "CRM Solutions", desc: "Custom CRMs that align sales, support, and ops." },
  { icon: ShoppingBag, title: "E-Commerce Development", desc: "Online stores designed to sell, not just exist." },
  { icon: Palette, title: "UI/UX Design", desc: "Interfaces that feel inevitable and look unforgettable." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Resilient cloud infra on AWS, GCP and Azure." },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, ads, and content engines built for ROI." },
  { icon: Boxes, title: "Software Development", desc: "Custom enterprise software tailored to you." },
  { icon: Plug, title: "API Integration", desc: "Connect every tool in your stack — seamlessly." },
  { icon: MessageCircle, title: "WhatsApp Automation", desc: "AI-powered conversations that convert 24/7." },
  { icon: Crown, title: "Business Branding", desc: "Identities that command trust and attention." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">Services</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Everything you need to <span className="text-gradient-primary">build & scale</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From concept to deployment — one team, end-to-end execution.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="group relative rounded-2xl glass p-6 overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition" style={{ background: "var(--gradient-primary)", filter: "blur(20px)", zIndex: -1 }} />
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center glow-soft">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <button className="mt-5 inline-flex items-center gap-1 text-sm text-primary group/btn">
                Read more <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}