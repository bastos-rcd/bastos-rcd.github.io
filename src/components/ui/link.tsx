interface Props {
  variant?: "default" | "underline";
  click: () => void;
  label: React.ReactNode;
}

export default function Link({ variant, click, label }: Props) {
  return (
    <button
      onClick={click}
      className={`cursor-pointer ${variant === "underline" && "underline underline-offset-4"} hover:text-(--secondary) hover:scale-110 transition-transform duration-300`}
    >
      {label}
    </button>
  );
}
