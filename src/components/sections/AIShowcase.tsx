import { motion } from "framer-motion";
import { Bot, MessageCircle, Database, Workflow, Mic, Target, Activity, TrendingUp } from "lucide-react";

const features = [
  { icon: Bot, t: "Chatbot Automation" },
  { icon: MessageCircle, t: "WhatsApp AI" },
  { icon: Database, t: "CRM Automation" },
  { icon: Workflow, t: "Workflow Automation" },
  { icon: Mic, t: "AI Voice Assistant" },
  { icon: Target, t: "Lead Management" },
];

export function AIShowcase() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
          <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">AI Automation</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Your business, on <span className="text-gradient-primary">autopilot</span>
          </h2>
          <p className="mt-4 text-muted-foreground">A unified AI platform connecting every conversation, lead, and workflow.</p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-3xl p-6 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">CYV.ai · Dashboard</div>
                <div className="text-lg font-semibold">Realtime Operations</div>
              </div>
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-muted-foreground">Live</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { l: "Leads today", v: "1,284", i: TrendingUp },
                { l: "AI replies", v: "9,420", i: MessageCircle },
                { l: "Conv. rate", v: "32.7%", i: Activity },
              ].map((c) => (
                <div key={c.l} className="rounded-xl bg-background/40 border border-border/50 p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground"><c.i className="h-3.5 w-3.5" /> {c.l}</div>
                  <div className="mt-2 text-xl font-bold text-gradient-primary">{c.v}</div>
                </div>
              ))}
            </div>

            {/* Animated chart bars */}
            <div className="mt-6 rounded-xl bg-background/40 border border-border/50 p-5">
              <div className="flex items-end gap-2 h-40">
                {[40, 65, 50, 80, 55, 90, 70, 95, 60, 88, 72, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.6 }}
                    className="flex-1 rounded-t bg-gradient-primary opacity-80"
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
                {["J","F","M","A","M","J","J","A","S","O","N","D"].map((m) => <span key={m}>{m}</span>)}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 content-start">
            {features.map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-5 hover:glow-soft transition"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-3 font-semibold text-sm">{f.t}</div>
                <div className="text-xs text-muted-foreground mt-1">Always on. Always learning.</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}