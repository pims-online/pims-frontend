import { I18nextProvider } from "react-i18next";
import { PimsScreen } from "./lib/pims/PimsScreen";
import i18n from "./i18n/i18n";


export function PimsApp() {
	return (
        <I18nextProvider i18n={i18n}>
            <PimsScreen />
        </I18nextProvider>
	);
};