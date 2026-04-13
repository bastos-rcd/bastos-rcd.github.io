import { create } from "zustand";

interface State {
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;

  language: string;
  changeLanguage: () => void;

  nav: {
    link: string;
    name: string;
  }[];

  about: {
    title: string;
    job: string;
    description: string;
  };
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

  about: {
    title: "Salut, je suis Bastien",
    job: "Développeur Full Stack",
    description:
      "En alternance chez MOBIX, j'allie le développement web et l'intégration Zoho à une rigueur forgée par neuf ans de basket-ball. Désormais pratiquant plusieurs sports (force athlétique, course à pied...) je nourris également une passion pour l'automobile, notamment pour la Formule 1.",
  },
}));
