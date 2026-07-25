"use client";

import React from "react";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/Button";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Flame,
  Truck,
} from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalPrice,
    getTotalItems,
  } = useCartStore();

  if (!isCartOpen) return null;

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();
  const freeDeliveryThreshold = 35.0;
  const freeDeliveryProgress = Math.min(
    100,
    (totalPrice / freeDeliveryThreshold) * 100
  );
  const remainingForFreeDelivery = Math.max(
    0,
    freeDeliveryThreshold - totalPrice
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={() => toggleCart(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface text-foreground shadow-2xl flex flex-col justify-between border-l border-foreground/10 animate-slide-left">
          {/* Header */}
          <div className="p-6 border-b border-foreground/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-2xl tracking-wide">
                  YOUR CRAFT BASKET
                </h3>
                <span className="text-xs text-foreground/60">
                  {totalItems} {totalItems === 1 ? "item" : "items"} selected
                </span>
              </div>
            </div>
            <button
              onClick={() => toggleCart(false)}
              className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Bar */}
          <div className="bg-primary/5 p-4 border-b border-foreground/10">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
              <span className="flex items-center gap-1.5 text-foreground/80">
                <Truck className="w-4 h-4 text-primary" />
                {remainingForFreeDelivery === 0
                  ? "🎉 YOU UNLOCKED FREE EXPRESS DELIVERY!"
                  : `Add $${remainingForFreeDelivery.toFixed(2)} more for FREE delivery`}
              </span>
            </div>
            <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 rounded-full"
                style={{ width: `${freeDeliveryProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <Flame className="w-10 h-10 animate-bounce" />
                </div>
                <h4 className="font-heading text-2xl text-foreground">
                  YOUR BASKET IS EMPTY
                </h4>
                <p className="text-xs text-foreground/60 max-w-xs">
                  Looks like you haven't craved anything yet. Explore our gourmet flame-grilled burgers!
                </p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => toggleCart(false)}
                  className="mt-2"
                >
                  EXPLORE MENU NOW
                </Button>
              </div>
            ) : (
              items.map(({ burger, quantity }) => (
                <div
                  key={burger.id}
                  className="flex items-center gap-4 p-3 rounded-2xl bg-surface/60 border border-foreground/10 hover:border-primary/20 transition-all"
                >
                  <img
                    src={burger.image}
                    alt={burger.name}
                    className="w-16 h-16 object-cover rounded-xl border border-foreground/10"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-heading text-lg text-foreground truncate">
                      {burger.name}
                    </h5>
                    <span className="text-xs text-primary font-bold block">
                      ${burger.price.toFixed(2)} each
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(burger.id, Math.max(0, quantity - 1))
                        }
                        className="w-6 h-6 rounded-md bg-foreground/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-heading text-sm w-4 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(burger.id, quantity + 1)}
                        className="w-6 h-6 rounded-md bg-foreground/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="font-heading text-xl text-foreground">
                      ${(burger.price * quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(burger.id)}
                      className="text-foreground/40 hover:text-danger transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-foreground/10 bg-surface/90 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-foreground/70">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-foreground/70">
                  <span>Delivery Fee</span>
                  <span>
                    {remainingForFreeDelivery === 0 ? (
                      <span className="text-emerald-500 font-bold">FREE</span>
                    ) : (
                      "$3.99"
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-heading tracking-wider text-foreground pt-2 border-t border-foreground/10">
                  <span>ESTIMATED TOTAL</span>
                  <span className="text-primary text-2xl">
                    $
                    {(
                      totalPrice + (remainingForFreeDelivery === 0 ? 0 : 3.99)
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={clearCart}
                  className="text-xs text-foreground/50 hover:text-danger transition-colors underline"
                >
                  Clear All
                </button>
                <Button
                  variant="glow"
                  size="lg"
                  className="flex-1"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  onClick={() => alert("Proceeding to Checkout mock flow!")}
                >
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
