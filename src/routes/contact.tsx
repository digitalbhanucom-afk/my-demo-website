import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CYV Solutions" },
      {
        name: "description",
        content: "Get in touch with CYV Solutions — we usually reply within a few hours.",
      },
      { property: "og:title", content: "Contact — CYV Solutions" },
      { property: "og:description", content: "Tell us about your project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Tell us about your project — we usually reply within a few hours."
      />
      <Contact />
    </Layout>
  );
}
