import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/icons/socials";
import Link from "next/link";
import Logo from "@/components/logo";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-muted/40">
      <div className="container px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              A complete school management platform designed to simplify
              administration, improve communication, and support academic
              excellence.
            </p>
            <div className="flex items-center gap-3">
              {[TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="rounded-md border p-2 text-muted-foreground hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Get in touch
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>support@[yourdomain].com</p>
              <p>+232 XXX XXX XXX</p>
              <p>Freetown, Sierra Leone</p>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                Product
              </h3>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
                <Link href="/features" className="hover:text-foreground">
                  Features
                </Link>
                <Link href="/pricing" className="hover:text-foreground">
                  Pricing
                </Link>
                <Link href="/how-it-works" className="hover:text-foreground">
                  How it works
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                Company
              </h3>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="/about" className="hover:text-foreground">
                  About
                </Link>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
                <Link href="/careers" className="hover:text-foreground">
                  Careers
                </Link>
              </nav>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground">
              Get product updates and school management insights.
            </p>
            <form className="flex gap-2">
              <Input placeholder="Email address" type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="container flex h-16 items-center justify-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} [Your Product Name]. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
