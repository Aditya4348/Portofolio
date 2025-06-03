import { Button } from "../ui/button";

export interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    buttons?: {
        label?: string;
        variant?: "default" | "outline";
        onClick?: () => void;
    }[];
    socialMedias?: {
        icon?: React.ReactNode;
        href?: string;
        label?: string;
    }[];
    Profil?: string;
}

export default function HeroSection({
    title,
    subtitle,
    description,
    buttons,
    socialMedias,
    Profil
}: HeroSectionProps) {
    return (
        <section id="home" className="pt-20 pb-16 px-4 min-h-screen flex items-center">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <ContentSide
                        title={title}
                        subtitle={subtitle}
                        description={description}
                        buttons={buttons}
                        socialMedias={socialMedias}
                    />
                    <ImageSide Profil={Profil}/>
                </div>
            </div>
        </section>
    )
};

export function ContentSide({
    title,
    subtitle,
    description,
    buttons,
    socialMedias,
}: HeroSectionProps) {
    return (
        <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {title}
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-dark-secondary mb-6 font-medium">
                    {subtitle}
                </h2>
                <p className="text-dark-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {description}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                {(buttons || []).map((button, index) => (
                    <Button
                        key={index}
                        size="lg"
                        className={button.variant === "outline" ? "border-slate-600 hover:bg-slate-800" : "bg-blue-600 hover:bg-blue-700"}
                        onClick={button.onClick}
                    >
                        {button.label}
                    </Button>
                ))}
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
                {(socialMedias || []).map((socialMedia, index) => (
                    <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        className="hover:text-blue-400 hover:bg-slate-800 w-12 h-12"
                    >
                        <a href={socialMedia.href} target="_blank" rel="noopener noreferrer">
                            {socialMedia.icon}
                        </a>
                    </Button>
                ))}
            </div>
        </div>
    )
};

export function ImageSide({ Profil }: HeroSectionProps) {
    return (
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
                {/* Main Profile Circle */}
                <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-dark-primary flex items-center justify-center overflow-hidden">
                        <img
                            src={Profil}
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

