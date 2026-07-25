"use client";

import React from "react";
import { CATEGORIES } from "@/constants/categories";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Utensils,
  Crown,
  Zap,
  Drumstick,
  Leaf,
  PackageCheck,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Utensils: <Utensils className="w-6 h-6" />,
  Crown: <Crown className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Drumstick: <Drumstick className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  PackageCheck: <PackageCheck className="w-6 h-6" />,
};

interface CategoriesProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-2 mb-10">
          <Badge variant="secondary" size="md">
            EXPLORE THE CRAFT
          </Badge>
          <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground">
            CRAVINGS BY CATEGORY
          </h2>
          <p className="text-sm text-foreground/70 max-w-md">
            From double smashed beef patties to crispy hot honey chicken and plant-based feasts.
          </p>
        </div>

        {/* Categories Grid / Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative group rounded-3xl p-5 text-left transition-all duration-300 border flex flex-col justify-between h-44 cursor-pointer outline-none ${
                  isActive
                    ? "bg-gradient-to-br from-primary via-accent to-secondary text-white border-transparent shadow-xl shadow-primary/30 scale-105"
                    : "bg-surface hover:bg-surface/80 border-foreground/10 text-foreground hover:border-primary/40 hover:-translate-y-1"
                }`}
              >
                {/* Top Badge */}
                {cat.badge && (
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider self-start ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {ICON_MAP[cat.iconName] || <Utensils className="w-6 h-6" />}
                </div>

                {/* Name & Count */}
                <div>
                  <h3 className="font-heading text-xl leading-none mb-1 tracking-wide">
                    {cat.name}
                  </h3>
                  <span
                    className={`text-xs ${
                      isActive ? "text-white/80" : "text-foreground/50"
                    }`}
                  >
                    {cat.itemCount} Items
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
