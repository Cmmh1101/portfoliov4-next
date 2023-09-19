import React, { useEffect } from "react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import Image from "next/image";
import classes from "./gallery.module.css";
import { ImageProps } from "@/components/interfaces/Project";
import Header from "../UI/Header";

const Gallery: React.FC<{images:ImageProps[]}> = ({images}) => {

  return (
    <section className="flex flex-col items-center mt-10 mb-20 w-full">
      <SlideshowLightbox
        lightboxIdentifier="lightbox1"
        theme="lightbox"
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-1 sm:gap-4 rounded-lg overflow-hidden"
        framework="next"
        images={images}
        showThumbnails={true}
        thumbnailBorder="silver"
        imgAnimation="fade"
      >
        {images?.map((image, i) => (
          <div key={i} className={`overflow-hidden rounded-full ${classes.imageContainer}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              data-lightboxjs="lightbox1"
              quality={80}
              className={` opacity-75 hover:opacity-100 transition hover:scale-110 ease-in-out duration-700 rounded-full ${classes.image}`}
            />
          </div>
        ))}
      </SlideshowLightbox>
    </section>
  );
};

export default Gallery;
