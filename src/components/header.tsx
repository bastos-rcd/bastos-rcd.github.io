import { useStore } from "../utils/store";

import Link from "./ui/link";

import Language from "./language";

export default function Header() {
  const { nav } = useStore();

  return (
    <header className="w-full sticky top-0 z-50 bg-(--background)">
      <div className="w-full flex flex-row items-center justify-evenly sm:justify-center sm:gap-20 p-4">
        {nav.map((item: any, index: number) => (
          <Link
            key={index}
            click={() => {
              window.location.href = item.link;
            }}
            label={item.name}
          />
        ))}

        <Language />
      </div>
    </header>
  );
}
