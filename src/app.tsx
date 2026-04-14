import { useEffect } from "react";

import { useStore } from "./utils/store";

import Header from "./components/header";
import Hero from "./components/hero";
import Work from "./components/work";
import Contact from "./components/contact";

export default function App() {
  const { loaded, setLoaded } = useStore();

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-16 sm:gap-20">
      <Header />

      <Hero />

      <Work />

      <Contact />
    </div>
  );
}
