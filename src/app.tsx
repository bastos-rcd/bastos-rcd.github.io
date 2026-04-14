import { useEffect } from "react";

import { useStore } from "./utils/store";

import Header from "./components/header";
import Hero from "./components/hero";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  const { loaded, setLoaded, language, setNav, setHero, setWork, setContact } =
    useStore();

  useEffect(() => {
    fetch(`./values/${language}.json`)
      .then((data) => data.json())
      .then((json) => {
        setNav(json.nav);
        setHero(json.hero);
        setWork(json.work);
        setContact(json.contact);

        setLoaded(true);
      });
  }, [language]);

  if (!loaded) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-16 sm:gap-20">
      <Header />

      <Hero />

      <Work />

      <Contact />

      <Footer />
    </div>
  );
}
