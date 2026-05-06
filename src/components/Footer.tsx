import { Link } from "@tanstack/react-router";
import { Sparkles, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold">CYV <span className="text-gradient-primary">Solutions</span></div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase">Create Your Vision</div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Building AI-powered digital products that move businesses forward.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Linkedin, Instagram, Github].map((I, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:glow-soft transition">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[["/about","About"],["/services","Services"],["/portfolio","Portfolio"],["/pricing","Pricing"],["/blog","Blog"],["/careers","Careers"]].map(([to,l]) => (
                <li key={to}><Link to={to as string} className="hover:text-foreground transition">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["AI Automation","Web Development","Mobile Apps","CRM Solutions","Cloud Solutions","Digital Marketing"].map((s) => (
                <li key={s} className="hover:text-foreground transition cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Nellore, Andhra Pradesh, India</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 91147 31147</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@cyvsolutions.com</li>
            </ul>
            <form className="mt-5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg bg-input border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} CYV Solutions. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}