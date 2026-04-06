import { Languages } from "lucide-react";

const style = "w-6 h-6";

interface Props {
  icon: "lang";
}

export default function Icon({ icon }: Props) {
  switch (icon) {
    case "lang":
      return <Languages className={style} />;
  }
}
