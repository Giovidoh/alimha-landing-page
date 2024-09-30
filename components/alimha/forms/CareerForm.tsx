"use client";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormDescription,
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
import { useTranslations } from "next-intl";

const formSchema = z.object({
    cv: z.instanceof(File, { message: "Veuillez téléverser votre CV" }).refine(
        (file) => {
            const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
            return allowedTypes.includes(file.type);
        },
        { message: "Le fichier doit être de type PNG, JPG, JPEG ou PDF" }
    ),
    coverLetter: z
        .instanceof(File, {
            message: "Veuillez téléverser votre lettre de motivation",
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
            { message: "Le fichier doit être de type PNG, JPG, JPEG ou PDF" }
        ),
    job: z
        .string()
        .min(1, { message: "Veuillez sélectionner l'emploi souhaité." }),
    country: z
        .string()
        .min(1, { message: "Veuillez sélectionner votre pays de résidence." }),
});

type FormSchema = z.infer<typeof formSchema>;

const CareerForm = () => {
    const t = useTranslations("AlimhaPage.CareerPage.career form");
    const [job, setJob] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cv: undefined,
            coverLetter: undefined,
            job: "",
            country: "",
        },
    });

    const onSubmit = (values: FormSchema) => {
        console.log(values);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4 pb-5"
            >
                <FormField
                    control={form.control}
                    name="cv"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold text-[#333333] text-sm lg:text-base min-[1200px]:text-lg">
                                {t("your cv")}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept=".png, .jpg, .jpeg, .pdf"
                                    className="bg-[#F8FAFC] border border-[#EDEDED] text-base w-1/2 h-12 pt-3 rounded-lg outline-none cursor-pointer"
                                    onChange={(e) => {
                                        field.onChange(e.target.files?.[0]); // Gérer la sélection du fichier
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
                                {t("cover letter")}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept=".png, .jpg, .jpeg, .pdf"
                                    className="bg-[#F8FAFC] border border-[#EDEDED] text-base w-1/2 h-12 pt-3 rounded-lg outline-none cursor-pointer"
                                    onChange={(e) => {
                                        field.onChange(e.target.files?.[0]); // Gérer la sélection du fichier
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
                                    {t("job")}
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
                                                placeholder={t("job")}
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
                                    {t("country")}
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
                                                placeholder={t("country")}
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
                <div className="mt-4">
                    <ButtonGradientStyle1
                        fromColor="from-primary-blue"
                        toColor="to-primary-blue"
                        text={t("send")}
                        width="w-full"
                    />
                </div>
            </form>
        </Form>
    );
};

export default CareerForm;
