import { useStore } from "../utils/store";

import { Section } from "./ui";

export function Hero() {
  const { hero } = useStore();

  return (
    <Section id="about">
      <div className="w-full grid grid-cols-1 sm:grid-cols-5 gap-4">
        <div className="order-2 sm:order-1 sm:col-span-3 flex flex-col justify-center">
          <h1 className="font-semibold">{hero.title}</h1>

          <h2 className="mt-2 font-semibold text-(--primary)">{hero.job}</h2>

          <p className="mt-4">{hero.description}</p>
        </div>

        <div className="order-1 sm:order-2 sm:col-span-2 flex justify-center">
          <img src="self.webp" className="w-80 rounded-full object-cover" />
        </div>
      </div>
    </Section>
  );
}
