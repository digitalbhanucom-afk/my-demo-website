const techs = [
  "Next.js","React","Node.js","TypeScript","Tailwind","Firebase",
  "MongoDB","PostgreSQL","OpenAI","AWS","Docker","Kubernetes",
  "GraphQL","Redis","Stripe","Vercel",
];

export function TechStack() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">Stack</div>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
          Built on <span className="text-gradient-primary">modern foundations</span>
        </h2>
      </div>

      <div className="mt-12 relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex marquee gap-4 w-max">
          {[...techs, ...techs].map((t, i) => (
            <div
              key={i}
              className="glass rounded-2xl px-8 py-5 min-w-[180px] text-center font-semibold hover:glow-soft hover:scale-105 transition cursor-default"
            >
              <span className="text-gradient-primary">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}