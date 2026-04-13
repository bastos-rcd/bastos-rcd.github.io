import { useEffect } from "react";

import { useStore } from "./utils/store";

import Header from "./components/header";
import Hero from "./components/hero";

export default function App() {
  const { loaded, setLoaded } = useStore();

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-10">
      <Header />

      <Hero />
    </div>
  );
}
