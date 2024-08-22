import React from "react";
import IconTextButtonCard from "../cards/IconTextButtonCard";
import PaymentMethodProtectionIcon from "@/public/assets/payment-method-protection-icon.svg";
import UniversalIntegrationIcon from "@/public/assets/universal-integration-icon.svg";
import AdvancedSecurityIcon2 from "@/public/assets/advanced-security-icon2.svg";
import ArrowRightIcon from "@/public/assets/arrow-right-icon.svg";

const OurServicesSection = () => {
    return (
        <section className="flex flex-col items-center w-full py-24 px-5 sm:px-20 min-[1120px]:px-40 gap-3">
            <span className="font-medium text-lg text-primary-blue">
                Nos Services
            </span>
            <h1 className="font-bold text-4xl mb-10">Ce Que Nous Offrons</h1>
            <div className="flex gap-3">
                <IconTextButtonCard
                    icon={<PaymentMethodProtectionIcon />}
                    title="Consolidation des Moyens de Paiement"
                    body="Réunissez divers modes de paiement en une seule interface. Acceptez des cartes de crédit, paiements mobiles, virements bancaires, et plus encore, tout en gardant une vue d'ensemble de vos flux financiers."
                    buttonText="En Savoir Plus"
                    buttonIcon={<ArrowRightIcon />}
                    className="w-1/3 bg-white"
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
                    className="w-1/3 bg-primary-blue"
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
                    className="w-1/3 bg-white"
                    titleClassName="text-primary-blue"
                    bodyClassName="text-[#292D32] pb-7"
                    buttonClassName="text-primary-blue fill-primary-blue"
                />
            </div>
        </section>
    );
};

export default OurServicesSection;
