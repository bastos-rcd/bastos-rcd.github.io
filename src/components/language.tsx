import { useStore } from "../utils/store";

import Link from "./ui/link";
import Icon from "./ui/icon";

export default function Language() {
  const { setLoaded, changeLanguage } = useStore();

  const handleChange = () => {
    setLoaded(false);

    changeLanguage();

    setLoaded(true);
  };

  return (
    <Link
      url={() => {
        handleChange();
      }}
      label={<Icon icon="lang" />}
    />
  );
}
