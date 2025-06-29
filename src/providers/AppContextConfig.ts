import { Dispatch, SetStateAction } from 'react';

export type Coordinates = {
	latitude: number | undefined;
	longitude: number | undefined;
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
export type DicrimInfo = {
    url: string,
    cityName: string,
}
export type Locale = 'fr' | 'en';
export type ApiResponse = {
	pims_url: string;
	file_size_ko: number;
	file_size_mo: number;
};

export type AppContextValues = {
	// State to manage the content of the Address Input Search Bar
	address: string;
	setAddress: Dispatch<SetStateAction<string>>;
	// State to manage the coordinates (latitude, longitude) related to the address
	coordinates: Coordinates;
	setCoordinates: Dispatch<SetStateAction<Coordinates>>;
	// State to manage the insee code of the city
	inseeCode: number | undefined;
	setInseeCode: Dispatch<SetStateAction<number | undefined>>;
	// State to manage the identifiers of the risks identified around the address
	riskIdList: Array<string> | undefined;
	setRiskIdList: Dispatch<SetStateAction<Array<string> | undefined>>;
	// State to manage the intensity of the risks at the given position
	riskIntensityMap: Map<string, string> | undefined;
	setRiskIntensityMap: Dispatch<Map<string, string> | undefined>;
	// State to manage eligibility to iode pastille
	iodePastilleEligibility: string;
	setIodePastilleEligibility: Dispatch<SetStateAction<string>>;
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
	// State to manage the link to the DICRIM
	dicrimInfo: DicrimInfo | undefined;
	setDicrimInfo: Dispatch<SetStateAction<DicrimInfo | undefined>>;
	// State to manage the final name of the file
	pimsFileName: string;
	setPimsFileName: Dispatch<SetStateAction<string>>;
	// State to manage the locale of the file
	pimsLocale: Locale;
	setPimsLocale: Dispatch<SetStateAction<Locale>>;
	// State to manage the API response after generating the pdf
	apiResponse: ApiResponse;
	setApiResponse: Dispatch<SetStateAction<ApiResponse>>;
};

export const APP_CONTEXT_DEFAULT_VALUES = {
	address: '',
	coordinates: {
		latitude: undefined,
		longitude: undefined,
	},
	inseeCode: undefined,
	riskIdList: undefined,
	riskIntensityMap: undefined,
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
	dicrimInfo: undefined,
	iodePastilleEligibility: '',
	pimsFileName: '',
} as AppContextValues;
