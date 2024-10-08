"use client";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import ButtonGradientStyle1 from "../buttons/ButtonGradientStyle1";
import { useLocale, useTranslations } from "next-intl";

import { toast } from "sonner";

const CareerForm = () => {
    const localActive = useLocale();
    const t = useTranslations("AlimhaPage.CareerPage.career form");
    const [job, setJob] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    // ZOD Schema
    const formSchema = z.object({
        cv: z.instanceof(File, { message: t("field1 error message") }).refine(
            (file) => {
                const allowedTypes = [
                    "image/png",
                    "image/jpeg",
                    "application/pdf",
                ];
                return allowedTypes.includes(file.type);
            },
            { message: t("field1 error message2") }
        ),
        coverLetter: z
            .instanceof(File, {
                message: t("field2 error message"),
            })
            .refine(
                (file) => {
                    const allowedTypes = [
                        "image/png",
                        "image/jpeg",
                        "application/pdf",
                    ];
                    return allowedTypes.includes(file.type);
                },
                { message: t("field2 error message2") }
            ),
        job: z.string().min(1, { message: t("field3 error message") }),
        country: z.string().min(1, { message: t("field4 error message") }),
    });

    type FormSchema = z.infer<typeof formSchema>;
    // End ZOD Schema

    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cv: undefined,
            coverLetter: undefined,
            job: "",
            country: "",
        },
    });

    const onSubmit = async (values: FormSchema, e: any) => {
        e.preventDefault();

        const formData = new FormData();

        // Append form data fields
        formData.append("cv", values.cv as Blob);
        formData.append("coverLetter", values.coverLetter as Blob);
        formData.append("job", values.job);
        formData.append("country", values.country);

        const careerForm = document.getElementById(
            "career-form"
        ) as HTMLFormElement;

        // Checking captcha
        const hCaptcha = (
            careerForm.querySelector(
                "textarea[name=h-captcha-response]"
            ) as HTMLTextAreaElement
        )?.value;

        if (!hCaptcha) {
            toast.error(`${t("captcha error message")}`);
            return;
        }

        formData.append("h-captcha-response", hCaptcha);

        // Send the form data
        const response = await fetch(`/${localActive}/api/career-form-email`, {
            method: "POST",
            body: formData, // Use FormData
        });

        if (response.ok) {
            form.reset(); // Clear form on success
            toast.success("Votre message a été envoyé avec succès. Merci !");
        } else {
            toast.error(
                "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer s'il vous plaît."
            );
        }
    };

    return (
        <Form {...form}>
            <form
                id="career-form"
                method="POST"
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4 pb-5"
            >
                <FormField
                    control={form.control}
                    name="cv"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-[#333333] text-sm lg:text-base min-[1200px]:text-lg">
                                {t("field1")}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept=".png, .jpg, .jpeg, .pdf"
                                    className="bg-[#F8FAFC] border border-[#EDEDED] text-base w-1/2 h-12 pt-3 rounded-lg outline-none cursor-pointer"
                                    onChange={(e) => {
                                        field.onChange(e.target.files?.[0]); // Handle file selection
                                    }}
                                />
                            </FormControl>
                            <FormMessage className="text-xs lg:text-sm tracking-wide" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="coverLetter"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-[#333333] text-sm lg:text-base min-[1200px]:text-lg">
                                {t("field2")}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept=".png, .jpg, .jpeg, .pdf"
                                    className="bg-[#F8FAFC] border border-[#EDEDED] text-base w-1/2 h-12 pt-3 rounded-lg outline-none cursor-pointer"
                                    onChange={(e) => {
                                        field.onChange(e.target.files?.[0]); // Handle file selection
                                    }}
                                />
                            </FormControl>
                            <FormMessage className="text-xs lg:text-sm tracking-wide" />
                        </FormItem>
                    )}
                />
                <div className="flex w-full gap-3">
                    <FormField
                        control={form.control}
                        name="job"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="font-semibold text-[#333333] text-sm lg:text-base min-[1200px]:text-lg">
                                    {t("field3")}
                                </FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(selectedJob) => {
                                            setJob(selectedJob);
                                            field.onChange(selectedJob);
                                        }}
                                    >
                                        <SelectTrigger className="bg-[#F8FAFC] text-xs lg:text-base text-[#333333] border border-[#EDEDED] w-full p-5 md:p-6 rounded-lg outline-none">
                                            <SelectValue
                                                placeholder={t("field3")}
                                            />
                                        </SelectTrigger>
                                        <SelectContent className="text-xs lg:text-base">
                                            <SelectItem value="Développeur">
                                                {t("jobs.job1")}
                                            </SelectItem>
                                            <SelectItem value="Ingénieur Réseaux">
                                                {t("jobs.job2")}
                                            </SelectItem>
                                            <SelectItem value="Comptable">
                                                {t("jobs.job3")}
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage className="text-xs lg:text-sm tracking-wide" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="font-semibold text-[#333333] text-sm lg:text-base min-[1200px]:text-lg">
                                    {t("field4")}
                                </FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(selectedCountry) => {
                                            setCountry(selectedCountry);
                                            field.onChange(selectedCountry);
                                        }}
                                    >
                                        <SelectTrigger className="bg-[#F8FAFC] text-xs lg:text-base text-[#333333] border border-[#EDEDED] w-full p-5 md:p-6 rounded-lg outline-none">
                                            <SelectValue
                                                placeholder={t("field4")}
                                            />
                                        </SelectTrigger>
                                        <SelectContent className="text-xs lg:text-base">
                                            <SelectItem value="Guinée">
                                                {t("countries.country1")}
                                            </SelectItem>
                                            <SelectItem value="Sénégal">
                                                {t("countries.country2")}
                                            </SelectItem>
                                            <SelectItem value="Togo">
                                                {t("countries.country3")}
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage className="text-xs lg:text-sm tracking-wide" />
                            </FormItem>
                        )}
                    />
                </div>

                {/* hCaptcha */}
                <div
                    className="h-captcha mt-2"
                    data-captcha="true"
                    data-lang={localActive}
                ></div>

                <div className="mt-4">
                    <ButtonGradientStyle1
                        fromColor="from-primary-blue"
                        toColor="to-primary-blue"
                        text={t("send")}
                        width="w-full"
                    />
                </div>
            </form>
            <script
                src="https://web3forms.com/client/script.js"
                async
                defer
            ></script>
        </Form>
    );
};

export default CareerForm;
