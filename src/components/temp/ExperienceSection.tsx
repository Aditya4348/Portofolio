import type { experienceProps } from "@/data/interface/global";
import CardExperience from "../organism/CardExperience";




export default function ExperienceSection({ title, description, titleWorks, titleSkills, jobs, skills }: experienceProps) { 
    return (
        <section id="experience" className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-dark-muted text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">{titleWorks}</h3>
                        <div className="space-y-6">
                            {jobs.map((job, index) => (
                                <CardExperience job={job} skills={{}} index={index} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">{titleSkills}</h3>
                        <div className="space-y-6">
                            {skills.map((skillGroup, index) => (
                                <CardExperience job={{}} skills={skillGroup} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}