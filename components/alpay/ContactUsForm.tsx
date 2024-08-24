import React from "react";
import Input from "./Inputs/Input";
import TextArea from "./Inputs/Textarea";
import Button from "./buttons/Button";

const ContactUsForm = () => {
    return (
        <form
            action=""
            className="bg-white w-full px-10 py-7 items-center rounded-3xl shadow-2xl"
        >
            <div className="flex flex-col items-center justify-around h-[330px] sm:h-[482px]">
                <div className="flex w-full gap-2">
                    <Input type="text" placeholder="Nom" />
                    <Input type="email" placeholder="Email" />
                </div>
                <Input type="text" placeholder="Sujet" />
                <TextArea placeholder="Votre message" />
                <Button
                    text="Envoyer"
                    className="bg-primary-blue font-bold text-sm text-white w-1/2 py-3"
                />
            </div>
        </form>
    );
};

export default ContactUsForm;
