"use client";

import React, { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { X, Star, Flame, Clock, Zap, ShoppingBag, Plus, Minus, Check } from "lucide-react";

export const BurgerModal: React.FC = () => {
  const { activeModalBurger, closeBurgerModal, addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  if (!activeModalBurger) return null;

  const handleAddToCart = () => {
    addItem(activeModalBurger, quantity);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      closeBurgerModal();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md transition-all duration-300 animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-surface border border-foreground/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeBurgerModal}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image Showcase */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-burger-red-500/20 via-surface to-secondary/10 flex items-center justify-center p-6 overflow-hidden">
          <div className="absolute -inset-10 bg-radial from-primary/20 via-transparent to-transparent rounded-full blur-2xl" />
          <img
            src={activeModalBurger.image}
            alt={activeModalBurger.name}
            className="relative z-10 w-full h-full object-contain max-h-72 drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
            {activeModalBurger.isPopular && (
              <Badge variant="discount">POPULAR</Badge>
            )}
            {activeModalBurger.isSpicy && (
              <Badge variant="spicy">
                <Flame className="w-3.5 h-3.5 mr-1 inline" /> EXTRA SPICY
              </Badge>
            )}
            {activeModalBurger.isVeg && (
              <Badge variant="veg">100% VEGAN</Badge>
            )}
          </div>
        </div>

        {/* Right: Details & Action */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                <span>{activeModalBurger.categoryId}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  {activeModalBurger.rating} ({activeModalBurger.reviewsCount} reviews)
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading tracking-wide text-foreground">
                {activeModalBurger.name}
              </h2>
              <p className="text-xs text-foreground/60 italic font-medium mt-1">
                {activeModalBurger.tagline}
              </p>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed">
              {activeModalBurger.description}
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-foreground/10">
              <div className="flex items-center gap-2 text-xs text-foreground/70">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>{activeModalBurger.calories} Calories</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-foreground/70">
                <Clock className="w-4 h-4 text-primary" />
                <span>{activeModalBurger.prepTimeMinutes} Mins Prep</span>
              </div>
            </div>

            {/* Ingredients Tags */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-2">
                Artisanal Ingredients
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalBurger.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-surface/80 border border-foreground/10 text-foreground/80 font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Controls & Add to Cart */}
          <div className="mt-6 pt-4 border-t border-foreground/10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-foreground/50 uppercase tracking-wider block">
                  Total Price
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-heading text-primary">
                    ${(activeModalBurger.price * quantity).toFixed(2)}
                  </span>
                  {activeModalBurger.originalPrice && (
                    <span className="text-sm text-foreground/40 line-through">
                      ${(activeModalBurger.originalPrice * quantity).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-3 bg-surface/80 border border-foreground/15 rounded-full px-3 py-1.5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-full hover:bg-foreground/10 flex items-center justify-center text-foreground font-bold"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-heading text-lg w-4 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-full hover:bg-foreground/10 flex items-center justify-center text-foreground font-bold"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <Button
              variant={addedToast ? "secondary" : "glow"}
              size="lg"
              className="w-full"
              leftIcon={
                addedToast ? <Check className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />
              }
              onClick={handleAddToCart}
            >
              {addedToast ? "ADDED TO CRAFT CART!" : "ADD TO CART NOW"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
