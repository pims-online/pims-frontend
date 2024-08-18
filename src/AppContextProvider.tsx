/**
 * When the user navigates between screens, we want the inputs (and the states) to be preserved
 * all the way. The easiest way to enforce that is to keep these states in the Context.
 * Thus, every state related to an input should be setup in and passed through the Context.
 */

import { useState, createContext, Dispatch, SetStateAction } from 'react';

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
	franceBleu: Array<string>;
	franceInter: Array<string>;
};
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
	inseeCode: number | string;
	setInseeCode: Dispatch<SetStateAction<number | string>>;
	// State to manage the identifiers of the risks identified around the address
	riskIdList: Array<string> | undefined;
	setRiskIdList: Dispatch<SetStateAction<Array<string> | undefined>>;
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
	inseeCode: '',
	riskIdList: undefined,
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
		franceBleu: [],
	} as RadioFrequencies,
	pimsFileName: '',
} as AppContextValues;

export const AppContext = createContext<AppContextValues>(
	APP_CONTEXT_DEFAULT_VALUES
);

export default function AppContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [address, setAddress] = useState<string>(
		APP_CONTEXT_DEFAULT_VALUES.address
	);
	const [coordinates, setCoordinates] = useState<Coordinates>(
		APP_CONTEXT_DEFAULT_VALUES.coordinates
	);
	const [inseeCode, setInseeCode] = useState<number | string>(
		APP_CONTEXT_DEFAULT_VALUES.inseeCode
	);
	const [riskIdList, setRiskIdList] = useState<Array<string> | undefined>(
		APP_CONTEXT_DEFAULT_VALUES.riskIdList
	);
	const [gatheringPlace, setGatheringPlace] = useState<string>(
		APP_CONTEXT_DEFAULT_VALUES.gatheringPlace
	);
	const [kitListChecked, setKitListChecked] = useState<boolean>(
		APP_CONTEXT_DEFAULT_VALUES.kitListChecked
	);
	const [emergencyKitStorage, setEmergencyKitStorage] = useState<string>(
		APP_CONTEXT_DEFAULT_VALUES.emergencyKitStorage
	);
	const [usefulNumbers, setUsefulNumbers] = useState<UsefulNumbers>(
		APP_CONTEXT_DEFAULT_VALUES.usefulNumbers
	);
	const [radioFrequencies, setRadioFrequencies] = useState<RadioFrequencies>(
		APP_CONTEXT_DEFAULT_VALUES.radioFrequencies
	);
	const [pimsFileName, setPimsFileName] = useState<string>(
		APP_CONTEXT_DEFAULT_VALUES.pimsFileName
	);
	const [pimsLocale, setPimsLocale] = useState<Locale>('fr');
	const [apiResponse, setApiResponse] = useState<ApiResponse>({
		pims_url: '',
		file_size_ko: 0,
		file_size_mo: 0,
	});

	const appContextValues = {
		address,
		setAddress,
		coordinates,
		setCoordinates,
		inseeCode,
		setInseeCode,
		riskIdList,
		setRiskIdList,
		gatheringPlace,
		setGatheringPlace,
		kitListChecked,
		setKitListChecked,
		emergencyKitStorage,
		setEmergencyKitStorage,
		usefulNumbers,
		setUsefulNumbers,
		radioFrequencies,
		setRadioFrequencies,
		pimsFileName,
		setPimsFileName,
		pimsLocale,
		setPimsLocale,
		apiResponse,
		setApiResponse,
	};

	return (
		<AppContext.Provider value={appContextValues}>
			{children}
		</AppContext.Provider>
	);
}
