import { I18nextProvider } from "react-i18next";
import PimsScreen from "./lib/pims/PimsScreen";
import i18n from "./i18n/i18n";
import { deserialisePimsParams, PimsParams, SerialisedPimsParams } from "./lib/5-summary/utils";


function decodeBase64(base64: string): string {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    const decoder = new TextDecoder();
    return decoder.decode(bytes);
}



function getPimsParams(): PimsParams {
    // ===== Parse params =====
    const params = new URLSearchParams(window.location.search);
    const rawQuerry = params.get("q");

    if (rawQuerry === null) {
        throw new Error("Missing required param 'q'");
    }
    
    const serialisedContent: SerialisedPimsParams = JSON.parse(decodeBase64(rawQuerry))
    const content: PimsParams = deserialisePimsParams(serialisedContent);

    return content;
}


export function PimsApp() {
    const content = getPimsParams();

    // ===== Return pims =====
	return (
        <I18nextProvider i18n={i18n}>
            <PimsScreen
                {...content}
            />
        </I18nextProvider>
	);
};