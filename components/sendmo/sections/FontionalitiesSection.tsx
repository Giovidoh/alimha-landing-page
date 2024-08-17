import React from "react";
import Badge from "../badges/Badge";
import IconTextIllustrationCard from "../cards/IconTextIllustrationCard";
import InstantDepositIcon from "@/public/assets/instant-deposit-icon.svg";
import instantDepositIllustration from "@/public/assets/instant-deposit-illustration.png";
import SubRegionalTransfersIcon from "@/public/assets/sub-regional-transfers-icon.svg";
import subRegionalTransfersIllustration from "@/public/assets/sub-regional-transfers-illustration.png";
import RealTimeTransactionTrackingIcon from "@/public/assets/real-time-transaction-tracking-icon.svg";
import realTimeTransactionTrackingIllustration from "@/public/assets/real-time-transaction-tracking-illustration.png";
import ClientSupportIcon from "@/public/assets/client-support-24-7-icon.svg";
import clientSupportIllustration from "@/public/assets/client-support-24-7-illustration.png";

const FontionalitiesSection = () => {
    return (
        <section
            id="fonctionalities_section"
            className="flex flex-col items-center px-20 min-[1120px]:px-40 pt-10 md:pt-20 py-36 gap-10"
        >
            <Badge text="Fonctionnalités" />
            <h1 className="text-2xl md:text-4xl text-center md:text-start leading-snug font-bold tracking-wide">
                La Solution Innovante pour <br className="hidden md:block" />{" "}
                Vos Dépôts Mobile Money
            </h1>
            <div className="grid min-[1300px]:grid-cols-2 gap-2">
                <IconTextIllustrationCard
                    backgroundColor="bg-secondary-blue"
                    icon={<InstantDepositIcon />}
                    title="Dépôts Instantanés"
                    body="Envoyez de l'Argent en Quelques Secondes. Profitez de la rapidité et de la simplicité de nos dépôts instantanés, adaptés à vos besoins quotidiens"
                    illustration={instantDepositIllustration}
                />
                <IconTextIllustrationCard
                    backgroundColor="bg-gray-50"
                    foregroundColor="text-black"
                    icon={<SubRegionalTransfersIcon />}
                    title="Transferts Sous-Régionaux"
                    body="Une Connectivité Sans Frontières, Réalisez des transferts entre le Sénégal, la Guinée, le Togo, la Centrafrique, Djibouti et les Comores. SendMo vous offre une couverture sous-régionale inégalée."
                    illustration={subRegionalTransfersIllustration}
                />
                <IconTextIllustrationCard
                    backgroundColor="bg-gray-50"
                    foregroundColor="text-black"
                    icon={<RealTimeTransactionTrackingIcon />}
                    title="Suivi des Transactions en Temps Réel"
                    body="Gardez le Contrôle de Vos Finances, Recevez des notifications instantanées et accédez à un historique détaillé de toutes vos transactions directement depuis l'application."
                    illustration={realTimeTransactionTrackingIllustration}
                />
                <IconTextIllustrationCard
                    backgroundColor="bg-secondary-blue"
                    icon={<ClientSupportIcon />}
                    title="Support Client 24/7"
                    body="Assistance à Tout Moment, Notre équipe dédiée est toujours prête à vous aider, assurant une expérience utilisateur sans faille."
                    illustration={clientSupportIllustration}
                />
            </div>
        </section>
    );
};

export default FontionalitiesSection;
