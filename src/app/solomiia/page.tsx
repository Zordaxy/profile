import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solomiia",
  description: "",
  robots: { index: false, follow: false },
};

type Photo = { src: string; width: number; height: number };

const photos: Photo[] = [
  { src: "/solomiia/img_6347.jpg", width: 1800, height: 1350 },
  { src: "/solomiia/img_6480.jpg", width: 1800, height: 1350 },
  { src: "/solomiia/img_6558.jpg", width: 1800, height: 1350 },
  { src: "/solomiia/img_7347.jpg", width: 1800, height: 1350 },
  { src: "/solomiia/img_7387.jpg", width: 1800, height: 1350 },
  { src: "/solomiia/img_7447.jpg", width: 1800, height: 1350 },
  { src: "/solomiia/img_7728.jpg", width: 1350, height: 1800 },
  { src: "/solomiia/img_7758.jpg", width: 1350, height: 1800 },
  { src: "/solomiia/img_7915.jpg", width: 1350, height: 1800 },
  { src: "/solomiia/img_8061.jpg", width: 1800, height: 1350 },
  { src: "/solomiia/img_8071.jpg", width: 1350, height: 1800 },
];

// Hand-balanced row groupings so each row's aspect-ratio sum stays close
// (rows render at equal heights via flex-grow proportional to AR).
const rowGroups: number[][] = [
  [0, 1, 2],
  [3, 6, 7, 4],
  [8, 5, 10, 9],
];

export default function SolomiiaPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <header className="px-4 sm:px-6 lg:px-8 pt-8 pb-6 max-w-[1600px] mx-auto">
        <h1 className="font-serif text-2xl sm:text-3xl tracking-tight">
          Solomiia
        </h1>
      </header>

      <main className="px-2 sm:px-4 lg:px-6 pb-12 max-w-[1600px] mx-auto">
        {/* Mobile: single column */}
        <div className="md:hidden space-y-1">
          {photos.map((p) => (
            <div
              key={p.src}
              className="relative w-full bg-zinc-900"
              style={{ aspectRatio: `${p.width} / ${p.height}` }}
            >
              <Image
                src={p.src}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop: justified rows, all photos in a row share a height */}
        <div className="hidden md:flex md:flex-col gap-1">
          {rowGroups.map((indexes, rowIdx) => (
            <div key={rowIdx} className="flex gap-1">
              {indexes.map((i) => {
                const p = photos[i];
                const ar = p.width / p.height;
                return (
                  <div
                    key={p.src}
                    className="relative bg-zinc-900 overflow-hidden"
                    style={{
                      flex: ar,
                      aspectRatio: `${p.width} / ${p.height}`,
                    }}
                  >
                    <Image
                      src={p.src}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
