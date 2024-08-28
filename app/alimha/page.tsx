import ContactUsSection from "@/components/alimha/sections/ContactUsSection";
import Footer from "@/components/alimha/layouts/Footer";
import Header from "@/components/alimha/layouts/Header";
import HeroSection from "@/components/alimha/sections/HeroSection";
import OurServicesSection from "@/components/alimha/sections/OurServicesSection";
import TheyTrustUsSection from "@/components/alimha/sections/TheyTrustUsSection";
import WhoAreWeSection from "@/components/alimha/sections/WhoAreWeSection";
import WhyUsSection from "@/components/alimha/sections/WhyUsSection";
import { Toaster } from "sonner";

export default function Home() {
    return (
        <main className="h-fit w-full">
            <Header />
            <HeroSection />
            <OurServicesSection />
            <WhoAreWeSection />
            <WhyUsSection />
            <TheyTrustUsSection />
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
