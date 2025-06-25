import ProfilImage from "@/components/organism/ProfilImage";
import { ContentSide } from "@/components/temp/HeroSection";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/organism/Tabs";
import { ContainerLayout } from "@/components/ui/LayoutSection";
import TabsOrganisation from "@/components/temp/TabsOrganisation";
import TabsCertification from "@/components/temp/TabsCertification";

const hero = {
  subtitle: "About Me",
  description:
    "Saya seorang Frontend Developer yang berpengalaman selama 5 tahun. Saya memiliki kemampuan dalam membuat antarmuka web yang modern dan responsif. Saya juga memiliki kemampuan dalam mengembangkan web application menggunakan teknologi React, Next.js, dan TypeScript.",
};

export default function AboutPage() {
  return (
    <main className="bg-dark-primary text-dark-primary">
      <section className="pt-20 pb-16 px-4 min-h-screen flex-col items-center">
        <ContainerLayout ClassName="max-w-6xl flex flex-col lg:flex-row-reverse items-center justify-between">
          <ContentSide hero={hero}></ContentSide>
          <ProfilImage Profil="torin_photo.JPG" />
        </ContainerLayout>

        <ContainerLayout ClassName="max-w-6xl mt-14 lg:mt-28">
          <Tabs defaultValue="organisation" className="w-full">
            <TabsList className="mx-auto bg-black border border-gray-800 p-1 rounded-lg">
              <TabsTrigger
                value="organisation"
                className="cursor-pointer text-gray-300 bg-transparent border-0 focus:outline-none hover:bg-gray-800 hover:text-white focus:ring-2 focus:ring-gray-600 font-medium rounded-md text-sm px-4 py-2 me-1 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold"
              >
                Organisation
              </TabsTrigger>
              <TabsTrigger
                value="certif"
                className=" cursor-pointer text-gray-300 bg-transparent border-0 focus:outline-none hover:bg-gray-800 hover:text-white focus:ring-2 focus:ring-gray-600 font-medium rounded-md text-sm px-4 py-2 ms-1 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold"
              >
                Certification
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="cursor-pointer text-gray-300 bg-transparent border-0 focus:outline-none hover:bg-gray-800 hover:text-white focus:ring-2 focus:ring-gray-600 font-medium rounded-md text-sm px-4 py-2 ms-1 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold"
              >
                My Skills
              </TabsTrigger>
            </TabsList>

            <ContainerLayout ClassName="w-full">
              <TabsContent value="organisation">
                <TabsOrganisation/>
              </TabsContent>
              <TabsContent value="certif">
                <TabsCertification/>
              </TabsContent>
              <TabsContent value="skills">
                This my  skills
              </TabsContent>
            </ContainerLayout>
          </Tabs>
        </ContainerLayout>
      </section>
    </main>
  );
}
