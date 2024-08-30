import Image from "next/image";
import React from "react";
import ContactForm from "../ContactForm";
import Map from "../Map";
import plus3 from "@/public/assets/plus-vector-3.png";
import circle_vector5 from "@/public/assets/circle-vector-5.png";
import line_vector3 from "@/public/assets/line-vector3.png";
import { useTranslations } from "next-intl";

const ContactUsSection = () => {
    const t = useTranslations("AlimhaPage");
    return (
        <section
            id="contact"
            className="relative flex flex-col justify-evenly items-center text-center px-[5%] lg:px-[10%] bg-[#F1F6FF] h-fit w-full pt-20 pb-32"
        >
            <Image
                src={plus3}
                alt="plus icon"
                height={20}
                className="absolute top-40 left-80"
            />
            <Image
                src={circle_vector5}
                alt="circle icon"
                height={35}
                className="absolute bottom-36 right-20"
            />
            <Image
                src={line_vector3}
                alt="line vector"
                height={800}
                className="absolute -bottom-40 right-0"
            />

            <div className="mb-6">
                <h1 className="font-bold text-[32px] xl:text-[44px] leading-[40px] xl:leading-[52.6px] pb-5">
                    {t("Contact us")}
                </h1>
                <p className="text-xl text-gray-1 font-medium pb-4">
                    {t("Let's discuss your project")}
                </p>
            </div>
            <div className="grid  lg:grid-cols-2 gap-5 w-full">
                {/* ADD A MAP HERE */}
                <Map />
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactUsSection;
