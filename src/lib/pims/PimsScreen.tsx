import RiskList from "../1-information/risks/RiskList";
import { Risk } from "@/providers/AppContextConfig";
import { RISK_TYPES } from "../1-information/risks/constants";
import { useTranslation } from "react-i18next";
import step1Light from '@/assets/step-icons/step-1-light.svg';
import step2Light from '@/assets/step-icons/step-2-light.svg';
import step3Light from '@/assets/step-icons/step-3-light.svg';
import step4Light from '@/assets/step-icons/step-4-light.svg';
import firstAidIcon from '@/assets/involvement-icons/first_aid.svg';
import firefighterIcon from '@/assets/involvement-icons/firefighter.svg';
import reserveIcon from '@/assets/involvement-icons/municipal_reserve.svg';
import volunteerIcon from '@/assets/involvement-icons/volunteer.svg';
import Highlight from "@codegouvfr/react-dsfr/Highlight";
import { PimsTitle } from "./PimsTitle";
import { JSX } from "react";

type Involvement = {
    title: string;
    description: string;
    link?: string;
    linkText?: string;
    imageUrl?: string;
};

export const PimsScreen = () => {

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

    const involvements: Involvement[] = [
        {
            title: 'Gestes qui sauvent',
            description: 'Formez-vous aux gestes qui sauvent auprès des sapeurs-pompiers ou d’une association agréée de sécurité civile.',
            link: 'https://www.securite-civile.interieur.gouv.fr/sengager/engagement-citoyen/se-former-aux-gestes-qui-sauvent',
            linkText: 'Se former au gestes qui sauvent',
            imageUrl: firstAidIcon,
        },
        {
            title: 'Pompier volontaire',
            description: 'Devenez pompier volontaire et participez aux actions de secours.',
            link: 'https://www.securite-civile.interieur.gouv.fr/sengager/devenir-sapeur-pompier-volontaire',
            linkText: 'Devenir pompier volontaire',
            imageUrl: firefighterIcon,
        },
        {
            title: 'Réserve communale',
            description: 'Intégrez la réserve communale de sécurité civile pour participer au soutien et à l’assistance de la population.',
            imageUrl: reserveIcon,
        },
        {
            title: 'Devenir bénévole',
            description: 'Inscrivez-vous sur la plateforme publique du bénévolat.',
            link: 'https://www.jeveuxaider.gouv.fr/',
            imageUrl: volunteerIcon,
        },
        {
            title: 'Journée Nationale de la Résilience',
            description: 'Participez près de chez vous aux actions de sensibilisation de la journée nationale de la résilience !',
            link: 'https://carte-jnr.fr/',
            imageUrl: undefined,
        },
    ];

    const involvementsHtmls: JSX.Element[] = involvements.map((involvement, _index) => {
        return <>
            <h3>{involvement.title}</h3>
            <div className="pims-pdf-involvement__item-container">
                <img src={involvement.imageUrl}/>
                <div>
                    <p>
                        {involvement.description}<br/>
                        {(involvement.link !== undefined) ? <a href={involvement.link}>{involvement.link}</a> : undefined}
                    </p>
                </div>
            </div>
        </>
    });

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
                <div>
                    <PimsTitle strongText={'J\'AGIS'} lightText={'en cas d\'aléa ou d\'alerte'} icon={step3Light}/>
                    <p className="pims-pdf-alert__subtitle">Pendant la crise, je suis l’évolution de la situation.</p>
                    <h3>Les vigilances météo</h3>
                    <p>
                        Je surveille l’évolution des vigilances : <a href='https://vigilance.meteofrance.fr'>météo-france</a> <a href='https://www.vigicrues.gouv.fr'>vigicrues</a>
                        <br/>
                        En situation orange ou rouge, des conseils
                        élaborés par les pouvoirs publics sont
                        indiqués sur la carte et dans les bulletins
                        de vigilance. Ils sont simples, adaptés
                        à chaque phénomène et faciles à adopter.
                    </p>
                    <h3>L'alerte des populations</h3>
                    <p>En cas de risque vital, les autorités peuvent activer :</p>                    
                    <ul>
                        <li>
                            <b>FR Alert</b> qui diffuse un message d’alerte avec les consignes associées directement sur les téléphones portables.
                            Pas d’inscription ni de téléchargement pour recevoir le message d’alerte.
                        </li>
                        <li>
                            <b>Les sirènes SAIP</b> qui déclenchent un signal sonore de 3 fois 1 minute et 41 secondes.
                            Il faut alors :
                            <ul>
                                <li><b>Éviter de téléphoner</b> afin de laisser les réseaux disponibles pour les secours.</li>
                                <li><b>Rester à l'abri</b>, n'évacuez votre domicile que sur ordre des autorités.</li>
                                <li><b>Restez à l'écoute</b> des consignes des autorités.</li>
                            </ul>
                        </li>
                        <li>
                            <b>Les médias publics</b> et les réseaux sociaux des services de l’État, 
                            Radio France et France Télévisions seront les relais des autorités
                            en situation d’urgence pour communiquer avec la population.
                        </li>
                    </ul>
                    <Highlight>
                        <h4>Les stations radio officielles à Grenoble</h4>
                        <ul>
                            <li>France Inter : <b>105,1 MHz</b><br/></li>
                            <li>Ici : <b>98,2 MHz</b><br/></li>
                            <li>France Info : <b>89,9 MHz</b><br/></li>
                        </ul>
                    </Highlight>
                </div>
                <div>
                    <PimsTitle strongText={'JE M\'IMPLIQUE'} icon={step4Light}/>
                    {involvementsHtmls}
                </div>
            </section>
    </div>
};
