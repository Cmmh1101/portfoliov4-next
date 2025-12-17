import React, { useEffect } from "react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import Image from "next/image";
import classes from "./gallery.module.css";
import { ImageProps } from "@/components/interfaces/Project";

const Gallery: React.FC<{images:ImageProps[]}> = ({images}) => {

  return (
    <section className="flex flex-col justify-center items-center mt-10 mb-20 w-full">
      <SlideshowLightbox
        lightboxIdentifier="lightbox1"
        theme="lightbox"
        // className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-1 sm:gap-4 rounded-lg overflow-hidden"
        className="flex flex-wrap justify-center rounded-lg overflow-hidden"
        framework="next"
        images={images}
        showThumbnails={true}
        thumbnailBorder="silver"
        imgAnimation="fade"
      >
        {images?.map((image, i) => (
          <div key={i} className={`overflow-hidden rounded-full mx-5 mb-5 ${classes.imageContainer}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              data-lightboxjs="lightbox1"
              quality={80}
              placeholder="blur"
              blurDataURL={image.src}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={` opacity-75 hover:opacity-100 transition hover:scale-110 ease-in-out duration-700 rounded-full ${classes.image}`}
            />
          </div>
        ))}
      </SlideshowLightbox>
      <p className="mt-10">Hover to preview. Click to enlarge images</p>
    </section>
  );
};

export default Gallery;
