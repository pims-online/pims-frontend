import { I18nextProvider } from "react-i18next";
import PimsScreen from "./lib/pims/PimsScreen";
import i18n from "./i18n/i18n";
import { RadioFrequencies, Risk } from "./providers/AppContextConfig";
import { RISK_TYPES } from "./lib/1-information/risks/constants";


export function PimsApp() {
    const radioFreqs: RadioFrequencies = {
        "franceInter": ["105,1"],
        "ici": ["98,2"],
        "franceInfo": ["89,9"],
    }

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

	return (
        <I18nextProvider i18n={i18n}>
            <PimsScreen
                riskList={risks}
                gatheringPlace="Le Parking"
                radioFreqs={radioFreqs} 
                emergencyKitLocation="Dans l'escalier de la cave"
                strimmingObligation={true}
                iodePastilleElegibility={true}
            />
        </I18nextProvider>
	);
};