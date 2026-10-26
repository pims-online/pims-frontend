import { useTranslation } from "react-i18next";

import { Risk, StrimmingObligation } from "@/providers/AppContextConfig";
import RiskList from "../1-information/risks/RiskList";
import { PimsTitle } from "./PimsTitle";
import HighlightRaw from "@/components/HighlightRaw";

import step1Light from '@/assets/step-icons/step-1-light.svg';


type Props = {
    strimmingObligation: StrimmingObligation;
    riskList: Risk[];
    gatheringPlace: string|undefined;
};

export default function InformSection(props: Props) {
    const { strimmingObligation, riskList, gatheringPlace } = props;

    const { t } = useTranslation("pdf", { keyPrefix: "inform_section" });

    return <>
        <PimsTitle strongText={t("title_strong")} lightText={t("title_light")} icon={step1Light} id="pims-pdf-section-inform"/>

        {/* Strimming obligation.
            A real heading (h3, under the h2 of this section) rather than a bold <span>:
            it is announced and navigable as a heading, and tagged H3 in the PDF.
            HighlightRaw instead of the DSFR Highlight, which wraps its content in a
            <p> where a heading is not allowed. */}
        {strimmingObligation.affected &&
            <HighlightRaw>
                <h3 className="pims-pdf-information__strimming-obligation-title">{t("strimming_obligation.title")}</h3>
                <p className="fr-mb-0">{t("strimming_obligation.description")}</p>
            </HighlightRaw>
        }

        {/* Risks */}
        {/* Risk titles are h3 under this section's h2 (h5 on the site) */}
        <RiskList riskList={riskList} compact titleLevel="h3"/>

        {/* Gathering place */}
        {
            (gatheringPlace !== undefined) &&
            <HighlightRaw>
                <h3 className="fr-h4">{t("gathering_place")}</h3>
                <b>{gatheringPlace}</b>
            </HighlightRaw>
        }
    </>
}
