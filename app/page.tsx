import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import OurServicesSection from "@/components/OurServicesSection";
import TheyTrustUsSection from "@/components/sections/TheyTrustUsSection";
import WhoAreWeSection from "@/components/sections/WhoAreWeSection";
import WhyUsSection from "@/components/sections/WhyUsSection";

export default function Home() {
    return (
        <main className="h-full w-full">
            <Header />
            <HeroSection />
            <OurServicesSection />
            <WhoAreWeSection />
            <WhyUsSection />
            <TheyTrustUsSection />
            <ContactUsSection />
            <Footer />
        </main>
    );
}
