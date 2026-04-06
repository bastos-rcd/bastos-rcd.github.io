interface Props {
  url: string;
  label: string;
}

export default function Link({ url, label }: Props) {
  return (
    <a href={url} className="">
      {label}
    </a>
  );
}
