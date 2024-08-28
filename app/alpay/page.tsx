import Footer from "@/components/alpay/layouts/Footer";
import Header from "@/components/alpay/layouts/Header";
import HeroSection from "@/components/alpay/sections/HeroSection";
import OurServicesSection from "@/components/alpay/sections/OurServicesSection";
import AdvantagesSection from "@/components/alpay/sections/AdvantagesSection";
import HowItWorksSection from "@/components/alpay/sections/HowItWorksSection";
import WhyUsSection from "@/components/alpay/sections/WhyUsSection";
import ApplicationSection from "@/components/alpay/sections/ApplicationSection";
import ContactUsSection from "@/components/alpay/sections/ContactUsSection";
import { Toaster } from "sonner";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <Header />
            <HeroSection />
            <OurServicesSection />
            <AdvantagesSection />
            <HowItWorksSection />
            <WhyUsSection />
            <ApplicationSection />
            <ContactUsSection />
            <Footer />
            <Toaster
                toastOptions={{
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "18px",
                        minWidth: "0px",
                        width: "500px",
                    },
                }}
                position="top-center"
                richColors
            />
        </main>
    );
}
