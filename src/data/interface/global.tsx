
export interface HeroSectionProps {
    title?: string;
    name?: string;
    subtitle?: string;
    description?: string;
    buttons?: {
        label?: string;
        variant?: string;
    }[];
    socialMedias?: {
        icon?: React.ReactNode;
        href?: string;
        label?: string;
    }[];
    Profil?: string;
}

export interface ProjectItem {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    detail: string;
}

export interface ProjectProps {
    title?: string;
    description?: string;
    projects?: ProjectItem[];
}
