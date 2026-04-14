import { useStore } from "../utils/store";

import Section from "./ui/section";
import Title from "./ui/title";
import Link from "./ui/link";
import Icon from "./ui/icon";

export default function Work() {
  const { work } = useStore();

  return (
    <Section id="work">
      <div className="w-full flex flex-col gap-10 sm:gap-14">
        <Title label={work.title} />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-20">
          {work.projects.map((project) => (
            <div className="w-full flex flex-col gap-6">
              <img className="rounded-2xl" src={project.img} />

              <h3 className="font-semibold">{project.title}</h3>

              <span className="font-light">{project.description}</span>

              <div className="w-full flex flex-row justify-between items-center">
                <Link
                  variant="underline"
                  click={() => {
                    window.location.href = project.link.url;
                  }}
                  label={project.link.label}
                />

                <div className="flex flex-row justify-center items-center gap-2">
                  {project.stacks.map((stack) => (
                    <Icon icon={stack} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
