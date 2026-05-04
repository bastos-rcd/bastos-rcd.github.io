export function Icon(props: { icon: string }) {
  return <i className={props.icon} style={{ fontSize: 20 }} />;
}

export function Item(props: { icon: string; label: string; link: string }) {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <Icon icon={props.icon} />

      <Link
        click={() => {
          window.open(props.link, "_blank", "noopener,noreferrer");
        }}
        label={props.label}
      />
    </div>
  );
}

export function Link(props: {
  variant?: "default" | "underline";
  click: () => void;
  label: React.ReactNode;
}) {
  return (
    <button
      onClick={props.click}
      className={`cursor-pointer ${props.variant === "underline" && "underline underline-offset-4"} hover:text-(--secondary) hover:scale-110 transition-transform duration-300`}
    >
      {props.label}
    </button>
  );
}

export function Section(props: { id: string; children: React.ReactNode }) {
  return (
    <section id={props.id} className="w-full px-10 sm:px-40">
      {props.children}
    </section>
  );
}

export function Title(props: { label: string }) {
  return (
    <h2 className="w-full font-bold text-center text-(--primary)">
      {props.label}
    </h2>
  );
}
