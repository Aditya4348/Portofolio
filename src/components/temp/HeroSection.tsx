import { hero } from "@/data/hero"
import SocialMediaGroup from "../organism/SocialMediaGroup";
import { Github, Linkedin, Mail, Instagram, } from "lucide-react"
import type { HeroSectionProps } from "@/data/interface/global";
import React from "react";
import { ContainerLayout } from "../ui/LayoutSection";
import ProfilImage from "../organism/ProfilImage";


export default function HeroSection() {

    const DataMedia  = [
        { href: 'https://github.com/fadhilamrulloh', icon: <Github /> },
        { href: 'https://www.linkedin.com/in/fadhilamrulloh/', icon: <Linkedin /> },
        { href: 'mailto:fadhilamrulloh@gmail.com', icon: <Mail /> },
        { href: 'https://www.instagram.com/fadhilamrulloh/', icon: <Instagram /> },
    ]

    return (
        <main id="home" className="pt-20 pb-16 px-4 min-h-screen flex items-center">
            <ContainerLayout  ClassName="max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <ContentSide hero={hero}>
                        <SocialMediaGroup socialMedia={ DataMedia } />
                    </ContentSide>
                    <ImageSide Profil={hero.Profil} />
                </div>
            </ContainerLayout>
        </main>
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


export const ImageSide = React.memo(function ImageSide({ Profil }: {Profil?: string}) {
    return (
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
                <ProfilImage Profil={Profil} />

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 md:w-16 md:h-16 bg-purple-500 rounded-full animate-pulse delay-1000 shadow-lg"></div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 md:w-10 md:h-10 bg-cyan-400 rounded-full animate-bounce delay-500 shadow-lg"></div>

                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl -z-10 scale-110"></div>
            </div>
        </div>
    )
}); 

