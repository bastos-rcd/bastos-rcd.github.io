import { useStore } from "../utils/store";

import Link from "./ui/link";
import Icon from "./ui/icon";

export default function Language() {
  const { setLoaded, changeLanguage } = useStore();

  const handleChange = async () => {
    setLoaded(false);
    changeLanguage();
    setLoaded(true);
  };

  return (
    <Link
      click={() => {
        handleChange();
      }}
      label={<Icon icon="fa-solid fa-language" />}
    />
  );
}
