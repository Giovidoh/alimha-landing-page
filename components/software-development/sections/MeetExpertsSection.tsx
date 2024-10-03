import { useTranslations } from "next-intl";
import React from "react";
import Button1 from "../buttons/Button1";
import TeamMemberCard from "../cards/TeamMemberCard";
import avatar1 from "@/public/assets/avatar-1.png";
import avatar2 from "@/public/assets/avatar-2.png";
import avatar3 from "@/public/assets/avatar-3.png";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const MeetExpertsSection = () => {
    const t = useTranslations("SoftwareDevelopmentPage.MeetExpertsSection");

    return (
        <section className="px-[5%] min-[1200px]:px-[10%] pt-10 pb-16 min-[950px]:pt-16 min-[950px]:pb-28">
            <div className="flex flex-col min-[950px]:flex-row justify-between items-center gap-16">
                <div className="flex flex-col items-center min-[950px]:items-start bg-white bg-opacity-80 min-[950px]:bg-transparent w-full min-[950px]:w-1/2 gap-3 min-[1280px]:gap-5 py-10 px-2 min-[950px]:px-0 rounded-2xl shadow-2xl shadow-white min-[950px]:shadow-none z-10">
                    <span className="bg-tertiary text-secondary-blue text-sm min-[1200px]:text-base px-3 py-2 rounded-md">
                        {t("tag")}
                    </span>
                    <h1 className="font-bold text-2xl lg:text-3xl min-[1200px]:text-4xl text-center min-[950px]:text-start leading-tight min-[1200px]:leading-snug min-[950px]:whitespace-nowrap">
                        {t.rich("heading", {
                            span: (chunks) => (
                                <span className="text-primary-blue">
                                    {chunks}
                                </span>
                            ),
                            br: () => <br />,
                        })}
                    </h1>
                    <p className="text-[#1E1E1E] text-center min-[950px]:text-justify text-sm lg:text-base min-[1200px]:text-lg tracking-wide">
                        {t("subheading")}
                    </p>
                    <div>
                        <Button1 text={t("cta text")} />
                    </div>
                </div>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="basis-1/3">
                            <TeamMemberCard
                                image={avatar1}
                                name={t.rich("card1.name", {
                                    span: (chunks) => (
                                        <span className="font-semibold">
                                            {chunks}
                                        </span>
                                    ),
                                })}
                                role={t("card1.role")}
                            />
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <TeamMemberCard
                                image={avatar2}
                                name={t.rich("card2.name", {
                                    span: (chunks) => (
                                        <span className="font-semibold">
                                            {chunks}
                                        </span>
                                    ),
                                })}
                                role={t("card2.role")}
                            />
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <TeamMemberCard
                                image={avatar3}
                                name={t.rich("card3.name", {
                                    span: (chunks) => (
                                        <span className="font-semibold">
                                            {chunks}
                                        </span>
                                    ),
                                })}
                                role={t("card3.role")}
                            />
                        </CarouselItem>
                    </CarouselContent>
                    {/* <CarouselPrevious />
                    <CarouselNext /> */}
                </Carousel>
            </div>
        </section>
    );
};

export default MeetExpertsSection;
