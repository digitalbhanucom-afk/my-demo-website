import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">Contact</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Let's build <span className="text-gradient-primary">something great</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Tell us about your project — we usually reply within a few hours.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" placeholder="Your full name" />
              <Field label="Email" type="email" placeholder="you@company.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Phone" placeholder="+91 …" />
              <div>
                <label className="text-xs text-muted-foreground">Service</label>
                <select className="mt-1 w-full rounded-xl bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>AI Automation</option>
                  <option>Website</option>
                  <option>Mobile App</option>
                  <option>CRM / Software</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Message</label>
              <textarea rows={4} placeholder="Tell us about your project…" className="mt-1 w-full rounded-xl bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground glow-soft"
            >
              {sent ? "Sent ✓" : (<>Send Message <Send className="h-4 w-4" /></>)}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <InfoCard icon={MapPin} title="Office" text="Nellore, Andhra Pradesh, India" />
            <InfoCard icon={Phone} title="Phone" text="+91 91147 31147" />
            <InfoCard icon={Mail} title="Email" text="hello@cyvsolutions.com" />
            <a
              href="https://wa.me/919114731147"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 glass rounded-2xl p-5 hover:glow-soft transition"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center"><MessageCircle className="h-5 w-5 text-primary-foreground" /></div>
              <div>
                <div className="text-sm font-semibold">WhatsApp</div>
                <div className="text-xs text-muted-foreground">Chat with us instantly</div>
              </div>
            </a>

            <div className="rounded-2xl overflow-hidden border border-border/60 h-48">
              <iframe
                title="map"
                className="w-full h-full"
                style={{ filter: "invert(0.9) hue-rotate(180deg)" }}
                src="https://www.google.com/maps?q=Nellore,Andhra+Pradesh&output=embed"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="flex items-center gap-3 glass rounded-2xl p-5">
      <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}