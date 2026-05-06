import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Portfolio } from "@/components/sections/Portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Portfolio — CYV Solutions" },
    { name: "description", content: "Selected case studies across business, healthcare, education, fitness, e-commerce and AI." },
    { property: "og:title", content: "Portfolio — CYV Solutions" },
    { property: "og:description", content: "Selected case studies." },
  ]}),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Work" title="Recent case studies" subtitle="A glimpse of products we've designed and built for ambitious teams." />
      <Portfolio />
    </Layout>
  );
}