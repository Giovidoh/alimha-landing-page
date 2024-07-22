import React from "react";
import ContactForm from "../ContactForm";

const ContactUsSection = () => {
    return (
        <section className="flex flex-col justify-evenly items-center text-center px-[10%] bg-[#F1F6FF] h-fit w-full pt-20 pb-32">
            <div className="mb-6">
                <h1 className="font-bold text-[44px] leading-[52.6px] pb-5">
                    Contactez-nous
                </h1>
                <p className="text-xl text-gray-1 font-medium pb-4">
                    Discutons de votre projet
                </p>
            </div>
            <div className="flex justify-between items-center">
                {/* ADD A MAP HERE */}

                <ContactForm />
            </div>
        </section>
    );
};

export default ContactUsSection;
