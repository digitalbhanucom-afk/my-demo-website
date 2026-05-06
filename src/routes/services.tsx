import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/sections/Services";
import { AIShowcase } from "@/components/sections/AIShowcase";
import { TechStack } from "@/components/sections/TechStack";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — CYV Solutions" },
    { name: "description", content: "AI automation, web & mobile development, CRM, cloud, branding and more." },
    { property: "og:title", content: "Services — CYV Solutions" },
    { property: "og:description", content: "End-to-end digital services." },
  ]}),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Services" title="What we do best" subtitle="A complete suite of digital services to design, build and scale." />
      <Services />
      <AIShowcase />
      <TechStack />
    </Layout>
  );
}