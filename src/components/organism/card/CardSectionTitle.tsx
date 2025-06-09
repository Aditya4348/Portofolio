
export interface sectionTitleProps {
    title?: string,
    description?: string,
}

export default function CardSectionTitle({ title, description }: sectionTitleProps) {
    return (
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-dark-muted text-lg max-w-2xl mx-auto">
                {description}
            </p>
        </div>
    )
}