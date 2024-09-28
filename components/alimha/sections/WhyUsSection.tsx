"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const WhyUsSection = () => {
    const t = useTranslations("AlimhaPage.WhyUsSection");
    const pathname = usePathname();

    return (
        <section className="relative flex justify-between items-center bg-primary-blue w-full h-fit after:content-[''] after:absolute after:top-0 after:left-0 after:bg-why-us-bg-image after:bg-cover after:bg-center after:bg-no-repeat after:opacity-25 after:w-full after:h-full">
            <div className="bg-primary-blue/30 w-full h-full px-[5%] lg:px-[10%] py-10 md:py-20 z-10">
                <div className="flex flex-col items-center w-full gap-8 md:gap-14">
                    <div className="flex flex-col items-center w-full gap-5">
                        <span className="bg-tertiary text-secondary-blue text-sm min-[1280px]:text-base px-3 py-2 rounded-md">
                            {t("tag")}
                        </span>
                        <h2 className="font-bold text-white text-center text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug">
                            {t("heading")}
                        </h2>
                    </div>
                    <video
                        width="100%"
                        height="100%"
                        controls
                        autoPlay
                        preload="auto"
                        playsInline
                        className="rounded-xl"
                    >
                        <source src="/videos/alimha-global-reach-video.mp4" />
                        Votre navigateur ne supporte pas ce format de vidéo.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
