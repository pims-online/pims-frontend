import { useTranslation } from "react-i18next";

import { PimsParams } from "../5-summary/utils";
import InvolvementSection from "./InvolvementSection";
import AlertSection from "./AlertSection";
import PrepareSection from "./PrepareSection";
import InformSection from "./InformSection";
import PhoneNumbersSection from "./PhoneNumbersSection";


export default function PimsScreen(props: PimsParams) {
    const {
        title,
        address,
        comment,
        usefulNumbers: numbers,
        riskList,
        gatheringPlace,
        emergencyKitStorage: emergencyKitLocation,
        strimmingObligation,
        iodePastilleElegibility,
        radioFrequencies: radioFreqs, 
    } = props;

    const { t } = useTranslation("pdf");

    return <div className='pims__main-layout'>
            <section className='pims-layouts__container'>
                {/* Informations générales */}
                <h1 className='pims-pdf__title'>{t("title")}</h1>
                {(title !== undefined) && <p className='pims-pdf__name'>« {title} »</p>}
                <p className='pims-pdf__subtitle'>{address}</p>
                {(comment !== undefined) && <p><b>{t("comment")}</b> {comment}</p>}
                <PhoneNumbersSection numbers={numbers}/>
                <InformSection
                    strimmingObligation={strimmingObligation}
                    riskList={riskList}
                    gatheringPlace={gatheringPlace}
                />
                <PrepareSection
                    emergencyKitLocation={emergencyKitLocation}
                    strimmingObligation={strimmingObligation}
                    iodePastilleElegibility={iodePastilleElegibility}
                />
                <AlertSection radioFreqs={radioFreqs}/>
                <InvolvementSection/>
            </section>
    </div>
};
