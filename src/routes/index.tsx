import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { AIShowcase } from "@/components/sections/AIShowcase";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CYV Solutions — AI Automation, Web & Mobile Development" },
      { name: "description", content: "Premium IT services: AI automation, websites, mobile apps, CRMs, cloud and digital solutions. Create Your Vision with CYV." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <AIShowcase />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <TechStack />
      <Contact />
    </Layout>
  );
}
