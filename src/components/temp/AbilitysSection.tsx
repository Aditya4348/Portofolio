import CardProject from "../organism/CardExperience";

interface abilitysProps {
    skillTitle: string;
    skillGroups: [];
}

export default function AbilitysSection({ skillTitle, skillGroups }: abilitysProps) {
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">{skillTitle}</h3>
            <div className="space-y-6">
                {skillGroups.map((skillGroup, index) => (
                    <CardProject job={{}} skills={skillGroup} index={index} />
                ))}
            </div>
        </div>
    )
}