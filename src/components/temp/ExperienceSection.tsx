import type { experienceProps } from "@/data/interface/global";
import CardExperience from "../organism/card/CardExperience";
import CardSectionTitle from "../organism/card/CardSectionTitle";
import { ContainerLayout } from "../ui/LayoutSection";




export default function ExperienceSection({ title, description, titleWorks, titleSkills, jobs, skills }: experienceProps) {
    return (
        <section id="experience" className="py-16 px-4">
            <ContainerLayout ClassName="max-w-6xl">
                <CardSectionTitle title={title} description={description} />
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">{titleWorks}</h3>
                        <div className="space-y-6">
                            {jobs.map((job, index) => (
                                <CardExperience key={index} job={job} skills={{}} index={index} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">{titleSkills}</h3>
                        <div className="space-y-6">
                            {skills.map((skillGroup, index) => (
                                <CardExperience key={index} job={{}} skills={skillGroup} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </ContainerLayout>
        </section>
    );
}