import { useEffect, useState } from "react";

import { RadioFrequencies, Risk, UsefulNumbers } from "./AppContextConfig";


export type PimsContent = {
    title: string;
    address: string;
    comment: string;
    numbers: UsefulNumbers;
    riskList: Risk[];
    gatheringPlace: string;
    emergencyKitLocation: string;
    strimmingObligation: boolean;
    iodePastilleElegibility: boolean;
    cityName: string
    radioFreqs: RadioFrequencies;
};


export var setPimsContent: (pimsContent: PimsContent) => void = () => {};


export function usePimsContent(): PimsContent|undefined {
    const [pimsContent, _setPimsContent] = useState<PimsContent>();

    useEffect(() => {
        setPimsContent = _setPimsContent;
    }, [_setPimsContent]);

    return pimsContent;
}