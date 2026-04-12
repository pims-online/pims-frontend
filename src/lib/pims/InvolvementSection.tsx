import { ReactElement } from 'react';

import { PimsTitle } from './PimsTitle';

import firstAidIcon from '@/assets/involvement-icons/first_aid.svg';
import firefighterIcon from '@/assets/involvement-icons/firefighter.svg';
import reserveIcon from '@/assets/involvement-icons/municipal_reserve.svg';
import volunteerIcon from '@/assets/involvement-icons/volunteer.svg';
import step4Light from '@/assets/step-icons/step-4-light.svg';


type Involvement = {
    title: string;
    description: string;
    link?: string;
    linkText?: string;
    imageUrl?: string;
};

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
        link: 'https://www.jeveuxaider.gouv.fr',
        imageUrl: volunteerIcon,
    },
    {
        title: 'Journée Nationale de la Résilience',
        description: 'Participez près de chez vous aux actions de sensibilisation de la journée nationale de la résilience !',
        link: 'https://carte-jnr.fr',
        imageUrl: undefined,
    },
];

export default function InvolvementSection() {
    const involvementsNodes: ReactElement[] = involvements.map((involvement, _index) => {
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

    return <div>
            <PimsTitle strongText={'JE M\'IMPLIQUE'} icon={step4Light}/>
            {involvementsNodes}
        </div>;
}