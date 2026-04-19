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

    return <div className='pims__main-layout'>
            <section className='pims-layouts__container'>
                {/* Informations générales */}
                <h1 className='pims-pdf__title'>Votre Plan Individuel de Mise en Sûreté</h1>
                {(title !== undefined) && <p className='pims-pdf__name'>« {title} »</p>}
                <p className='pims-pdf__subtitle'>{address}</p>
                {(comment !== undefined) && <p><b>Remarque :</b> {comment}</p>}
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
