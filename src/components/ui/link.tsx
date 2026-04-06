interface Props {
  url: () => void;
  label: React.ReactNode;
}

export default function Link({ url, label }: Props) {
  return (
    <button
      onClick={url}
      className="cursor-pointer hover:text-(--secondary) hover:scale-110 transition-transform duration-300"
    >
      {label}
    </button>
  );
}
