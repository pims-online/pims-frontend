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

    return <div>
        <PimsTitle strongText={'JE M\'INFORME'} lightText={'sur les risques qui m\'entourent'} icon={step1Light}/>
        {/* Obligation légale de débroussaillement */}
        {strimmingObligation.affected ? <>
            <Highlight>
                <span className="pims-pdf-information__strimming-obligation-title">Obligation légale de débroussaillement</span><br/>
                Vous êtes soumis à l'obligation légale de débroussaillement
            </Highlight>
        </> : null}
        {/* Risques */}
        <RiskList riskList={riskList} compact/>
        {/* Lieu de regroupement */}
        {
            (gatheringPlace !== undefined) &&
            <Highlight>
                <h4>Lieu de regroupement</h4>
                <b>{gatheringPlace}</b>
            </Highlight>
        }
    </div>
}
