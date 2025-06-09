import type { FooterProps } from "@/data/interface/global";
import CardSectionTitle from "../organism/card/CardSectionTitle";
import SocialMediaGroup from "../organism/SocialMediaGroup";
import { Github, Linkedin, Mail } from "lucide-react";

export default function FooterSection({ title, description, copyRight}: FooterProps) {

    const DataMedia  = [
        { href: 'https://github.com/fadhilamrulloh', icon: <Github /> },
        { href: 'https://www.linkedin.com/in/fadhilamrulloh/', icon: <Linkedin /> },
        { href: 'mailto:fadhilamrulloh@gmail.com', icon: <Mail /> },
    ]

    return (
        <footer id="contact" className="py-12 px-4 bg-dark-secondary border-t border-slate-700">
            <div className="container mx-auto max-w-6xl">
                <CardSectionTitle title={title} description={description} />
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-700">
                    <div className="text-dark-muted mb-4 md:mb-0">{copyRight}</div>
                    <SocialMediaGroup socialMedia={DataMedia} />
                </div>
            </div>
        </footer >
    )
}