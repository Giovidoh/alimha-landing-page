import React from "react";
import ContactUsForm from "../ContactUsForm";
import IconTextCard2 from "../cards/IconTextCard2";
import PhoneIcon from "@/public/assets/phone-icon.svg";
import MessageIcon from "@/public/assets/message-icon.svg";
import AddressIcon from "@/public/assets/address-icon.svg";

const ContactUsSection = () => {
    return (
        <section className="flex flex-col items-center bg-tertiary w-full h-fit pt-20 pb-14 px-5 sm:px-20 min-[1120px]:px-40 gap-5">
            <span className="font-medium text-lg text-primary-blue">
                Contactez-Nous
            </span>

            <h1 className="font-bold text-center text-4xl w-full md:w-1/2 mb-8">
                Transformer Votre Gestion des Paiements
            </h1>

            <ContactUsForm />

            <div className="grid grid-cols-3 w-full gap-3">
                <div className="w-full">
                    <IconTextCard2
                        icon={<PhoneIcon />}
                        title="Contactez-nous :"
                        body="+123 456 7890"
                    />
                </div>
                <div className="w-full">
                    <IconTextCard2
                        icon={<MessageIcon />}
                        title="Email :"
                        body="info@alpay.com"
                    />
                </div>
                <div className="w-full">
                    <IconTextCard2
                        icon={<AddressIcon />}
                        title="Adresse :"
                        body="Medina Rue 4, Dakar-Sénégal"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;
