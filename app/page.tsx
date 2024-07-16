import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurServicesSection from "@/components/OurServicesSection";
import TheyTrustUsSection from "@/components/TheyTrustUsSection";
import WhoAreWeSection from "@/components/WhoAreWeSection";
import WhyUsSection from "@/components/WhyUsSection";

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
