import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const openings = [
  {
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Remote / Nellore",
    color: "from-blue-500 to-purple-600",
    desc: "Build end-to-end web applications using React, Node.js, and cloud infrastructure.",
  },
  {
    title: "AI / ML Engineer",
    type: "Full-time",
    location: "Remote",
    color: "from-emerald-500 to-cyan-600",
    desc: "Design and deploy AI automation workflows, chatbots, and intelligent systems.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote / Nellore",
    color: "from-pink-500 to-purple-600",
    desc: "Craft beautiful, user-centered designs for web and mobile products.",
  },
  {
    title: "Mobile App Developer",
    type: "Full-time",
    location: "Remote",
    color: "from-orange-500 to-pink-600",
    desc: "Build cross-platform mobile applications with React Native or Flutter.",
  },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — CYV Solutions" },
      {
        name: "description",
        content:
          "Join CYV Solutions — build AI-powered products and shape the future of digital business.",
      },
      { property: "og:title", content: "Careers — CYV Solutions" },
      { property: "og:description", content: "Open positions at CYV Solutions." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Careers"
        title="Join our team"
        subtitle="We're looking for talented people who want to build the future of digital business."
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid gap-6 sm:grid-cols-2">
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden hover:-translate-y-1 transition"
            >
              <div className={`h-2 bg-gradient-to-r ${job.color}`} />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{job.desc}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {job.location}
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm text-primary"
                >
                  Apply now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
