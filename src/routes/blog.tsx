import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  { t: "How AI Automation is reshaping SMBs in 2026", c: "AI", d: "Mar 14, 2026", color: "from-blue-500 to-purple-600" },
  { t: "WhatsApp AI: 24/7 sales without the team", c: "Automation", d: "Feb 22, 2026", color: "from-emerald-500 to-cyan-600" },
  { t: "Designing systems users love (and trust)", c: "Design", d: "Jan 30, 2026", color: "from-pink-500 to-purple-600" },
  { t: "Cloud-native architectures for ambitious startups", c: "Engineering", d: "Jan 12, 2026", color: "from-orange-500 to-pink-600" },
  { t: "From idea to MVP in 30 days", c: "Product", d: "Dec 18, 2025", color: "from-violet-500 to-fuchsia-600" },
  { t: "Choosing the right tech stack in 2026", c: "Engineering", d: "Dec 02, 2025", color: "from-cyan-500 to-blue-600" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "Blog — CYV Solutions" },
    { name: "description", content: "Insights on AI automation, design, engineering and digital growth." },
    { property: "og:title", content: "Blog — CYV Solutions" },
    { property: "og:description", content: "Ideas, stories and tutorials." },
  ]}),
  component: BlogPage,
});

function BlogPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Blog" title="Insights & ideas" subtitle="Stories, tutorials and lessons from the front lines of building software." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden hover:-translate-y-1 transition"
            >
              <div className={`h-40 bg-gradient-to-br ${p.color} grid-bg`} />
              <div className="p-5">
                <div className="text-xs text-primary">{p.c} · {p.d}</div>
                <h3 className="mt-2 font-semibold text-lg leading-snug">{p.t}</h3>
                <button className="mt-4 inline-flex items-center gap-1 text-sm text-primary">Read more <ArrowRight className="h-4 w-4" /></button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
}