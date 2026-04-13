interface Props {
  label: string;
}

export default function Title({ label }: Props) {
  return (
    <h2 className="w-full font-bold text-center text-(--primary)">{label}</h2>
  );
}
