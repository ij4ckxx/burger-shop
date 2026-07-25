"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Flame, ShieldCheck, Rocket, Sparkles } from "lucide-react";

const FEATURES = [
  {
    id: "f-1",
    title: "Flame-Grilled Perfection",
    description: "Every patty is flame-seared at 500°F to lock in natural smoky juices, creating an iconic caramelized outer crust.",
    icon: <Flame className="w-8 h-8 text-primary" />,
    badge: "SEARED AT 500°F",
  },
  {
    id: "f-2",
    title: "100% Black Angus Beef",
    description: "Ethically raised, non-GMO, never frozen pasture Angus beef delivered fresh daily from local sustainable farms.",
    icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
    badge: "NEVER FROZEN",
  },
  {
    id: "f-3",
    title: "20-Min Express Delivery",
    description: "Packed in custom insulated craft boxes to ensure piping hot, restaurant-quality crispness right to your door.",
    icon: <Rocket className="w-8 h-8 text-secondary" />,
    badge: "PIPING HOT",
  },
  {
    id: "f-4",
    title: "Secret House Sauces",
    description: "Artisanal white truffle glaze, smokey ghost pepper reduction, and sweet chili honey sauces crafted daily by our chefs.",
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    badge: "CHEF CRAFTED",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="accent" size="md">
            THE CRAFT DIFFERENCE
          </Badge>
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground">
            WHY BURGER CRAFT STANDS ALONE
          </h2>
          <p className="text-sm text-foreground/70">
            We reject mass production. We believe in obsession with flavor, quality beef, and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat) => (
            <Card
              key={feat.id}
              hoverEffect
              glow="orange"
              className="flex flex-col justify-between p-8 bg-surface/70 border border-foreground/10"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-foreground/10 flex items-center justify-center shadow-lg shadow-primary/10">
                  {feat.icon}
                </div>

                <Badge variant="outline" size="sm" className="text-[10px]">
                  {feat.badge}
                </Badge>

                <h3 className="font-heading text-2xl text-foreground">
                  {feat.title}
                </h3>

                <p className="text-xs text-foreground/70 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
