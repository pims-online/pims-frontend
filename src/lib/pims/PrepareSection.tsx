import { useTranslation } from "react-i18next";
import Highlight from "@codegouvfr/react-dsfr/Highlight";

import { PimsTitle } from "./PimsTitle";
import { StrimmingObligation } from "@/providers/AppContextConfig";

import step2Light from '@/assets/step-icons/step-2-light.svg';


type Props = {
    emergencyKitLocation: string;
    strimmingObligation: StrimmingObligation;
    iodePastilleElegibility: boolean;
};

export default function PrepareSection(props: Props) {
    const { emergencyKitLocation, strimmingObligation, iodePastilleElegibility } = props;

    const { t: t_kitItems } = useTranslation('emergency_kit_screen', {keyPrefix: "kit_listing.items"});
    const { t } = useTranslation('pdf', {keyPrefix: "prepare_section"});

    return (
        <>
            <PimsTitle strongText={t("title_strong")} lightText={t("title_light")} icon={step2Light}/>
            <h4>{t("kit.headline")}</h4>

            {/* Storage location */}
            <p>{t("kit.location_instruction")}</p>
            <Highlight>
                {t("kit.location")}<b>{emergencyKitLocation}</b>
            </Highlight>

            {/* Presentation */}
            <p>{t("kit.presentation")}</p>
            
            {/* Kit listing */}
            <ol className="fr-mb-6v fr-mt-0">
                {iodePastilleElegibility && <>
                    <li key="kit-listing-item-iode-pastille">
                        {t_kitItems('iode_pastille')}
                    </li>
                </>}
                {[...Array(14).keys()].map((value) => (
                    <li key={`kit-listing-item-${value}`}>
                        {t_kitItems(`item_${value + 1}`)}
                    </li>
                ))}
            </ol>

            {/* Strimming obligation */}
            {strimmingObligation.affected && <>
                <h4>{t("strimming_obligation.title")}</h4>
                <p>{t("strimming_obligation.description")}</p>
            </>}
        </>
    );
}