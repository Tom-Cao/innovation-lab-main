"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/dsc00201.jpg",
    alt: "Workshop tools and precision drill bits for prototype assembly",
    span: "col-span-1",
  },
  {
    src: "/images/dsc00214.jpg",
    alt: "3D CAD design of sensor housing on laptop",
    span: "col-span-1",
  },
  {
    src: "/images/dsc00223.jpg",
    alt: "Laptop showing 3D model alongside physical prototype",
    span: "col-span-1",
  },
  {
    src: "/images/dscf9235.jpg",
    alt: "Free-range chickens in agricultural setting",
    span: "col-span-1 md:col-span-2",
  },
  {
    src: "/images/dsc00224.jpg",
    alt: "CAD design and prototype comparison view",
    span: "col-span-1",
  },
  {
    src: "/images/img_2214.jpg",
    alt: "3D-printed sensor housing component",
    span: "col-span-1",
  },
  {
    src: "/images/img_2215.jpg",
    alt: "3D-printed mounting clamp for sensor deployment",
    span: "col-span-1",
  },
  {
    src: "/images/img_2216.jpg",
    alt: "Rugged yellow Pelican case for field sensor housing",
    span: "col-span-1",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-shell section-muted" ref={ref}>
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="kicker">Gallery</span>
          <h2 className="section-title">Behind the build process.</h2>
          <p className="section-copy mx-auto max-w-2xl">
            A quick look at prototyping, assembly, and in-field deployment.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className={`group relative overflow-hidden rounded-xl ${image.span}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes={
                    image.span.includes("md:col-span-2")
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-xs leading-relaxed text-white/90">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
