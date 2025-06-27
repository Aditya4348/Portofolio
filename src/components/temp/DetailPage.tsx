import Masonry from "../Masonry/Masonry";
import { ContainerLayout } from "../ui/LayoutSection";

interface DetailProps {
  tittle: string;
  description: string;
  mainImages: string;
  images: {
    id: string;
    img: string;
    url: string;
    height: number;
  }[];
}

export default function DetailPage({
  tittle,
  description,
  images,
  mainImages,
}: DetailProps) {
  return (
    <main className="bg-dark-primary text-dark-primary">
      {/* SECTION DENGAN BACKGROUND */}
      <section className="relative pt-20 pb-16 px-4 min-h-screen flex items-center justify-center">
        {/* Background + Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover blur-xs bg-center"
            style={{ backgroundImage: `url(${mainImages})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        {/* Konten di atas background */}
        <div className="relative z-10 w-full">
          <ContainerLayout ClassName="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              {tittle}
            </h1>
          </ContainerLayout>
        </div>
      </section>

      {/* SECTION SETELAH BACKGROUND */}
      <section className=" py-16 px-4">
        <ContainerLayout ClassName="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">Tentang {tittle}</h2>
          <p className="mt-4 text-gray-500 leading-relaxed">{description}</p>
        </ContainerLayout>
      </section>

      {/* SECTION GALLERY */}
      <section className="relative py-16 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Gallery</h1>
          <p className="text-gray-700 leading-relaxed">
            berikut adalah kumpulan dokumentasi foto dari {tittle}
          </p>
          <Masonry
            items={images} // pastikan items punya id, img, url, height
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </section>
    </main>
  );
}
