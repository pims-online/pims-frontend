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

export type AppContextValues = {
	// State to manage the content of the Address Input Search Bar
	address: string;
	setAddress: Dispatch<SetStateAction<string>>;
	// State to manage the coordinates (latitude, longitude) related to the address
	coordinates: Coordinates;
	setCoordinates: Dispatch<SetStateAction<Coordinates>>;
	// State to manage the identifiers of the risks identified around the address
	riskIdList: Array<string>;
	setRiskIdList: Dispatch<SetStateAction<Array<string>>>;
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
};

export const AppContext = createContext<AppContextValues>(
	{} as AppContextValues
);

export default function AppContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [address, setAddress] = useState<string>('');
	const [coordinates, setCoordinates] = useState<Coordinates>({
		latitude: undefined,
		longitude: undefined,
	});
	const [riskIdList, setRiskIdList] = useState<Array<string>>([]);
	const [kitListChecked, setKitListChecked] = useState<boolean>(false);
	const [emergencyKitStorage, setEmergencyKitStorage] = useState<string>('');
	const [usefulNumbers, setUsefulNumbers] = useState<UsefulNumbers>({
		townHall: '',
		relatives: '',
		insurance: '',
		others: '',
	});
	const [radioFrequencies, setRadioFrequencies] = useState<RadioFrequencies>({
		franceInter: [],
		franceInfo: [],
		franceBleu: [],
	});
	const [pimsFileName, setPimsFileName] = useState<string>('');

	const appContextValues = {
		address,
		setAddress,
		coordinates,
		setCoordinates,
		riskIdList,
		setRiskIdList,
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
	};

	return (
		<AppContext.Provider value={appContextValues}>
			{children}
		</AppContext.Provider>
	);
}
