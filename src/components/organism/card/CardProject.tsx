import { ExternalLink, Github } from "lucide-react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Link } from "react-router-dom";
import type { ProjectProps } from "@/data/interface/global";

export default function CardProject({projects}: any) {
    
    if (projects.length > 0) {
        return (
            <Project projects={projects} />
        );
    }

    return (
        <div className="text-center py-24 px-4 bg-gradient-to-b from-dark-primary to-dark-secondary rounded-2xl shadow-lg">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-pulse tracking-wide">
                🚧 Coming Soon
            </h2>
            <p className="text-dark-muted text-lg max-w-xl mx-auto">
                Saya sedang menyiapkan sesuatu yang luar biasa. Tetap pantau ya!
            </p>
        </div>
    )
}

export function Project({ projects }: ProjectProps) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(projects || []).map((project, index) => (
                <Card
                    key={index}
                    className="bg-dark-accent border-slate-600 hover:border-blue-400 transition-colors group"
                >
                    <div className="relative overflow-hidden">
                        <img
                            src={`/assets/${project.mainImage || "placeholder.svg"}`}
                            alt={project.title}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
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
                        <div className="w-full flex justify-end gap-2 mt-4">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-1/2">
                                <Button
                                    size="sm"
                                    variant="secondary"
                                    className="w-full flex items-center gap-2 px-4 py-2 rounded-md shadow-sm border border-slate-600 hover:border-blue-400 transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    Code
                                </Button>
                            </a>
                            <Link to={`/detail/${project.detail[0].category}/${project.detail[0].id}`} className="w-1/2">
                                <Button
                                    size="sm"
                                    variant="secondary"
                                    className="w-full flex items-center gap-2 px-4 py-2 rounded-md shadow-sm border border-slate-600 hover:border-blue-400 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Detail
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
};