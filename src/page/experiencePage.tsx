import ProfilImage from "@/components/organism/ProfilImage";
import { ContentSide } from "@/components/temp/HeroSection";
import { ContainerLayout } from "@/components/ui/LayoutSection";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="bg-dark-primary text-dark-primary">
      <section className="pt-20 pb-16 px-4 min-h-screen flex-col space-y-8 items-center">
        
        {/**
         * mapping untuk menampilkan experience dimana setiap kelipatan genap menampilkan experience yang berada di kiri sedangkan kelipatan ganjil berada di kanan
         * */}
        {(experience.jobs || []).map((jobs, index) =>
          index % 2 === 0 ? (
            <ContainerLayout
              key={index}
              ClassName="max-w-6xl flex flex-col lg:flex-row-reverse items-center justify-between"
            >
              <ContentSide hero={jobs}></ContentSide>
              <ProfilImage Profil="torin_photo.JPG" />
            </ContainerLayout>
          ) : (
            <ContainerLayout key={index} ClassName="max-w-6xl flex flex-col lg:flex-row items-center justify-between">
              <ProfilImage Profil="torin_photo.JPG" />
              <div className="w-1/2">
                <ContentSide hero={jobs}></ContentSide>
              </div>
            </ContainerLayout>
          )
        )}

      </section>
    </main>
  );
}
