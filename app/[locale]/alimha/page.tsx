import ContactUsSection from "@/components/alimha/sections/ContactUsSection";
import Footer from "@/components/alimha/layouts/Footer";
import Header from "@/components/alimha/layouts/Header";
import HeroSection from "@/components/alimha/sections/HeroSection";
import OurServicesSection from "@/components/alimha/sections/OurServicesSection";
import TheyTrustUsSection from "@/components/alimha/sections/TheyTrustUsSection";
import AboutUsSection from "@/components/alimha/sections/AboutUsSection";
import WhyUsSection from "@/components/alimha/sections/WhyUsSection";
import { Toaster } from "sonner";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("AlimhaPage");
    return (
        <main className="h-fit w-full">
            <Header />
            <HeroSection />
            <OurServicesSection />
            <AboutUsSection />
            <WhyUsSection />
            <TheyTrustUsSection
                tag={t("They trust us")}
                title={t("Our partners and support")}
                description={t("They trust us section description")}
            />
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
