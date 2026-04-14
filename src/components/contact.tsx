import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useStore } from "../utils/store";

import Section from "./ui/section";
import Title from "./ui/title";
import Item from "./ui/item";

export default function Contact() {
  const { contact } = useStore();

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current!, publicKey)
      .then(() => {
        form.current?.reset();
      });
  };

  return (
    <Section id="contact">
      <div className="w-full flex flex-col gap-10 sm:gap-14">
        <Title label={contact.title} />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-20">
          <div className="flex flex-col justify-center items-start gap-10">
            <Item
              icon="email"
              label={contact.email}
              link={`mailto:${contact.email}`}
            />
            <Item
              icon="linkedin"
              label={contact.linkedin}
              link={`https://linkedin.com${contact.linkedin}`}
            />
            <Item
              icon="github"
              label={contact.github}
              link={`https://github.com${contact.github}`}
            />
            <Item
              icon="instagram"
              label={contact.instagram}
              link={`https://instagram.com${contact.instagram}`}
            />
          </div>

          <form
            className="w-full bg-white/5 rounded-lg flex flex-col justify-center items-start gap-10 p-8"
            ref={form}
            onSubmit={handleSubmit}
          >
            <input
              className="w-full border border-(--secondary) rounded-lg p-2"
              type="text"
              id="name"
              name="name"
              placeholder={contact.form.name}
            />
            <input
              className="w-full border border-(--secondary) rounded-lg p-2"
              type="email"
              id="email"
              name="email"
              placeholder={contact.form.email}
            />
            <textarea
              className="w-full border border-(--secondary) rounded-lg p-2"
              id="message"
              name="message"
              placeholder={contact.form.message}
            />
            <button
              className="bg-(--secondary) hover:cursor-pointer hover:bg-(--primary) transition-colors duration-300 rounded-lg px-4 py-2"
              type="submit"
            >
              {contact.form.button}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
