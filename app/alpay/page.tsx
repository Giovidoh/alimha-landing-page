import Footer from "@/components/sendmo/layouts/Footer";
import Header from "@/components/alpay/layouts/Header";
import HeroSection from "@/components/alpay/sections/HeroSection";
import OurServicesSection from "@/components/alpay/sections/OurServicesSection";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <Header />
            <HeroSection />
            <OurServicesSection />
        </main>
    );
}
