import { useTranslations } from "next-intl";
import React from "react";
import soudhuLogo from "@/public/assets/soudhu-logo.png";
import welichangeLogo from "@/public/assets/welichange-logo.png";
import alpayLogo from "@/public/assets/alpay-logo.png";
import ProjectCard from "../cards/ProjectCard";

const ProjectsSection = () => {
    const t = useTranslations("SoftwareDevelopmentPage.ProjectsSection");
    return (
        <section
            id="projects"
            className="bg-white w-full px-[5%] min-[1200px]:px-[10%] pt-20 pb-28"
        >
            <div className="flex flex-col gap-14">
                <div className="flex flex-col items-center gap-4">
                    <span className="bg-tertiary text-primary-blue text-sm min-[1200px]:text-base px-3 py-2 rounded-md">
                        {t("tag")}
                    </span>
                    <h2 className="font-bold text-center min-[950px]:text-start text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug tracking-wide">
                        {t.rich("heading", {
                            span: (chunks) => (
                                <span className="text-primary-blue">
                                    {chunks}
                                </span>
                            ),
                            br: () => <br />,
                        })}
                    </h2>
                    <p className="text-[#1E1E1E] text-center text-sm lg:text-base min-[1200px]:text-lg tracking-wide w-full md:w-1/2">
                        {t("subheading")}
                    </p>
                </div>
                <div className="flex flex-nowrap justify-center gap-10">
                    <div className="min-w-[250px] min-[950px]:w-[300px] h-[100px] min-[950px]:h-[150px]">
                        <ProjectCard image={soudhuLogo} />
                    </div>
                    <div className="min-w-[250px] min-[950px]:w-[300px] h-[100px] min-[950px]:h-[150px]">
                        <ProjectCard image={welichangeLogo} />
                    </div>
                    <div className="min-w-[250px] min-[950px]:w-[300px] h-[100px] min-[950px]:h-[150px]">
                        <ProjectCard image={alpayLogo} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
