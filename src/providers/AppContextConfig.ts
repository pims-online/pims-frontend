import { Dispatch, SetStateAction } from 'react';

export type Coordinates = {
	latitude: number;
	longitude: number;
};
export type Position = {
	address: string;
	inseeCode: string;
	coords: Coordinates;
};
export type UsefulNumbers = {
	townHall: string;
	relatives: string;
	insurance: string;
	others: string;
};
export type RadioFrequencies = {
	franceInfo: Array<string>;
	ici: Array<string>;
	franceInter: Array<string>;
};
export type RiskType = {
	identifier: string;
	georisqueApiIdentifier: string;
	preventionListLength: number;
	iconFileName: Array<string>;
};
export type Risk = {
	type: RiskType,
	intensityInCity: string | undefined,
	intensityAtAddress: string | undefined,
}
export type StrimmingObligation = {
	url: string,
	affected: boolean,
}
export type ApiResponse = {
	pims_url: string;
	file_size_ko: number;
	file_size_mo: number;
};

export type AppContextValues = {
	// State to manage the position of the PIMS as a single object
	position: Position|undefined;
	setPosition: Dispatch<SetStateAction<Position|undefined>>;
	// State to manage the list of risks
	riskList: Array<Risk> | undefined;
	setRiskList: Dispatch<SetStateAction<Array<Risk> | undefined>>;
	// State to manage eligibility to iode pastille
	iodePastilleEligibility: string | undefined;
	setIodePastilleEligibility: Dispatch<SetStateAction<string | undefined>>;
	// State to manage strimming obligation
	strimmingObligation: StrimmingObligation | undefined;
	setStrimmingObligation: Dispatch<SetStateAction<StrimmingObligation | undefined>>;
	// State to manage the gathering place
	gatheringPlace: string;
	setGatheringPlace: Dispatch<SetStateAction<string>>;
	// State to manage whether the kit list has been read
	kitListChecked: boolean;
	setKitListChecked: Dispatch<SetStateAction<boolean>>;
	// State to manage the location where the emergency kit is stored
	emergencyKitStorage: string;
	setEmergencyKitStorage: Dispatch<SetStateAction<string>>;
	// State to manage useful numbers inputs
	usefulNumbers: UsefulNumbers;
	setUsefulNumbers: Dispatch<SetStateAction<UsefulNumbers>>;
	// State to manage the radio frequencies of 3 informative brands
	radioFrequencies: RadioFrequencies;
	setRadioFrequencies: Dispatch<SetStateAction<RadioFrequencies>>;
	// State to manage the final name of the file
	pimsFileName: string;
	setPimsFileName: Dispatch<SetStateAction<string>>;
	// State to manage the comment of the PIMS
	pimsComment: string;
	setPimsComment: Dispatch<SetStateAction<string>>;
	// State to manage the API response after generating the pdf
	apiResponse: ApiResponse;
	setApiResponse: Dispatch<SetStateAction<ApiResponse>>;
};

export const APP_CONTEXT_DEFAULT_VALUES = {
	position: undefined,
	riskList: undefined,
	gatheringPlace: '',
	kitListChecked: false,
	emergencyKitStorage: '',
	usefulNumbers: {
		townHall: '',
		relatives: '',
		insurance: '',
		others: '',
	},
	radioFrequencies: {
		franceInter: [],
		franceInfo: [],
		ici: [],
	} as RadioFrequencies,
	strimmingObligation: undefined,
	iodePastilleEligibility: undefined,
	pimsFileName: '',
	pimsComment: '',
} as AppContextValues;
