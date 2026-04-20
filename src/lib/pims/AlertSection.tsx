import { Trans, useTranslation } from "react-i18next";
import Highlight from "@codegouvfr/react-dsfr/Highlight";

import { PimsTitle } from "./PimsTitle";
import { RadioFrequencies } from "@/providers/AppContextConfig";

import step3Light from '@/assets/step-icons/step-3-light.svg';


type Props = {
    radioFreqs: RadioFrequencies;
};

export default function Alert(props: Props) {
    const { radioFreqs } = props;

    const { t } = useTranslation('pdf', { keyPrefix: "alert_section" });

	const frequenciesToString = (rawFreqs: string[]) => {
		if (rawFreqs.length == 0) {
			return <span className='pims-alert-screen__alert-systems-radio-freq-unavailable'>{t("radio_frequencies.unavailable")}</span>;
		} else {
			return <>{rawFreqs.join(" / ")} MHz</>;
		}
	}

    const saipGuidelinesKeys = ["no_phone", "stay_safe", "listen_carefully"];
    const saipGuidelinesNodes = saipGuidelinesKeys.map(
        (key) => <li key={key}>
            <Trans
                t={t}
                i18nKey={`population_alert.saip_guidelines.${key}`}
                components={{
                    b: <b/>
                }}
            />
        </li>
    );

    return (
        <>
            <PimsTitle strongText={t("title_strong")} lightText={t("title_light")} icon={step3Light}/>
            <p className="pims-pdf-alert__subtitle">{t("subtitle")}</p>

            {/* Weather alerts */}
            <h3>{t("weather_alerts.title")}</h3>
            <p>
                <Trans 
                    t={t}
                    i18nKey="weather_alerts.links"
                    components={{
                        k1: <a href="https://vigilance.meteofrance.fr"/>,
                        k2: <a href="https://www.vigicrues.gouv.fr"/>
                    }}
                />
                <br/>
                {t("weather_alerts.explanation")}
            </p>

            {/* Population alert */}
            <h3>{t("population_alert.title")}</h3>
            <p>{t("population_alert.description")}</p>                    
            <ul>
                <li>
                    <Trans
                        t={t}
                        i18nKey="population_alert.fr_alert"
                        components={{
                            b: <b/>
                        }}
                    />
                </li>
                <li>
                    <Trans
                        t={t}
                        i18nKey="population_alert.saip"
                        components={{
                            b: <b/>,
                            br: <br/>
                        }}
                    />
                    <ul>
                        {saipGuidelinesNodes}
                    </ul>
                </li>
                <li>
                    <Trans 
                        t={t}
                        i18nKey="population_alert.public_medias"
                        components={{
                            b: <b/>
                        }}
                    />
                </li>
            </ul>

            {/* Radio frequencies */}
            <Highlight>
                <h4>{t("radio_frequencies.title")}</h4>
                <ul>
                    <li>{t("radio_frequencies.france_inter")}<b>{frequenciesToString(radioFreqs.franceInter)}</b><br/></li>
                    <li>{t("radio_frequencies.ici")}<b>{frequenciesToString(radioFreqs.ici)}</b><br/></li>
                    <li>{t("radio_frequencies.france_info")}<b>{frequenciesToString(radioFreqs.franceInfo)}</b><br/></li>
                </ul>
            </Highlight>
        </>);
}