import {
  IconBrandAngular,
  IconBrandBootstrap,
  IconBrandDjango,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPhp,
  IconBrandReact,
  IconBrandSymfony,
  IconBrandTailwind,
  IconBrandVue,
  IconLanguage,
  IconMail,
  IconSql,
} from "@tabler/icons-react";

interface Props {
  icon: string;
}

export default function Icon({ icon }: Props) {
  switch (icon) {
    case "lang":
      return <IconLanguage size={25} />;
    case "angular":
      return <IconBrandAngular size={25} />;
    case "react":
      return <IconBrandReact size={25} />;
    case "php":
      return <IconBrandPhp size={25} />;
    case "symfony":
      return <IconBrandSymfony size={25} />;
    case "python":
      return <IconBrandReact size={25} />;
    case "django":
      return <IconBrandDjango size={25} />;
    case "docker":
      return <IconBrandDocker size={25} />;
    case "figma":
      return <IconBrandFigma size={25} />;
    case "bootstrap":
      return <IconBrandBootstrap size={25} />;
    case "tailwind":
      return <IconBrandTailwind size={25} />;
    case "vue":
      return <IconBrandVue size={25} />;
    case "sql":
      return <IconSql size={25} />;
    case "linkedin":
      return <IconBrandLinkedin size={25} />;
    case "github":
      return <IconBrandGithub size={25} />;
    case "instagram":
      return <IconBrandInstagram size={25} />;
    case "email":
      return <IconMail size={25} />;
  }
}
