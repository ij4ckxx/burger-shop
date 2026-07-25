"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { BurgerModal } from "@/components/ui/BurgerModal";

import { Hero } from "@/components/hero/Hero";
import { Categories } from "@/components/sections/Categories";
import { PopularBurger } from "@/components/sections/PopularBurger";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-white relative">
      <Navbar />

      <Hero />

      <Categories
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      <PopularBurger activeCategory={activeCategory} />

      <PromoBanner />

      <WhyChooseUs />

      <Testimonials />

      <Newsletter />

      <Footer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <BurgerModal />
    </main>
  );
}
