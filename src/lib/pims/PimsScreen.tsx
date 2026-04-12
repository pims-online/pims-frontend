import RiskList from "../1-information/risks/RiskList";
import { RadioFrequencies, Risk } from "@/providers/AppContextConfig";
import { RISK_TYPES } from "../1-information/risks/constants";
import { useTranslation } from "react-i18next";
import step1Light from '@/assets/step-icons/step-1-light.svg';
import step2Light from '@/assets/step-icons/step-2-light.svg';
import Highlight from "@codegouvfr/react-dsfr/Highlight";
import { PimsTitle } from "./PimsTitle";
import InvolvementSection from "./InvolvementSection";
import AlertSection from "./AlertSection";


type Props = {
    radioFreqs: RadioFrequencies;
};


export default function PimsScreen(props: Props) {
    const { radioFreqs } = props;

	const { t } = useTranslation('emergency_kit_screen');

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
                <div>
                    <PimsTitle strongText='JE ME PRÉPARE' lightText='à faire face' icon={step2Light}/>
                    <h4>Préparez un kit d’urgence contenant de quoi vivre pendant 3 jours</h4>
                    {/* Lieu de stockage */}
                    <p>Placez le kit d’urgence dans un endroit facile d’accès et partagez sa localisation avec vos proches.</p>
                    <Highlight>
                        Votre kit est rangé : <b>Dans l'escalier de la cave</b>
                    </Highlight>
                    {/* Présentation */}
                    <p>
                        Il vous permettra d’être autonome en cas d’évacuation ou de mise à l’abri dans votre domicile. 
                        Constituez-le sans attendre et vérifiez régulièrement son contenu.
                        Voici la liste des objets et équipements essentiels à mettre dans ce kit d’urgence, 
                        qui doit rester facilement accessible.
                    </p>
                    {/* Liste d'éléments */}
                    <ol className="fr-mb-6v fr-mt-0">
                        <li key="kit-listing-item-iode-pastille">
                            {t('kit_listing.items.iode_pastille')}
                        </li>
                        {[...Array(14).keys()].map((value) => (
                            <li key={`kit-listing-item-${value}`}>
                                {t(`kit_listing.items.item_${value + 1}`)}
                            </li>
                        ))}
                    </ol>
                    {/* Obligation légale de débroussaillement */}
                    <h4>Débroussaillez votre terrain</h4>
                    <p>Enlevez les broussailles combustibles proches de votre maison et de ses voies d'accès.</p>
                    {/* Kit d'urgence */}
                </div>
                <AlertSection radioFreqs={radioFreqs}/>
                <InvolvementSection/>
            </section>
    </div>
};
