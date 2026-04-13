import { useStore } from "../utils/store";

import Section from "./ui/section";

export default function Hero() {
  const { about } = useStore();

  return (
    <Section id="about">
      <div className="w-full grid grid-cols-1 sm:grid-cols-5 gap-4">
        <div className="order-2 sm:order-1 sm:col-span-3 flex flex-col justify-center">
          <h1 className="font-semibold">{about.title}</h1>

          <h2 className="mt-2 font-semibold text-(--primary)">{about.job}</h2>

          <p className="mt-4">{about.description}</p>
        </div>

        <div className="order-1 sm:order-2 sm:col-span-2 flex justify-center">
          <img
            src="/src/assets/self.webp"
            className="w-80 rounded-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
