interface Props {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: Props) {
  return (
    <section id={id} className="w-full px-10 sm:px-40">
      {children}
    </section>
  );
}
