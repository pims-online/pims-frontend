import { RadioFrequencies, Risk, UsefulNumbers } from "@/providers/AppContextConfig";
import InvolvementSection from "./InvolvementSection";
import AlertSection from "./AlertSection";
import PrepareSection from "./PrepareSection";
import InformSection from "./InformSection";
import PhoneNumbersSection from "./PhoneNumbersSection";


type Props = {
    numbers: UsefulNumbers;
    riskList: Risk[];
    gatheringPlace: string;
    emergencyKitLocation: string;
    strimmingObligation: boolean;
    iodePastilleElegibility: boolean;
    radioFreqs: RadioFrequencies;
};


export default function PimsScreen(props: Props) {
    const {
        numbers,
        riskList,
        gatheringPlace,
        emergencyKitLocation,
        strimmingObligation,
        iodePastilleElegibility,
        radioFreqs 
    } = props;

    return <div className='pims__main-layout'>
            <section className='pims-layouts__container'>
                {/* Informations générales */}
                <h1 className='pims-pdf__title'>Votre Plan Individuel de Mise en Sûreté</h1>
                <p className='pims-pdf__name'>« Chez nous »</p>
                <p className='pims-pdf__subtitle'>15 Rue Monge 38100 Grenoble</p>
                <p>
                    <b>Remarque :</b> Ne pas oublier de couper le gaz en partant
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
                <AlertSection radioFreqs={radioFreqs}/>
                <InvolvementSection/>
            </section>
    </div>
};
