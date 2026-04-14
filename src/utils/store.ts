import { create } from "zustand";

interface State {
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;

  language: string;
  changeLanguage: () => void;

  nav: any[];
  setNav: (nav: any[]) => void;

  hero: any;
  setHero: (hero: any) => void;

  work: any;
  setWork: (work: any) => void;

  contact: any;
  setContact: (contact: any) => void;
}

export const useStore = create<State>((set) => ({
  loaded: false,
  setLoaded: (loaded: boolean) => set({ loaded }),

  language: "fr",
  changeLanguage: () =>
    set((state) => ({
      language: state.language === "fr" ? "en" : "fr",
    })),

  nav: [],
  setNav: (nav: any[]) => set({ nav }),

  hero: {},
  setHero: (hero: any) => set({ hero }),

  work: {},
  setWork: (work: any) => set({ work }),

  contact: {},
  setContact: (contact: any) => set({ contact }),
}));
