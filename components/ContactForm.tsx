import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import ButtonGradientStyle1 from "./ButtonGradientStyle1";

const ContactForm = () => {
    return (
        <form
            action=""
            className="bg-white px-10 py-7 items-center rounded-3xl z-10"
        >
            <div className="flex flex-col items-center justify-around h-[330px] sm:h-[482px]">
                <Input type="text" placeholder="Nom" />
                <Input type="email" placeholder="Email" />
                <TextArea placeholder="Votre message" />
                <ButtonGradientStyle1 text="Envoyer" />
            </div>
        </form>
    );
};

export default ContactForm;
