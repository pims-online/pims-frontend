import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { PimsTitle } from './PimsTitle';

import firstAidIcon from '@/assets/involvement-icons/first_aid.svg';
import firefighterIcon from '@/assets/involvement-icons/firefighter.svg';
import reserveIcon from '@/assets/involvement-icons/municipal_reserve.svg';
import volunteerIcon from '@/assets/involvement-icons/volunteer.svg';
import step4Light from '@/assets/step-icons/step-4-light.svg';
// The PDF is always rendered in light mode, hence the light variant only.
import logoJnrLight from '@/assets/alert-icons/logo_journee_nationale_resilience_light_mode.svg';


type Involvement = {
    i18nKey: string;
    link?: string;
    linkText?: string;
    imageUrl?: string;
    /** Wide banner logo instead of a square pictogram */
    imageIsBanner?: boolean;
};

const involvements: Involvement[] = [
    {
        i18nKey: "first_aid",
        link: 'https://www.securite-civile.interieur.gouv.fr/sengager/engagement-citoyen/se-former-aux-gestes-qui-sauvent',
        linkText: 'securite-civile.interieur.gouv.fr/sengager/engagement-citoyen/se-former-aux-gestes-qui-sauvent',
        imageUrl: firstAidIcon,
    },
    {
        i18nKey: "firefighter",
        link: 'https://www.securite-civile.interieur.gouv.fr/sengager/devenir-sapeur-pompier-volontaire',
        linkText: 'securite-civile.interieur.gouv.fr/sengager/devenir-sapeur-pompier-volontaire',
        imageUrl: firefighterIcon,
    },
    {
        i18nKey: "civil_security",
        imageUrl: reserveIcon,
    },
    {
        i18nKey: "volunteering",
        link: 'https://www.jeveuxaider.gouv.fr',
        linkText: 'jeveuxaider.gouv.fr',
        imageUrl: volunteerIcon,
    },
    {
        i18nKey: "jnr",
        link: 'https://carte-jnr.fr',
        linkText: 'carte-jnr.fr',
        imageUrl: logoJnrLight,
        imageIsBanner: true,
    },
];

export default function InvolvementSection() {
    const { t } = useTranslation("pdf", {keyPrefix: "involvement_section"});

    const involvementsNodes: ReactElement[] = involvements.map(
        (involvement: Involvement) => 
        <div key={involvement.i18nKey} className="pims-pdf-involvement__item">
            <h3>
                {t(`${involvement.i18nKey}.title`)}
            </h3>
            <div className="pims-pdf-involvement__item-container">
                <img
                    src={involvement.imageUrl}
                    className={involvement.imageIsBanner ? 'pims-pdf-involvement__banner' : undefined}
                    alt=''
                />
                <div>
                    <p>
                        {t(`${involvement.i18nKey}.description`)}<br/>
                        {(involvement.link !== undefined) ? <a href={involvement.link}>{involvement.linkText || involvement.link}</a> : undefined}
                    </p>
                </div>
            </div>
        </div>
    );

    return <>
            <PimsTitle strongText={t("title_strong")} icon={step4Light} id="pims-pdf-section-involvement"/>
            {involvementsNodes}
        </>;
}