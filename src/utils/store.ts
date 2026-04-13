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

  work: {
    title: string;
    projects: {
      title: string;
      description: string;
      img: string;
      link: { label: string; url: string };
      stacks: string[];
    }[];
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
    { link: "#work", name: "PROJETS" },
    { link: "#contact", name: "CONTACT" },
  ],

  about: {
    title: "Salut, je suis Bastien",
    job: "Développeur Full Stack",
    description:
      "J'allie le développement full stack à une rigueur forgée par neuf ans de basket-ball. Désormais pratiquant plusieurs sports (force athlétique, course à pied...) je nourris également une passion pour l'automobile, notamment pour la Formule 1.",
  },

  work: {
    title: "Projets Récents",
    projects: [
      {
        title: "TheGym",
        description: "Application web de gestion de salle de sport.",
        img: "/src/assets/card.png",
        link: { label: "GitHub", url: "github.com" },
        stacks: ["angular", "symfony", "bootstrap"],
      },
      {
        title: "TheGym",
        description: "Application web de gestion de salle de sport.",
        img: "/src/assets/card.png",
        link: { label: "GitHub", url: "github.com" },
        stacks: ["angular", "symfony", "bootstrap"],
      },
    ],
  },
}));
