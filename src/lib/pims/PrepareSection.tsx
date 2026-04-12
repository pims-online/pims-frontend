import { useTranslation } from "react-i18next";
import Highlight from "@codegouvfr/react-dsfr/Highlight";

import { PimsTitle } from "./PimsTitle";

import step2Light from '@/assets/step-icons/step-2-light.svg';


type Props = {
    emergencyKitLocation: string;
    strimmingObligation: boolean;
    iodePastilleElegibility: boolean;
};

export default function PrepareSection(props: Props) {
    const { emergencyKitLocation, strimmingObligation, iodePastilleElegibility } = props;

    const { t } = useTranslation('emergency_kit_screen');

    return (
        <div>
            <PimsTitle strongText='JE ME PRÉPARE' lightText='à faire face' icon={step2Light}/>
            <h4>Préparez un kit d’urgence contenant de quoi vivre pendant 3 jours</h4>
            {/* Lieu de stockage */}
            <p>Placez le kit d’urgence dans un endroit facile d’accès et partagez sa localisation avec vos proches.</p>
            <Highlight>
                Votre kit est rangé : <b>{emergencyKitLocation}</b>
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
                {iodePastilleElegibility ? <>
                    <li key="kit-listing-item-iode-pastille">
                        {t('kit_listing.items.iode_pastille')}
                    </li>
                </> : null}
                {[...Array(14).keys()].map((value) => (
                    <li key={`kit-listing-item-${value}`}>
                        {t(`kit_listing.items.item_${value + 1}`)}
                    </li>
                ))}
            </ol>
            {/* Obligation légale de débroussaillement */}
            {strimmingObligation ? <>
                <h4>Débroussaillez votre terrain</h4>
                <p>Enlevez les broussailles combustibles proches de votre maison et de ses voies d'accès.</p>
            </> : null}
        </div>
    );
}