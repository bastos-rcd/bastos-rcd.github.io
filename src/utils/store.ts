import { create } from "zustand";

interface State {
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;

  language: string;
  changeLanguage: () => void;

  nav: { link: string; name: string }[];
}

export const useStore = create<State>((set) => ({
  loaded: false,
  setLoaded: (loaded: boolean) => set({ loaded }),

  language: "fr",
  changeLanguage: () => {
    set((state) => ({
      language: state.language === "fr" ? "en" : "fr",
    }));
  },

  nav: [
    { link: "#", name: "ACCUEIL" },
    { link: "#about", name: "À PROPOS" },
    { link: "#work", name: "PROJETS" },
    { link: "#contact", name: "CONTACT" },
  ],
}));
