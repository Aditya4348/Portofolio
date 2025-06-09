import { hero } from "@/data/hero"
import SocialMediaGroup from "../organism/SocialMediaGroup";
import { Github, Linkedin, Mail, Instagram, } from "lucide-react"
import type { HeroSectionProps } from "@/data/interface/global";




export default function HeroSection() {

    const DataMedia  = [
        { href: 'https://github.com/fadhilamrulloh', icon: <Github /> },
        { href: 'https://www.linkedin.com/in/fadhilamrulloh/', icon: <Linkedin /> },
        { href: 'mailto:fadhilamrulloh@gmail.com', icon: <Mail /> },
        { href: 'https://www.instagram.com/fadhilamrulloh/', icon: <Instagram /> },
    ]

    return (
        <section id="home" className="container mx-auto pt-20 pb-16 px-4 min-h-screen flex items-center">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <ContentSide hero={hero}>
                        <SocialMediaGroup socialMedia={ DataMedia } />
                    </ContentSide>
                    <ImageSide Profil={hero.Profil} />
                </div>
            </div>
        </section>
    )
};

export function ContentSide({
    hero, children
}: { hero: HeroSectionProps, children?: any }) {
    return (
        <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {hero.title} <span className="text-blue-400">{hero.name}</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-dark-secondary mb-6 font-medium">
                    {hero.subtitle}
                </h2>
                <p className="text-dark-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {hero.description}
                </p>
            </div>
            {children}
        </div>
    )
};


interface ImageProps {
    Profil?: string;
}

export function ImageSide({ Profil }: ImageProps) {
    return (
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
                {/* Main Profile Circle */}
                <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-dark-primary flex items-center justify-center overflow-hidden">
                        <img
                            src={`/assets/${Profil || "placeholder.svg"}`}
                            alt="Profile"
                            width={400}
                            height={400}
                            className="rounded-full object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 md:w-16 md:h-16 bg-purple-500 rounded-full animate-pulse delay-1000 shadow-lg"></div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 md:w-10 md:h-10 bg-cyan-400 rounded-full animate-bounce delay-500 shadow-lg"></div>

                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl -z-10 scale-110"></div>
            </div>
        </div>
    )
};

