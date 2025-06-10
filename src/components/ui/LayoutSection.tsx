
interface SectionLayoutProps {
    children: React.ReactNode
    idName?: string
    ClassName?: string
}

const ContainerLayout = ({ children, idName, ClassName }: SectionLayoutProps) => {
    return <div id={idName} className={`container mx-auto ${ClassName}`}>{children}</div>
}



export { ContainerLayout }