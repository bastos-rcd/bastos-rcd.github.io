interface Props {
  icon: string;
}

export default function Icon({ icon }: Props) {
  return <i className={icon} style={{ fontSize: 20 }} />;
}
