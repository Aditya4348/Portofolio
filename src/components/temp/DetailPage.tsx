import Masonry from "../Masonry/Masonry";
import { ContainerLayout } from "../ui/LayoutSection";



export default function DetailPage() {

    const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    // ... more items
];


  return (
    <main className="bg-dark-primary text-dark-primary">
      {/* SECTION DENGAN BACKGROUND */}
      <section className="relative pt-20 pb-16 px-4 min-h-screen flex items-center justify-center">
        {/* Background + Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover blur-xs bg-center"
            style={{ backgroundImage: "url('/assets/projects/default.jpeg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        {/* Konten di atas background */}
        <div className="relative z-10 w-full">
          <ContainerLayout ClassName="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              Detail Page
            </h1>
            <p className="text-gray-200 mt-4 text-lg">
              Deskripsi singkat tentang proyek yang dipilih
            </p>
          </ContainerLayout>
        </div>
      </section>

      {/* SECTION SETELAH BACKGROUND */}
      <section className=" py-16 px-4">
        <ContainerLayout ClassName="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">Detail</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Ini adalah bagian lanjutan setelah background — bisa diisi deskripsi
            proyek lebih panjang, fitur, teknologi yang digunakan, dll.
          </p>
        </ContainerLayout>
      </section>

      {/* SECTION GALLERY */}
      <section className="py-16 px-4">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </section>
    </main>
  );
}
