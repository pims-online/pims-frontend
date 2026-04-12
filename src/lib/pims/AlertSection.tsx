import Highlight from "@codegouvfr/react-dsfr/Highlight";

import { PimsTitle } from "./PimsTitle";
import { RadioFrequencies } from "@/providers/AppContextConfig";

import step3Light from '@/assets/step-icons/step-3-light.svg';
import { useTranslation } from "react-i18next";


type Props = {
    city: string;
    radioFreqs: RadioFrequencies;
};

export default function Alert(props: Props) {
    const { city, radioFreqs } = props;
    const { t } = useTranslation('alert_screen');

	const frequenciesToString = (rawFreqs: string[]) => {
		if (rawFreqs.length == 0) {
			return <span className='pims-alert-screen__alert-systems-radio-freq-unavailable'>{t("radio_frequencies.unavailable")}</span>;
		} else {
			return <>{rawFreqs.join(" / ")} Mhz</>;
		}
	}

    return (
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
                <h4>Les stations radio officielles à {city}</h4>
                <ul>
                    <li>France Inter : <b>{frequenciesToString(radioFreqs.franceInter)}</b><br/></li>
                    <li>Ici : <b>{frequenciesToString(radioFreqs.ici)}</b><br/></li>
                    <li>France Info : <b>{frequenciesToString(radioFreqs.franceInfo)}</b><br/></li>
                </ul>
            </Highlight>
        </div>);
}