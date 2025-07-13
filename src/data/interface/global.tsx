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
    link?: {
        label: string;
        href: string;
        type?: false | true;
        id: string;
    }[];
    buttons?: {
        label: string;
        category?: string;
        id?: string;
        variant?: string;
    }[];
    Profil?: string;
}

export interface ProjectItem {
    title: string;
    description: string;
    mainImage: string;
    image: string[];
    tags: string[];
    github: string;
    detail: { category: string; id: string }[];
}

export interface ProjectProps {
    title?: string;
    description?: string;
    detaildescription?: string;
    projects?: ProjectItem[];
}


// interface (tipe data custom untuk bagian Experience Section)

export interface JobsProps {
    title?: string
    company?: string
    period?: string
    description?: string
    detaildescription?: string
    buttons?: {
        label: string;
        category?: string;
        id?: string;
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



