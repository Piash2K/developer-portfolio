"use client";

import blogWebsite1 from "@/app/assets/project-image/BlogWebsite1 (1).png";
import blogWebsite2 from "@/app/assets/project-image/BlogWebsite2.png";
import blogWebsite3 from "@/app/assets/project-image/BlogWebsite3.png";
import blogWebsite4 from "@/app/assets/project-image/BlogWebsite4.png";
import chillGamer1 from "@/app/assets/project-image/ChillGamer1.png";
import chillGamer2 from "@/app/assets/project-image/ChillGamer2.png";
import chillGamer3 from "@/app/assets/project-image/ChillGamer3.png";
import chillGamer4 from "@/app/assets/project-image/ChillGamer4.png";
import estateEase1 from "@/app/assets/project-image/EstateEase1.png";
import estateEase2 from "@/app/assets/project-image/EstateEase2.png";
import estateEase3 from "@/app/assets/project-image/EstateEase3.png";
import estateEase4 from "@/app/assets/project-image/EstateEase4.png";
import mediStore1 from "@/app/assets/project-image/MediStore1.png";
import mediStore2 from "@/app/assets/project-image/MediStore2.png";
import mediStore3 from "@/app/assets/project-image/MediStore3.png";
import mediStore4 from "@/app/assets/project-image/MediStore4.png";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type ProjectImageSliderProps = {
  slug: string;
  projectName: string;
  fallbackImage: string | { src: string };
};

const galleryBySlug: Record<string, StaticImageData[]> = {
  medistore: [mediStore1, mediStore2, mediStore3, mediStore4],
  estateease: [estateEase1, estateEase2, estateEase3, estateEase4],
  "blog-website": [blogWebsite1, blogWebsite2, blogWebsite3, blogWebsite4],
  "chill-gamer": [chillGamer1, chillGamer2, chillGamer3, chillGamer4],
};

function ProjectImageSlider({ slug, projectName, fallbackImage }: ProjectImageSliderProps) {
  const images: Array<string | StaticImageData> = galleryBySlug[slug] ?? [fallbackImage];
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="relative aspect-16/10 overflow-hidden rounded-xl border border-[#25213b] bg-[#0b1022] lg:aspect-video">
        <Image
          src={images[activeIndex]}
          alt={`${projectName} screenshot ${activeIndex + 1}`}
          fill
          className="object-contain "
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[#3a3f72] bg-[#0f1329]/80 p-2 text-white backdrop-blur-sm transition hover:border-violet-400"
              aria-label="Previous image"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[#3a3f72] bg-[#0f1329]/80 p-2 text-white backdrop-blur-sm transition hover:border-violet-400"
              aria-label="Next image"
            >
              <FiChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-[#16f2b3]" : "w-2.5 bg-slate-500/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectImageSlider;
