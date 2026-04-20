import { useTranslation } from "react-i18next";
import Highlight from "@codegouvfr/react-dsfr/Highlight";

import { Risk, StrimmingObligation } from "@/providers/AppContextConfig";
import RiskList from "../1-information/risks/RiskList";
import { PimsTitle } from "./PimsTitle";

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
        <PimsTitle strongText={t("title_strong")} lightText={t("title_light")} icon={step1Light}/>

        {/* Strimming obligation */}
        {strimmingObligation.affected ? <>
            <Highlight>
                <span className="pims-pdf-information__strimming-obligation-title">{t("strimming_obligation.title")}</span><br/>
                {t("strimming_obligation.description")}
            </Highlight>
        </> : null}

        {/* Risks */}
        <RiskList riskList={riskList} compact/>

        {/* Gathering place */}
        {
            (gatheringPlace !== undefined) &&
            <Highlight>
                <h4>{t("gathering_place")}</h4>
                <b>{gatheringPlace}</b>
            </Highlight>
        }
    </>
}
