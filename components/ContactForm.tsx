import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import ButtonGradientStyle1 from "./ButtonGradientStyle1";

const ContactForm = () => {
    return (
        <form
            action=""
            className="bg-white px-10 py-7 w-fit items-center rounded-3xl"
        >
            <div className="flex flex-col items-center justify-between h-[482px]">
                <Input type="text" placeholder="Nom" />
                <Input type="email" placeholder="Email" />
                <TextArea />
                <ButtonGradientStyle1 text="Envoyer" />
            </div>
        </form>
    );
};

export default ContactForm;
