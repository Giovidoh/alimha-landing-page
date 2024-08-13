import Header from "@/components/sendmo/layouts/Header";
import AdvantagesSection from "@/components/sendmo/sections/AdvantagesSection";
import FontionalitiesSection from "@/components/sendmo/sections/FontionalitiesSection";
import HeroSection from "@/components/sendmo/sections/HeroSection";
import WelcomeToSendmoSection from "@/components/sendmo/sections/WelcomeToSendmoSection";

export default function Home() {
    return (
        <main className="h-full w-full">
            <Header />
            <HeroSection />
            <WelcomeToSendmoSection />
            <FontionalitiesSection />
            <AdvantagesSection />
        </main>
    );
}
