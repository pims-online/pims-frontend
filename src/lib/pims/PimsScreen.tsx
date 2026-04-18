import { PimsContent } from "@/providers/PdfContext";
import InvolvementSection from "./InvolvementSection";
import AlertSection from "./AlertSection";
import PrepareSection from "./PrepareSection";
import InformSection from "./InformSection";
import PhoneNumbersSection from "./PhoneNumbersSection";


export default function PimsScreen(props: PimsContent) {
    const {
        title,
        address,
        comment,
        numbers,
        riskList,
        gatheringPlace,
        emergencyKitLocation,
        strimmingObligation,
        iodePastilleElegibility,
        cityName,
        radioFreqs 
    } = props;

    return <div className='pims__main-layout'>
            <section className='pims-layouts__container'>
                {/* Informations générales */}
                <h1 className='pims-pdf__title'>Votre Plan Individuel de Mise en Sûreté</h1>
                <p className='pims-pdf__name'>« {title} »</p>
                <p className='pims-pdf__subtitle'>{address}</p>
                <p>
                    <b>Remarque :</b> {comment}
                </p>
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
                <AlertSection city={cityName} radioFreqs={radioFreqs}/>
                <InvolvementSection/>
            </section>
    </div>
};
