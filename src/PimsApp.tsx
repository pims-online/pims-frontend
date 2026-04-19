import { I18nextProvider } from "react-i18next";
import PimsScreen from "./lib/pims/PimsScreen";
import i18n from "./i18n/i18n";
import { RadioFrequencies, Risk, UsefulNumbers } from "./providers/AppContextConfig";
import { RISK_TYPES } from "./lib/1-information/risks/constants";
import { PimsContent } from "./providers/PdfContext";


function getOptionnalStrParam(params: URLSearchParams, name: string): string|undefined {
    const value = params.get(name);
    if (value === null) {
        return undefined;
    }

    return value;
}

function getMandatoryStrParam(params: URLSearchParams, name: string): string {
    const value = params.get(name);
    if (value === null) {
        throw new Error(`Missing mandatory argument '${name}'`);
    }

    return value;
}

function getMandatoryBoolParam(params: URLSearchParams, name: string): boolean {
    const value = params.get(name);
    if (value === null) {
        throw new Error(`Missing mandatory argument '${name}'`);
    } else if (value === "true") {
        return true;
    } else if (value === "false") {
        return false;
    } else {
        throw new Error(`Invalid format for argument '${name}'. Expecting 'true' or 'false'.`);
    }
}


function getPimsParams(): PimsContent {
    // ===== Parse params =====
    const params = new URLSearchParams(window.location.search);

    const title = getOptionnalStrParam(params, "title");
    const address = getMandatoryStrParam(params, "address");
    const comment = getOptionnalStrParam(params, "comment");

    // TODO: Numbers
    // TODO: Risk list

    const gatheringPlace = getOptionnalStrParam(params, "gathering_place");

    // TODO: Radio frequencies

    const emergencyKitLocation = getMandatoryStrParam(params, "emergency_kit_location");
    const strimmingObligation = getMandatoryBoolParam(params, "strimming_obligation");
    const cityName = getMandatoryStrParam(params, "city_name");
    const iodePastilleElegibility = getMandatoryBoolParam(params, "iode_pastille_elegebility");


    // ===== Mockup for not implemented params =====
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
    ];

    const numbers: UsefulNumbers = {
        townHall: "04 76 76 36 36",
        relatives: "06 98 34 68 71",
        insurance: "01 39 65 78 16",
        others: "",
    }

    
    return {
        title,
        address,
        comment,
        numbers,
        riskList: risks,
        gatheringPlace,
        emergencyKitLocation,
        strimmingObligation,
        iodePastilleElegibility,
        cityName,
        radioFreqs,
    }
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