import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import senegalImg from "@/public/assets/senegal.png";
import togoImg from "@/public/assets/togo.png";
import guineeImg from "@/public/assets/guinee.png";
import djiboutiImg from "@/public/assets/djibouti.png";
import republiqueCentrafricaineImg from "@/public/assets/republique-centrafricaine.png";

interface ImagesCollectionsProps {
    images: { src: StaticImageData; alt: string }[];
}

const ImagesCollections: FC<ImagesCollectionsProps> = ({ images }) => {
    return (
        <div className="flex items-center w-fit p-3 gap-3 bg-white rounded-lg shadow-lg">
            {images.map((image, index) => (
                <Image
                    src={image.src}
                    alt={image.alt}
                    key={index}
                    height={30}
                />
            ))}
        </div>
    );
};

export default ImagesCollections;
