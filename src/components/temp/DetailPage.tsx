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

  const mapping = item.images.map((image) => ({
    id: image.id,
    img: image.img,
    url: image.url,
    height: image.height,
  }));

  return (
    <main className="bg-dark-primary text-dark-primary">
      {/* SECTION DENGAN BACKGROUND */}
      <section className="relative pt-20 pb-16 px-4 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover blur-xs bg-center"
            style={{ backgroundImage: `url(../../assets/${item.mainImage})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 w-full">
          <ContainerLayout ClassName="max-w-6xl mx-auto text-center">
            <h1 className="text-white text-4xl font-bold stroke-text mt-4">
              {item.title}
            </h1>
          </ContainerLayout>
        </div>
      </section>

      {/* SECTION DETAIL */}
      <section className="py-16 px-4">
        <ContainerLayout ClassName="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">About {item.title}</h2>
          <p className="mt-4 text-gray-500 leading-relaxed">{item.detaildescription}</p>
        </ContainerLayout>
      </section>

      {/* SECTION GALLERY */}
      {mapping.length === 0 ? (
        <section className="relative py-16 px-4 min-h-screen">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-gray-500 dark:text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14V6h-4v2h2v4h2v2h-2v4h-4V8H8v4z"
                />
              </svg>
              <p className="text-xl text-gray-700 dark:text-gray-400 text-center">
                There is no data available to be displayed. Please try again later.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="relative py-16 px-4 min-h-screen">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Gallery</h1>
            <p className="text-gray-700 leading-relaxed mb-3">
              The following is a collection of photo documentation from {item.title}
            </p>
            <Masonry
              items={mapping}
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
      )}
    </main>
  );
}
