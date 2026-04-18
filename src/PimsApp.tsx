import { I18nextProvider } from "react-i18next";
import PimsScreen from "./lib/pims/PimsScreen";
import i18n from "./i18n/i18n";
import { usePimsContent } from "./providers/PdfContext";



export function PimsApp() {
    const pimsContent = usePimsContent();

    if (pimsContent !== undefined) {
        return (
            <I18nextProvider i18n={i18n}>
                <PimsScreen
                    {...pimsContent}
                />
            </I18nextProvider>
        );
    } else {
        return (
            <div className='pims__main-layout'>
                <h1>PIMS content missing</h1>
            </div>
            );
    }
};