export default function Footer() {
  return (
    <footer className="w-full bg-(--background)">
      <p className="text-center">
        © {new Date().getFullYear()} - Bastien Record
      </p>
    </footer>
  );
}
