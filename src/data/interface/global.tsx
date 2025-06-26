export interface SocialMediasProps {
    socialMedia: {
        icon?: React.ReactNode;
        href?: string;
    }[];
}

export interface HeroSectionProps {
    title?: string;
    name?: string;
    subtitle?: string;
    description?: string;
    buttons?: {
        label: string;
        href: string;
        variant?: string;
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
    buttons?: {
        label: string;
        href: string;
        variant?: string;
    }[];
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

// interface bagian footer

export interface FooterProps {
    title?: string;
    description?: string;
    copyRight: string;
}



