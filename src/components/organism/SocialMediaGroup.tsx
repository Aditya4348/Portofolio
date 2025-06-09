import type { SocialMediasProps } from "@/data/interface/global";
import { Button } from "../ui/button";

export default function SocialMediaGroup({ socialMedia }: SocialMediasProps ) {
    return (
        <div className="flex gap-4 justify-center lg:justify-start">
            {(socialMedia || []).map((item, index) => (
                <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="hover:text-blue-400 hover:bg-slate-800 w-12 h-12"
                >
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </a>
                </Button>
            ))}
        </div>
    )
}