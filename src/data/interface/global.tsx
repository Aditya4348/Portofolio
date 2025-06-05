
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


// interface (tipe data custom untuk bagian Experience Section)

export interface JobsProps {
    title?: string
    company?: string
    period?: string
    description?: string
}

export interface skillsProps {
    category?: string;
    skill?: string[];
}

export interface experienceProps {
    title: string;
    description?: string;
    titleWorks: string;
    titleSkills: string;
    jobs: JobsProps[];
    skills: skillsProps[];
}
