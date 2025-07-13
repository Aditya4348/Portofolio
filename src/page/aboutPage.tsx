import ProfilImage from "@/components/organism/ProfilImage";
import { ContentSide } from "@/components/temp/HeroSection";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/organism/Tabs";
import { ContainerLayout } from "@/components/ui/LayoutSection";
import TabsOrganisation from "@/components/organism/TabsOrganisation";
import TabsCertification from "@/components/organism/TabsCertification";
import { AboutMe } from "@/data/AboutMe";
import FadeInHook from "@/components/animations/FadeInHook";

export default function AboutPage() {
  const item = AboutMe;

  return (
    <main className="bg-dark-primary text-dark-primary">
      <section className="pt-20 pb-16 px-4 min-h-screen flex-col items-center">
        <FadeInHook>
          <ContainerLayout ClassName="max-w-6xl flex flex-col lg:flex-row-reverse items-center justify-between">
            <ContentSide hero={item}></ContentSide>
            <ProfilImage Profil="Aditya.jpg" />
          </ContainerLayout>
        </FadeInHook>

        <ContainerLayout ClassName="max-w-6xl mt-14 lg:mt-28">
          <Tabs defaultValue="organisation" className="w-full">
            <TabsList className="mx-auto bg-black border border-gray-800 p-1 space-x-3 rounded-lg">
              <TabsTrigger
                value="organisation"
                className="cursor-pointer text-gray-300 bg-transparent border-0 focus:outline-none hover:bg-gray-800 hover:text-white focus:ring-2 focus:ring-gray-600 font-medium rounded-md text-sm px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold"
              >
                Organisation
              </TabsTrigger>
              <TabsTrigger
                value="certif"
                className=" cursor-pointer text-gray-300 bg-transparent border-0 focus:outline-none hover:bg-gray-800 hover:text-white focus:ring-2 focus:ring-gray-600 font-medium rounded-md text-sm px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold"
              >
                Certification
              </TabsTrigger>
            </TabsList>

            <ContainerLayout ClassName="w-full">
              <TabsContent value="organisation">
                <TabsOrganisation />
              </TabsContent>
              <TabsContent value="certif">
                <TabsCertification />
              </TabsContent>
            </ContainerLayout>
          </Tabs>
        </ContainerLayout>
      </section>
    </main>
  );
}
