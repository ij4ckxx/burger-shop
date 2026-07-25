"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, ArrowRight, Utensils } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { BURGERS } from "@/constants/burgers";

export const HeroButtons: React.FC = () => {
  const { openBurgerModal } = useCartStore();

  const handleFeaturedClick = () => {
    if (BURGERS.length > 0) {
      openBurgerModal(BURGERS[0]);
    }
  };

  return (
    <div className="hero-buttons flex flex-wrap items-center gap-4 pt-2">
      <Button
        variant="glow"
        size="lg"
        leftIcon={<ShoppingBag className="w-5 h-5" />}
        rightIcon={<ArrowRight className="w-5 h-5" />}
        onClick={handleFeaturedClick}
        className="shadow-xl"
      >
        ORDER FEATURED SMASH
      </Button>

      <a href="#menu">
        <Button
          variant="outline"
          size="lg"
          leftIcon={<Utensils className="w-5 h-5 text-primary" />}
        >
          EXPLORE FULL MENU
        </Button>
      </a>
    </div>
  );
};
