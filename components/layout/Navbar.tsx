"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useCartStore } from "@/store/cartStore";
import { NAV_LINKS, STORE_INFO } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import {
  Flame,
  ShoppingBag,
  Sun,
  Moon,
  Menu as MenuIcon,
  X,
  Phone,
  Clock,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { toggleCart, getTotalItems } = useCartStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = getTotalItems();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-foreground/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      {/* Top Banner info strip */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-6 mb-2 text-xs font-medium text-foreground/60 border-b border-foreground/5 pb-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-primary">
            <Clock className="w-3.5 h-3.5" />
            Express Delivery in {STORE_INFO.deliveryTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-secondary" />
            {STORE_INFO.phone}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span>{STORE_INFO.hours}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
            <Flame className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-2xl tracking-wider text-foreground group-hover:text-primary transition-colors">
              BURGER<span className="text-primary">CRAFT</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary -mt-1">
              Flame-Grilled Gourmet
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 bg-surface/60 backdrop-blur-md px-6 py-2 rounded-full border border-foreground/10 shadow-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-semibold text-foreground/80 hover:text-primary transition-colors flex items-center gap-1.5 py-1 group"
            >
              {link.label}
              {link.badge && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-primary text-white font-bold">
                  {link.badge}
                </span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 rounded-full bg-surface border border-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground/10 hover:text-primary transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-burger-gray-700" />
              )}
            </button>
          )}

          {/* Cart Button with Count Badge */}
          <button
            onClick={() => toggleCart(true)}
            className="relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-md hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="font-heading text-lg hidden sm:inline tracking-wider">
              CART
            </span>
            <span className="w-6 h-6 rounded-full bg-secondary text-burger-gray-900 font-bold text-xs flex items-center justify-center">
              {totalItems}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-surface border border-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-surface border-b border-foreground/10 p-6 flex flex-col gap-4 shadow-2xl animate-fade-in">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-heading tracking-wide text-foreground hover:text-primary flex items-center justify-between py-2 border-b border-foreground/5"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-white font-bold">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3 text-xs text-foreground/70">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> Delivery: {STORE_INFO.deliveryTime}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary" /> {STORE_INFO.phone}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
