import type { ProjectProps } from "@/data/interface/global";
import CardProject from "../organism/card/CardProject";
import CardSectionTitle from "../organism/card/CardSectionTitle";
import { ContainerLayout } from "../ui/LayoutSection";




export default function ProjectSection({
    title,
    description,
}: ProjectProps) {
    return (
        < section id="projects" className="py-16 px-4 bg-dark-secondary" >
            <ContainerLayout ClassName="max-w-6xl">
                <CardSectionTitle title={title} description={description} />
                <CardProject />
            </ContainerLayout>
        </ section>
    )
};
