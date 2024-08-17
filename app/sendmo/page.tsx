import Footer from "@/components/sendmo/layouts/Footer";
import Header from "@/components/sendmo/layouts/Header";
import AdvantagesSection from "@/components/sendmo/sections/AdvantagesSection";
import ContactSection from "@/components/sendmo/sections/ContactSection";
import DownloadAppSection from "@/components/sendmo/sections/DownloadAppSection";
import FaqSection from "@/components/sendmo/sections/FaqSection";
import FontionalitiesSection from "@/components/sendmo/sections/FontionalitiesSection";
import HeroSection from "@/components/sendmo/sections/HeroSection";
import PaymentMethodsSection from "@/components/sendmo/sections/PaymentMethodsSection";
import WelcomeToSendmoSection from "@/components/sendmo/sections/WelcomeToSendmoSection";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <Header />
            <HeroSection />
            <WelcomeToSendmoSection />
            <FontionalitiesSection />
            <AdvantagesSection />
            <PaymentMethodsSection />
            <DownloadAppSection />
            <ContactSection />
            <FaqSection />
            <Footer />
        </main>
    );
}
