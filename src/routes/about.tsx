import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { About as AboutSection } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — CYV Solutions" },
    { name: "description", content: "Meet CYV Solutions — designers, engineers and AI experts building the future of digital business." },
    { property: "og:title", content: "About — CYV Solutions" },
    { property: "og:description", content: "Our mission, values and approach." },
  ]}),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHeader eyebrow="About" title="We build with vision" subtitle="A studio of designers, engineers and AI experts crafting the next generation of digital products." />
      <AboutSection />
      <Process />
      <Testimonials />
    </Layout>
  );
}