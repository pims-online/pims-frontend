import { RadioFrequencies, Risk } from "@/providers/AppContextConfig";
import Highlight from "@codegouvfr/react-dsfr/Highlight";
import InvolvementSection from "./InvolvementSection";
import AlertSection from "./AlertSection";
import PrepareSection from "./PrepareSection";
import InformSection from "./InformSection";


type Props = {
    riskList: Risk[];
    gatheringPlace: string;
    emergencyKitLocation: string;
    strimmingObligation: boolean;
    iodePastilleElegibility: boolean;
    radioFreqs: RadioFrequencies;
};


export default function PimsScreen(props: Props) {
    const {
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
                {/* <Title text='Titre : Chez nous'/> */}
                <p>
                    <b>Remarque :</b> Ne pas oublier de couper le gaz en partant
                </p>
                <div>
                    <Highlight>
                        <h3>Les numéros utiles</h3>
                        <ul>
                            <li>Numéro unique d'appel en Europe : <b><a href='tel:112'>112</a></b></li>
                            <li>Numéro d'appel pour les sourds et malentendants : <b><a href='tel:114'>114</a></b></li>
                            <br/>
                            <li>Mairie : <b><a href='tel:+33476763636'>04 76 76 36 36</a></b></li>
                            <li>Assurance : <b><a href='tel:+33139657816'>01 39 65 78 16</a></b></li>
                            <li>Proches : <b><a href='tel:+33698346871'>06 98 34 68 71</a></b> (Agathe)</li>
                        </ul>
                    </Highlight>
                </div>
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
