import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
        <div className="my-auto">
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
            New Collection 🌱
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            Discover Amazing Plants & Botanical Wonders
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Explore our curated collection of rare and beautiful plants. From exotic 
            tropical varieties to hardy indoor companions, find the perfect green 
            addition to your space.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Browse Plants <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Care Guide
            </Button>
          </div>
        </div>
        <div className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen bg-accent rounded-xl lg:rounded-none" />
      </div>
    </div>
  );
};

export default Hero;
