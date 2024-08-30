import ContactUsSection from "@/components/alimha/sections/ContactUsSection";
import Footer from "@/components/alimha/layouts/Footer";
import Header from "@/components/alimha/layouts/Header";
import HeroSection from "@/components/alimha/sections/HeroSection";
import OurServicesSection from "@/components/alimha/sections/OurServicesSection";
import TheyTrustUsSection from "@/components/alimha/sections/TheyTrustUsSection";
import AboutUsSection from "@/components/alimha/sections/AboutUsSection";
import WhyUsSection from "@/components/alimha/sections/WhyUsSection";
import { Toaster } from "sonner";

export default function Home() {
    return (
        <main className="h-fit w-full">
            <Header />
            <HeroSection />
            <OurServicesSection />
            <AboutUsSection />
            <WhyUsSection />
            <TheyTrustUsSection />
            <ContactUsSection />
            <Footer />
            <Toaster
                toastOptions={{
                    style: {
                        fontSize: "18px",
                    },
                }}
                position="bottom-left"
                closeButton
                richColors
            />
        </main>
    );
}
