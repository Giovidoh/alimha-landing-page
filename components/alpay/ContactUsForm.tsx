"use client";
import React from "react";
import Input from "./Inputs/Input";
import TextArea from "./Inputs/Textarea";
import Button from "./buttons/Button";
import { toast } from "sonner";

const ContactUsForm = () => {
    async function handleSubmit(e: any) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "60ecd023-8099-406c-9f81-de02aa2abd14",
                name: e.target.name.value,
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.subject.value = "";
            e.target.message.value = "";
            toast.success("Votre message a été envoyé avec succès. Merci !");
        } else {
            toast.error(
                "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer s'il vous plaît."
            );
        }
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white w-full px-10 py-7 rounded-3xl shadow-2xl"
        >
            <div className="flex flex-col items-center justify-around h-[330px] sm:h-[482px]">
                <div className="flex flex-col sm:flex-row w-full gap-2">
                    <Input type="text" name="name" placeholder="Nom" />
                    <Input type="email" name="email" placeholder="Email" />
                </div>
                <Input type="text" name="subject" placeholder="Sujet" />
                <TextArea name="message" placeholder="Votre message" />
                <Button
                    text="Envoyer"
                    className="bg-primary-blue font-bold text-sm text-white w-1/2 py-3"
                />
            </div>
        </form>
    );
};

export default ContactUsForm;
