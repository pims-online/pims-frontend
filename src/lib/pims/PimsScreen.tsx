import RiskList from "../1-information/risks/RiskList";
import { RadioFrequencies, Risk } from "@/providers/AppContextConfig";
import { RISK_TYPES } from "../1-information/risks/constants";
import step1Light from '@/assets/step-icons/step-1-light.svg';
import Highlight from "@codegouvfr/react-dsfr/Highlight";
import { PimsTitle } from "./PimsTitle";
import InvolvementSection from "./InvolvementSection";
import AlertSection from "./AlertSection";
import PrepareSection from "./PrepareSection";


type Props = {
    emergencyKitLocation: string
    strimmingObligation: boolean;
    iodePastilleElegibility: boolean;
    radioFreqs: RadioFrequencies;
};


export default function PimsScreen(props: Props) {
    const {
        emergencyKitLocation,
        strimmingObligation,
        iodePastilleElegibility,
        radioFreqs 
    } = props;

    const risks: Risk[] = [
        {
            type: RISK_TYPES[0],
            intensityAtAddress: 'intensity_relevant',
            intensityInCity: 'intensity_relevant',
        },
        {
            type: RISK_TYPES[8],
            intensityAtAddress: 'intensity_relevant',
            intensityInCity: 'intensity_relevant',
        },
        {
            type: RISK_TYPES[6],
            intensityAtAddress: 'intensity_present',
            intensityInCity: 'intensity_present',
        },
        {
            type: RISK_TYPES[9],
            intensityAtAddress: 'intensity_mid',
            intensityInCity: 'intensity_mid',
        },
        {
            type: RISK_TYPES[7],
            intensityAtAddress: 'intensity_present',
            intensityInCity: 'intensity_present',
        },
        {
            type: RISK_TYPES[5],
            intensityAtAddress: 'intensity_present',
            intensityInCity: 'intensity_present',
        },
    ]

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
                <div>
                    <PimsTitle strongText={'JE M\'INFORME'} lightText={'sur les risques qui m\'entourent'} icon={step1Light}/>
                    <Highlight>
                        <span className="pims-pdf-information__strimming-obligation-title">Obligation légale de débroussaillement</span><br/>
                        Vous êtes soumis à l'obligation légale de débroussaillement
                    </Highlight>
                    {/* Intégrer les risques ici */}
                    <RiskList riskList={risks} compact/>
                    {/* Lieu de regroupement */}
                    <Highlight>
                        <h4>Lieu de regroupement</h4>
                        <b>Le Parking</b>
                    </Highlight>
                </div>
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
