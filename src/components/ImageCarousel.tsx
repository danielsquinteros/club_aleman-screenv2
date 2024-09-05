import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Opción para usar animaciones suaves

const ImageCarousel = ({ images, interval = 5000 }: { images: {src: string, alt: string}[], interval? :number}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(imageInterval); // Limpiar intervalo al desmontar
  }, [images.length, interval]);

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden"}}>
      {images.map(({src, alt}, index) => (
        <motion.img
          key={index}
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: currentImageIndex === index ? "block" : "none",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
