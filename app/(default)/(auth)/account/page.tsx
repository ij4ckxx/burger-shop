"use server";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { BurgerModal } from "@/components/ui/BurgerModal";
import { AuthContainer } from "@/components/auth/AuthContainer";

export default async function AccountPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-white relative">
      <Navbar />

      <AuthContainer />

      <Footer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <BurgerModal />
    </main>
  );
}