import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Pricing } from "@/components/sections/Pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — CYV Solutions" },
      {
        name: "description",
        content: "Transparent plans that scale with your business — from starter to enterprise.",
      },
      { property: "og:title", content: "Pricing — CYV Solutions" },
      { property: "og:description", content: "Plans that scale with you." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Pricing"
        title="Plans that scale"
        subtitle="Transparent pricing for every stage of your business."
      />
      <Pricing />
    </Layout>
  );
}
