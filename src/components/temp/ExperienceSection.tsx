import { title } from "process";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CardProject from "../organism/CardExperience";

interface experienceProps {
    title: string;
    company: string;
    period: string;
    description: string;
}


export default function ExperienceSection({ title, description }: { title?: string, description?: string }) {
    return (
        <section id="experience" className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience {title}</h2>
                    <p className="text-dark-muted text-lg max-w-2xl mx-auto">
                        My professional journey and the skills I've developed along the way {description}
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Work Experience</h3>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Senior Frontend Developer",
                                    company: "Tech Solutions Inc.",
                                    period: "2022 - Present",
                                    description: "Led frontend development for multiple client projects using React and Next.js",
                                },
                                {
                                    title: "Full Stack Developer",
                                    company: "Digital Agency Co.",
                                    period: "2020 - 2022",
                                    description: "Developed and maintained web applications using MERN stack",
                                },
                                {
                                    title: "Junior Developer",
                                    company: "StartUp Hub",
                                    period: "2019 - 2020",
                                    description: "Built responsive websites and learned modern development practices",
                                },
                            ].map((job, index) => (
                                <CardProject job={job} skills={{}} index={index} />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}