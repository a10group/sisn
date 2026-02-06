import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SmallTitle from "@/components/frontend/small-title";
import { StarIcon } from "@/icons/title";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-muted-foreground px-4">
      <div className="max-w-3xl mx-auto text-center bg-muted-foreground">
        {/* Badge */}
        <SmallTitle
          title="Welcome to SISN"
          icon={<StarIcon className="h-4 w-4 text-yellow-400" />}
        />

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
          Your Complete School Management System
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Simplify administration, improve communication, and manage students,
          staff, and academics in one reliable platform designed for schools
          like yours.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 py-6 text-base">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="rounded-full px-8 py-6 text-base"
          >
            Explore Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
