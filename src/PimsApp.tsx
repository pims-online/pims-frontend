import { I18nextProvider } from "react-i18next";
import PimsScreen from "./lib/pims/PimsScreen";
import i18n from "./i18n/i18n";
import { RadioFrequencies } from "./providers/AppContextConfig";


export function PimsApp() {
    const radioFreqs: RadioFrequencies = {
        "franceInter": ["105,1"],
        "ici": ["98,2"],
        "franceInfo": ["89,9"],
    }

	return (
        <I18nextProvider i18n={i18n}>
            <PimsScreen radioFreqs={radioFreqs}/>
        </I18nextProvider>
	);
};