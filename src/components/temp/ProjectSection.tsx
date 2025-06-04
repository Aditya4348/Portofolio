import type { ProjectProps } from "@/data/interface/global";
import CardProject from "../organism/CardProject";




export default function ProjectSection({
    title,
    description,
}: ProjectProps) {
    return (
        < section id="projects" className="py-16 px-4 bg-dark-secondary" >
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-dark-muted text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <CardProject/>
            </div>
        </ section>
    )
};
