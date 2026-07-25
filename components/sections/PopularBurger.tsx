"use client";

import React, { useState } from "react";
import { BURGERS } from "@/constants/burgers";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { useCartStore } from "@/store/cartStore";
import {
  Star,
  Flame,
  Search,
  Eye,
  ShoppingBag,
  Check,
  Zap,
  Clock,
} from "lucide-react";

interface PopularBurgerProps {
  activeCategory: string;
}

export const PopularBurger: React.FC<PopularBurgerProps> = ({
  activeCategory,
}) => {
  const { addItem, openBurgerModal } = useCartStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredBurgers = BURGERS.filter((burger) => {
    const matchesCategory =
      activeCategory === "all" || burger.categoryId === activeCategory;
    const matchesSearch =
      burger.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      burger.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      burger.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (e: React.MouseEvent, burger: (typeof BURGERS)[0]) => {
    e.stopPropagation();
    addItem(burger, 1);
    setAddedId(burger.id);
    setTimeout(() => setAddedId(null), 1000);
  };

  return (
    <section id="menu" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <Badge variant="primary" size="md" className="mb-2">
              POPULAR CRAFTS
            </Badge>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-wide text-foreground">
              SIGNATURE GOURMET SELECTION
            </h2>
            <p className="text-sm text-foreground/70">
              Each burger is flame-grilled fresh upon order using 100% Black Angus Beef.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-80">
            <Input
              placeholder="Search burgers, truffle, spicy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search className="w-4 h-4 text-foreground/50" />}
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredBurgers.length === 0 ? (
          <div className="text-center py-16 bg-surface/50 rounded-3xl border border-foreground/10">
            <Flame className="w-12 h-12 text-primary mx-auto mb-3 animate-bounce" />
            <h3 className="font-heading text-2xl text-foreground">
              NO BURGERS FOUND
            </h3>
            <p className="text-sm text-foreground/60 max-w-sm mx-auto mt-1">
              No flame-grilled creations match your search. Try clearing filters or searching for something else.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBurgers.map((burger) => {
              const isAdded = addedId === burger.id;

              return (
                <Card
                  key={burger.id}
                  hoverEffect
                  glow="red"
                  className="group relative flex flex-col justify-between overflow-hidden cursor-pointer"
                  onClick={() => openBurgerModal(burger)}
                >
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5">
                    {burger.isPopular && <Badge variant="discount">POPULAR</Badge>}
                    {burger.isSpicy && (
                      <Badge variant="spicy">
                        <Flame className="w-3 h-3 mr-1 inline" /> SPICY
                      </Badge>
                    )}
                    {burger.isVeg && <Badge variant="veg">VEGAN</Badge>}
                  </div>

                  {/* Rating Badge - Top Right */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 glass-panel px-3 py-1 rounded-full text-xs font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{burger.rating}</span>
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full h-56 pt-4 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={burger.image}
                      alt={burger.name}
                      className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Details */}
                  <div className="pt-4 flex flex-col gap-3 flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[11px] text-foreground/50 font-semibold mb-1">
                        <span className="flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5 text-amber-500" />
                          {burger.calories} Cal
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          {burger.prepTimeMinutes} Mins
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl text-foreground group-hover:text-primary transition-colors">
                        {burger.name}
                      </h3>
                      <p className="text-xs text-foreground/70 line-clamp-2 mt-1 leading-relaxed">
                        {burger.description}
                      </p>
                    </div>

                    {/* Price & Actions */}
                    <div className="pt-3 border-t border-foreground/10 flex items-center justify-between gap-2 mt-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-heading text-3xl text-primary">
                          ${burger.price.toFixed(2)}
                        </span>
                        {burger.originalPrice && (
                          <span className="text-xs text-foreground/40 line-through">
                            ${burger.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Quick View Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openBurgerModal(burger);
                          }}
                          className="w-10 h-10 rounded-full bg-surface border border-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground/10 transition-colors"
                          title="Quick View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {/* Add to Cart Button */}
                        <Button
                          variant={isAdded ? "secondary" : "primary"}
                          size="sm"
                          leftIcon={
                            isAdded ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <ShoppingBag className="w-4 h-4" />
                            )
                          }
                          onClick={(e) => handleAddToCart(e, burger)}
                        >
                          {isAdded ? "ADDED" : "ADD"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
