import { create } from "zustand";
import { Burger } from "@/types/burger";
import { CartItem } from "@/types/common";

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  activeModalBurger: Burger | null;
  toggleCart: (open?: boolean) => void;
  openBurgerModal: (burger: Burger) => void;
  closeBurgerModal: () => void;
  addItem: (burger: Burger, quantity?: number) => void;
  removeItem: (burgerId: string) => void;
  updateQuantity: (burgerId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isCartOpen: false,
  activeModalBurger: null,

  toggleCart: (open) =>
    set((state) => ({
      isCartOpen: open !== undefined ? open : !state.isCartOpen,
    })),

  openBurgerModal: (burger) => set({ activeModalBurger: burger }),
  closeBurgerModal: () => set({ activeModalBurger: null }),

  addItem: (burger, quantity = 1) =>
    set((state) => {
      const existingIndex = state.items.findIndex(
        (item) => item.burger.id === burger.id
      );

      if (existingIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex].quantity += quantity;
        return { items: updatedItems, isCartOpen: true };
      }

      return {
        items: [...state.items, { burger, quantity }],
        isCartOpen: true,
      };
    }),

  removeItem: (burgerId) =>
    set((state) => ({
      items: state.items.filter((item) => item.burger.id !== burgerId),
    })),

  updateQuantity: (burgerId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return {
          items: state.items.filter((item) => item.burger.id !== burgerId),
        };
      }
      return {
        items: state.items.map((item) =>
          item.burger.id === burgerId ? { ...item, quantity } : item
        ),
      };
    }),

  clearCart: () => set({ items: [] }),

  getTotalItems: () => {
    return get().items.reduce((acc, item) => acc + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce(
      (acc, item) => acc + item.burger.price * item.quantity,
      0
    );
  },
}));
