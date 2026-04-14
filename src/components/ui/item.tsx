import Icon from "./icon";
import Link from "./link";

interface Props {
  icon: string;
  label: string;
  link: string;
}

export default function Item({ icon, label, link }: Props) {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <Icon icon={icon} />

      <Link
        click={() => {
          window.open(link, "_blank", "noopener,noreferrer");
        }}
        label={label}
      />
    </div>
  );
}
