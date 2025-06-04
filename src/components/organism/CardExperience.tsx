import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";

interface experienceProps {
    title?: string
    company?: string
    period?: string
    description?: string
}

interface skillsProps {
    category?: string;
    skill?: string[];
}

export default function CardExperience({ job, skills, index }: { job: experienceProps, skills: skillsProps, index: number }) {

    return (
        <Card key={index} className="bg-dark-secondary border-slate-600">
            <CardHeader>
            <CardTitle className="text-dark-primary">{job.title || skills.category}</CardTitle>
                {job.company && (
                    <CardDescription className="text-blue-400">{job.company}</CardDescription>
                )}
                {job.period && (
                    <Badge variant="outline" className="w-fit border-slate-500 text-slate-400">
                        {job.period}
                    </Badge>
                )}
            </CardHeader>
            <CardContent>
                {job.company && <p className="text-dark-muted">{job.company}</p>}
                {skills.skill && (
                    <div className="flex flex-wrap gap-2">
                        {skills.skill.map((abilitys, index) => (
                            <Badge key={index} className="bg-blue-600 hover:bg-blue-700">
                                {abilitys}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <Link to={`/projects/${index}`}>
                    <Badge variant="outline" className="w-fit border-slate-500 text-slate-400">
                        View Project
                    </Badge>
                </Link>
            </CardFooter>
        </Card>
    )
}