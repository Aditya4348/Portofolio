import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import type { JobsProps, skillsProps } from "@/data/interface/global";



export default function CardExperience({ job, skills, index }: { job: JobsProps, skills: skillsProps, index: number }) {

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
                {job.description && <p className="text-dark-muted">{job.description}</p>}
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
        </Card>
    )
}