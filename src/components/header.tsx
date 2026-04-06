import Link from "./ui/link";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-(--background) flex flex-row justify-center items-center gap-6 p-2">
      <img src="/favicon.webp" className="w-14 h-14" />

      <div className="flex flex-row gap-6">
        <Link url="#" label="Accueil" />
        <Link url="#" label="À propos" />
        <Link url="#" label="Contact" />
      </div>
    </header>
  );
}
