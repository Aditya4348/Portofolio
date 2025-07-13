import type { ProjectProps } from "@/data/interface/global";
import CardProject from "../organism/card/CardProject";
import CardSectionTitle from "../organism/card/CardSectionTitle";
import { ContainerLayout } from "../ui/LayoutSection";
import { DataProject } from "@/data/project";
import FadeUpHook from "@/components/animations/FadeUpHook";

export default function ProjectSection({ title, description }: ProjectProps) {
  return (
    <section id="projects" className="py-16 px-4 bg-dark-secondary">
      <ContainerLayout ClassName="max-w-6xl">
        <CardSectionTitle title={title} description={description} />
        <FadeUpHook>
          <CardProject projects={DataProject} />
        </FadeUpHook>
      </ContainerLayout>
    </section>
  );
}
