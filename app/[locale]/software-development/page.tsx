import AboutUsSection from "@/components/software-development/sections/AboutUsSection";
import HeroSection from "@/components/software-development/sections/HeroSection";
import ServicesSection from "@/components/software-development/sections/ServicesSection";

export default function Page() {
    return (
        <main className="w-full h-fit">
            <HeroSection />
            <ServicesSection />
            <AboutUsSection />
        </main>
    );
}
