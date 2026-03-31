// import { useState } from "react";
// import { X } from "lucide-react";
// import gallery1 from "@/assets/gallery1.webp";
// import gallery2 from "@/assets/gallery2.webp";
// import gallery3 from "@/assets/gallery3.webp";
// import gallery4 from "@/assets/gallery4.webp";
// import gallery5 from "@/assets/gallery5.webp";
// import gallery6 from "@/assets/gallery6.webp";

// const images = [
//   { src: gallery1, alt: "Art class" },
//   { src: gallery2, alt: "Playground fun" },
//   { src: gallery3, alt: "Reading corner" },
//   { src: gallery4, alt: "Science exploration" },
//   { src: gallery5, alt: "Music and dance" },
//   { src: gallery6, alt: "Graduation day" },
// ];

// const GallerySection = () => {
//   const [selected, setSelected] = useState<string | null>(null);

//   return (
//     <section id="gallery" className="section-padding">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="section-title text-foreground">
//           Our <span className="text-primary">Gallery</span> 📸
//         </h2>
//         <p className="section-subtitle">
//           A glimpse into the colorful world of Little Stars — where every day is an adventure!
//         </p>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {images.map((img, i) => (
//             <button
//               key={i}
//               onClick={() => setSelected(img.src)}
//               className="rounded-2xl overflow-hidden hover-lift focus:outline-none focus:ring-2 focus:ring-primary"
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 loading="lazy"
//                 width={800}
//                 height={640}
//                 className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
//               />
//             </button>
//           ))}
//         </div>

//         {/* Video */}
//         <div className="mt-12">
//           <h3 className="font-heading font-bold text-2xl text-center mb-6 text-foreground">
//             Watch Us in Action 🎬
//           </h3>
//           <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-lg aspect-video">
//             <iframe
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//               title="Sanskriti Kindergarten Video"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Lightbox */}
//       {selected && (
//         <div
//           className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
//           onClick={() => setSelected(null)}
//         >
//           <button
//             className="absolute top-4 right-4 p-2 rounded-full bg-card text-foreground hover:bg-muted"
//             onClick={() => setSelected(null)}
//             aria-label="Close"
//           >
//             <X size={24} />
//           </button>
//           <img
//             src={selected}
//             alt="Gallery preview"
//             className="max-w-full max-h-[90vh] rounded-2xl object-contain"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </section>
//   );
// };

// export default GallerySection;
import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery1.webp";
import gallery2 from "@/assets/gallery2.webp";
import gallery3 from "@/assets/gallery3.webp";
import gallery4 from "@/assets/gallery4.webp";
import gallery5 from "@/assets/gallery5.webp";
import gallery6 from "@/assets/gallery6.webp";

const images = [
  { src: gallery1, alt: "Art class" },
  { src: gallery2, alt: "Playground fun" },
  { src: gallery3, alt: "Reading corner" },
  { src: gallery4, alt: "Science exploration" },
  { src: gallery5, alt: "Music and dance" },
  { src: gallery6, alt: "Graduation day" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="section-title text-foreground">
          Our <span className="text-primary">Gallery</span> 📸
        </h2>

        <p className="section-subtitle">
          A glimpse into the colorful world of Sanskriti — where every day is an adventure!
        </p>

        {/* 🔥 Tabs */}
        {/* <div className="flex justify-center gap-4 mt-6 mb-8">
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "photos"
                ? "bg-primary text-white"
                : "bg-muted text-foreground hover:bg-primary/20"
            }`}
          >
            Photos 📸
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "videos"
                ? "bg-primary text-white"
                : "bg-muted text-foreground hover:bg-primary/20"
            }`}
          >
            Videos 🎬
          </button>
        </div> */}
        <div className="flex justify-center mt-8 mb-10">
          <div className="bg-muted p-1.5 rounded-full flex gap-2 shadow-inner">

            {/* Photos */}
            <button
              onClick={() => setActiveTab("photos")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
        ${activeTab === "photos"
                  ? "bg-primary text-white shadow-md scale-105"
                  : "text-foreground hover:bg-primary/10"
                }`}
            >
              📸 <span>Photos</span>
            </button>

            {/* Videos */}
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
        ${activeTab === "videos"
                  ? "bg-primary text-white shadow-md scale-105"
                  : "text-foreground hover:bg-primary/10"
                }`}
            >
              🎬 <span>Videos</span>
            </button>

          </div>
        </div>

        {/* ✅ PHOTOS */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(img.src)}
                className="rounded-2xl overflow-hidden hover-lift focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
            ))}
          </div>
        )}

        {/* ✅ VIDEOS */}
        {activeTab === "videos" && (
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-video">
              <iframe
                src="https://www.youtube.com/embed/NEcdQ7j8olI?si=0GY7vj-P_QFEzlk4"
                title="Kindergarten Video 1"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg aspect-video">
              <iframe
                src="https://www.youtube.com/embed/a_YT7TK9fcs?si=QYwClXQOTIwa8G5D"
                title="Kindergarten Video 2"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}

      </div>

      {/* 🔍 Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-card text-foreground hover:bg-muted"
            onClick={() => setSelected(null)}
          >
            <X size={24} />
          </button>

          <img
            src={selected}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
