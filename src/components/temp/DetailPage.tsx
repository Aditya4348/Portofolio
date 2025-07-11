import { useParams } from "react-router-dom";
import Masonry from "../Masonry/Masonry";
import { ContainerLayout } from "../ui/LayoutSection";
import globalData from "@/data/globalData";

export default function DetailPage() {
  type DetailParams = {
    category: string;
    id: string;
  };

  const { category, id } = useParams<DetailParams>();

  const isValidCategory = (key: string): key is keyof typeof globalData => {
    return key in globalData;
  };

  if (!category || !isValidCategory(category)) {
    return <p>Kategori "{category}" tidak ditemukan.</p>;
  }

  const data = globalData[category];
  const item = data.find((items) => items.id === id);

  if (!item) {
    return <p>Proyek dengan ID "{id}" tidak ditemukan.</p>;
  }

  return (
    <main className="bg-dark-primary text-dark-primary">
      {/* SECTION DENGAN BACKGROUND */}
      <section className="relative pt-20 pb-16 px-4 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover blur-xs bg-center"
            style={{ backgroundImage: `url(${item.mainImage})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 w-full">
          <ContainerLayout ClassName="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              {item.title}
            </h1>
          </ContainerLayout>
        </div>
      </section>

      {/* SECTION DETAIL */}
      <section className="py-16 px-4">
        <ContainerLayout ClassName="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">Tentang {item.title}</h2>
          <p className="mt-4 text-gray-500 leading-relaxed">{item.description}</p>
        </ContainerLayout>
      </section>

      {/* SECTION GALLERY */}
      <section className="relative py-16 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Gallery</h1>
          <p className="text-gray-700 leading-relaxed">
            Berikut adalah kumpulan dokumentasi foto dari {item.title}
          </p>
          <Masonry
            items={item.images}
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
