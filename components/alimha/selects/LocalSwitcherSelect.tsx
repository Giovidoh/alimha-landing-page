"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useTransition } from "react";
import { ChangeEvent } from "react";
import { useLocale } from "next-intl";

const LocalSwitcherSelect = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => router.replace(`/${nextLocale}/alimha`));
    };
    return (
        <select
            defaultValue={localActive}
            className="p-3 outline-none border-[2px] border-primary-blue rounded-full font-semibold text-xs cursor-pointer"
            onChange={onSelectChange}
            disabled={isPending}
        >
            <option value="en" className="font-semibold">
                EN
            </option>
            <option value="fr" className="font-semibold">
                FR
            </option>
        </select>
    );
};

export default LocalSwitcherSelect;
