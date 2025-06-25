import ProfilImage from "@/components/organism/ProfilImage";
import { ContentSide } from "@/components/temp/HeroSection";
import { ContainerLayout } from "@/components/ui/LayoutSection";

const hero = {
  subtitle: "About Me",
  description:
    "Saya seorang Frontend Developer yang berpengalaman selama 5 tahun. Saya memiliki kemampuan dalam membuat antarmuka web yang modern dan responsif. Saya juga memiliki kemampuan dalam mengembangkan web application menggunakan teknologi React, Next.js, dan TypeScript.",
};

export default function ExperiencePage() {
  return (
    <main className="bg-dark-primary text-dark-primary">
      <section className="pt-20 pb-16 px-4 min-h-screen flex-col space-y-8 items-center">
        <ContainerLayout ClassName="max-w-6xl flex flex-col lg:flex-row-reverse items-center justify-between">
          <ContentSide hero={hero}></ContentSide>
          <ProfilImage Profil="torin_photo.JPG" />
        </ContainerLayout>

        <ContainerLayout ClassName="max-w-6xl flex flex-col lg:flex-row items-center justify-between">
          <ProfilImage Profil="torin_photo.JPG" />
          <div className="w-1/2">
            <ContentSide hero={hero}></ContentSide>
          </div>
        </ContainerLayout>
      </section>
    </main>
  );
}
