import { useStore } from "../utils/store";

import { Section, Title, Item } from "./ui";

export function Contact() {
  const { contact } = useStore();

  return (
    <Section id="contact">
      <div className="w-full flex flex-col gap-10 sm:gap-14">
        <Title label={contact.title} />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-20">
          <Item
            icon="fa-regular fa-envelope"
            label={contact.email}
            link={`mailto:${contact.email}`}
          />
          <Item
            icon="fa-brands fa-linkedin-in"
            label={contact.linkedin}
            link={`https://linkedin.com${contact.linkedin}`}
          />
          <Item
            icon="fa-brands fa-github"
            label={contact.github}
            link={`https://github.com${contact.github}`}
          />
          <Item
            icon="fa-brands fa-instagram"
            label={contact.instagram}
            link={`https://instagram.com${contact.instagram}`}
          />
        </div>
      </div>
    </Section>
  );
}
