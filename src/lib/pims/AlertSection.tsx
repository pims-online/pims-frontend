import { Trans, useTranslation } from "react-i18next";

import { PimsTitle } from "./PimsTitle";
import { RadioFrequencies } from "@/providers/AppContextConfig";
import HighlightRaw from "@/components/HighlightRaw";

import step3Light from '@/assets/step-icons/step-3-light.svg';
// The PDF is always rendered in light mode, hence the light variant only.
import logoFrAlertLight from '@/assets/alert-icons/fr_alert_light_mode.svg';
import logoSaipLight from '@/assets/alert-icons/logo_saip_light_mode.svg';


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
            <PimsTitle strongText={t("title_strong")} lightText={t("title_light")} icon={step3Light} id="pims-pdf-section-alert"/>
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
                <li className="pims-pdf-alert__logo-item">
                    <img
                        className="pims-pdf-alert__logo"
                        src={logoFrAlertLight}
                        alt=""
                    />
                    <span>
                        <Trans
                            t={t}
                            i18nKey="population_alert.fr_alert"
                            components={{
                                b: <b/>
                            }}
                        />
                    </span>
                </li>
                <li className="pims-pdf-alert__logo-item">
                    <img
                        className="pims-pdf-alert__logo"
                        src={logoSaipLight}
                        alt=""
                    />
                    <div>
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
                    </div>
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
            <HighlightRaw>
                <h4>{t("radio_frequencies.title")}</h4>
                <ul>
                    <li>{t("radio_frequencies.france_inter")}<b>{frequenciesToString(radioFreqs.franceInter)}</b><br/></li>
                    <li>{t("radio_frequencies.ici")}<b>{frequenciesToString(radioFreqs.ici)}</b><br/></li>
                    <li>{t("radio_frequencies.france_info")}<b>{frequenciesToString(radioFreqs.franceInfo)}</b><br/></li>
                </ul>
            </HighlightRaw>
        </>);
}