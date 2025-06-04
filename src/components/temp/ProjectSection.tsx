import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

interface projectProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
}

interface props {
    title?: string;
    description?: string;
    projects?: projectProps[];
}

export default function ProjectSection({
    title,
    description,
    projects,
}: props) {
    return (
        < section id="projects" className="py-16 px-4 bg-dark-secondary" >
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-dark-muted text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <ProjectElement projects={projects}/>
            </div>
        </ section>
    )
};

export function ProjectElement({ projects }: props ){
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(projects || []).map((project, index) => (
                <Card
                    key={index}
                    className="bg-dark-accent border-slate-600 hover:border-blue-400 transition-colors group"
                >
                    <div className="relative overflow-hidden">
                        <img
                            src={`/assets/projects/${project.image || "placeholder.svg"}`}
                            alt={project.title}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                            <a href="{project.github}" target="_blank" rel="noopener noreferrer">
                                <Button size="sm" variant="secondary">
                                    <Github className="w-4 h-4 mr-2" />
                                    Code
                                </Button>
                            </a>
                            <a href="{project.demo}" target="_blank" rel="noopener noreferrer">
                                <Button size="sm" variant="secondary">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Demo
                                </Button>
                            </a>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-dark-primary">{project.title}</CardTitle>
                        <CardDescription className="text-dark-muted">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {(project.tags || []).map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary" className="bg-slate-700 text-slate-300">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
};