import { RadioFrequencies, Risk, UsefulNumbers } from "./AppContextConfig";


export type PimsContent = {
    title: string|undefined;
    address: string;
    comment: string|undefined;
    numbers: UsefulNumbers;
    riskList: Risk[];
    gatheringPlace: string|undefined;
    emergencyKitLocation: string;
    strimmingObligation: boolean;
    iodePastilleElegibility: boolean;
    cityName: string;
    radioFreqs: RadioFrequencies;
};
