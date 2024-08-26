import React from "react";
import IconTextButtonCard from "../cards/IconTextButtonCard";
import PaymentMethodProtectionIcon from "@/public/assets/payment-method-protection-icon.svg";
import UniversalIntegrationIcon from "@/public/assets/universal-integration-icon.svg";
import AdvancedSecurityIcon2 from "@/public/assets/advanced-security-icon2.svg";
import ArrowRightIcon from "@/public/assets/arrow-right-icon.svg";

const OurServicesSection = () => {
    return (
        <section
            id="our-services"
            className="flex flex-col items-center w-full py-24 px-5 sm:px-20 min-[1330px]:px-40 gap-3"
        >
            <span className="font-medium text-base sm:text-lg text-center text-primary-blue">
                Nos Services
            </span>
            <h1 className="font-bold text-2xl sm:text-3xl min-[1000px]:text-4xl text-center mb-5 sm:mb-10">
                Ce Que Nous Offrons
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <IconTextButtonCard
                    icon={<PaymentMethodProtectionIcon />}
                    title="Consolidation des Moyens de Paiement"
                    body="Réunissez divers modes de paiement en une seule interface. Acceptez des cartes de crédit, paiements mobiles, virements bancaires, et plus encore, tout en gardant une vue d'ensemble de vos flux financiers."
                    buttonText="En Savoir Plus"
                    buttonIcon={<ArrowRightIcon />}
                    className="bg-white border border-tertiary"
                    titleClassName="text-primary-blue"
                    bodyClassName="text-[#292D32] pb-7"
                    buttonClassName="text-primary-blue fill-primary-blue"
                />
                <IconTextButtonCard
                    icon={<UniversalIntegrationIcon className="mb-2" />}
                    title="Intégration Universelle"
                    body="Notre solution s'intègre facilement avec vos systèmes existants, que ce soit votre site web, votre application mobile ou votre logiciel de gestion. Bénéficiez d'une configuration rapide sans interruption de service."
                    buttonText="En Savoir Plus"
                    buttonIcon={<ArrowRightIcon />}
                    className="bg-primary-blue border border-primary-blue"
                    titleClassName="text-white"
                    bodyClassName="text-white pb-7"
                    buttonClassName="text-white fill-white"
                />
                <IconTextButtonCard
                    icon={<AdvancedSecurityIcon2 />}
                    title="Sécurité Avancée"
                    body="Protégez vos transactions avec des normes de sécurité de pointe, incluant le chiffrement des données et la conformité PCI-DSS. Vos informations financières et celles de vos clients sont toujours en sécurité."
                    buttonText="En Savoir Plus"
                    buttonIcon={<ArrowRightIcon />}
                    className="bg-white border border-tertiary"
                    titleClassName="text-primary-blue"
                    bodyClassName="text-[#292D32] pb-7"
                    buttonClassName="text-primary-blue fill-primary-blue"
                />
            </div>
        </section>
    );
};

export default OurServicesSection;
