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
    <footer className="w-full border-t bg-primary">
      <div className="container px-4 py-16 md:px-6 mx-auto">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="dark" />
            <p className="text-sm text-white">
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
                    className="rounded-md border p-2 text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg text-white font-semibold uppercase tracking-wide">
              Get in touch
            </h3>
            <div className="space-y-2 text-sm text-white">
              <p>support@sisn.com</p>
              <p>+232 XX XXX XXX</p>
              <p>Freetown, Sierra Leone</p>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg text-white font-semibold uppercase tracking-wide">
                Product
              </h3>
              <nav className="flex flex-col gap-2 text-sm text-white">
                <Link href="/">Home</Link>
                <Link href="/features">Features</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/how-it-works">How it works</Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg text-white font-semibold uppercase tracking-wide">
                Company
              </h3>
              <nav className="flex flex-col gap-2 text-sm text-white">
                <Link href="/about">About</Link>
                <Link href="/contact-us">Contact</Link>
                <Link href="/careers">Careers</Link>
              </nav>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg text-white font-semibold uppercase tracking-wide">
              Newsletter
            </h3>
            <p className="text-sm text-white">
              Get product updates and school management insights.
            </p>
            <form className="flex text-white placeholder:text-white">
              <Input
                placeholder="Email address"
                type="email"
                className="rounded-r-none flex-1 placeholder:text-white selection:bg-primary"
              />
              <Button
                type="submit"
                className="rounded-l-none bg-white text-primary"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="container mx-auto flex h-16 items-center justify-center text-sm text-white">
          &copy; {new Date().getFullYear()} SISN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
