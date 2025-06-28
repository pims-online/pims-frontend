import { useTranslation } from "react-i18next";

import { Container, Subtitle } from "@/components";


const ALERT_LINK = "https://www.securite-civile.interieur.gouv.fr/reagir/comment-se-preparer-face-aux-risques/systeme-dalerte-des"


export default function AlertSystemsMoreInfo() {
    const { t } = useTranslation('alert_screen');
    
    return (
        <Container>
            <Subtitle text={t('alert_systems.more_info.title')}></Subtitle>
            <p>
                {t('alert_systems.more_info.content')}
                <a
                    href={`${ALERT_LINK}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fr-mt-2v"
                >
                    securite-civile.interieur.gouv.fr
                </a>
            </p>
        </Container>
    );
}