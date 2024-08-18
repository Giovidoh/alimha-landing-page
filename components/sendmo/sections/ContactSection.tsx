import React from "react";
import Badge from "../badges/Badge";
import LeftIconButton from "../buttons/LeftIconButton";
import SendIcon from "@/public/assets/send-icon.svg";

const ContactSection = () => {
    return (
        <section
            id="contact_section"
            className="flex justify-between items-center min-w-full px-20 min-[1120px]:px-40 mt-20"
        >
            <div className="relative bg-gray-50 w-full h-full px-10 min-[1120px]:px-20 pt-14 pb-14 rounded-md before:content-[''] before:absolute before:top-0 before:left-0 before:bg-sendmo-contact-bg before:bg-no-repeat before:bg-cover before:bg-center before:w-full before:h-full">
                <div className="relative flex flex-col min-[1200px]:flex-row justify-between items-center">
                    <div className="flex flex-col items-center min-[1200px]:items-start w-full min-[1200px]:w-3/4 gap-4">
                        <Badge text="Contact" />
                        <h1 className="font-semibold text-sm md:text-lg text-center min-[1200px]:text-start uppercase">
                            prêt à démarrer ?
                        </h1>
                        <p className="text-2xl md:text-3xl text-center min-[1200px]:text-start font-bold">
                            Pour toute question ou assistance,
                            <br /> contactez-nous.
                        </p>
                    </div>
                    <div className="mt-10 min-[1200px]:mt-20 ">
                        <LeftIconButton
                            icon={<SendIcon />}
                            text="Contactez-nous"
                            className="p-3 gap-2 font-semibold"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
