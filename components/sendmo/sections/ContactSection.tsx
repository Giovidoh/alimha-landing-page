import React from "react";
import Badge from "../badges/Badge";
import LeftIconButton from "../buttons/LeftIconButton";
import SendIcon from "@/public/assets/send-icon.svg";

const ContactSection = () => {
    return (
        <section className="flex justify-between items-center px-40 mt-20">
            <div className="relative bg-gray-50 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-sendmo-contact-bg before:bg-no-repeat before:bg-cover before:bg-center before:w-full before:h-full w-full h-full px-20 pt-14 pb-14 rounded-md">
                <div className="relative flex justify-between items-center">
                    <div className="flex flex-col items-start w-3/4 gap-4">
                        <Badge text="Contact" />
                        <h1 className="font-semibold text-lg uppercase">
                            prêt à démarrer ?
                        </h1>
                        <p className="text-3xl font-bold">
                            Pour toute question ou assistance,
                            <br /> contactez-nous.
                        </p>
                    </div>
                    <div>
                        <LeftIconButton
                            icon={<SendIcon />}
                            text="Contactez-nous"
                            className="mt-20 p-3 gap-2"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
