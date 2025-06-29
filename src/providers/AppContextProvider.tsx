/**
 * When the user navigates between screens, we want the inputs (and the states) to be preserved
 * all the way. The easiest way to enforce that is to keep these states in the Context.
 * Thus, every state related to an input should be setup in and passed through the Context.
 */

import { useState, createContext } from 'react';

import {
	type AppContextValues,
	APP_CONTEXT_DEFAULT_VALUES,
} from './AppContextConfig';

export const AppContext = createContext<AppContextValues>(
	APP_CONTEXT_DEFAULT_VALUES
);

export default function AppContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const searchParams = new URLSearchParams(window.location.search);
	const addressFromUrl = searchParams.get('address');
	const [address, setAddress] = useState<string>(
		addressFromUrl || APP_CONTEXT_DEFAULT_VALUES.address
	);
	const [coordinates, setCoordinates] = useState<
		AppContextValues['coordinates']
	>(APP_CONTEXT_DEFAULT_VALUES.coordinates);
	const [inseeCode, setInseeCode] = useState<number | undefined>(
		APP_CONTEXT_DEFAULT_VALUES.inseeCode
	);
	const [riskIdList, setRiskIdList] = useState<Array<string> | undefined>(
		APP_CONTEXT_DEFAULT_VALUES.riskIdList
	);
	const [riskIntensityMap, setRiskIntensityMap] = useState<Map<string, string> | undefined>(
		APP_CONTEXT_DEFAULT_VALUES.riskIntensityMap
	);
	const [iodePastilleEligibility, setIodePastilleEligibility] =
		useState<string>(APP_CONTEXT_DEFAULT_VALUES.iodePastilleEligibility);
	const [gatheringPlace, setGatheringPlace] = useState<string>(
		APP_CONTEXT_DEFAULT_VALUES.gatheringPlace
	);
	const [kitListChecked, setKitListChecked] = useState<boolean>(
		APP_CONTEXT_DEFAULT_VALUES.kitListChecked
	);
	const [emergencyKitStorage, setEmergencyKitStorage] = useState<string>(
		APP_CONTEXT_DEFAULT_VALUES.emergencyKitStorage
	);
	const [usefulNumbers, setUsefulNumbers] = useState<
		AppContextValues['usefulNumbers']
	>(APP_CONTEXT_DEFAULT_VALUES.usefulNumbers);
	const [radioFrequencies, setRadioFrequencies] = useState<
		AppContextValues['radioFrequencies']
	>(APP_CONTEXT_DEFAULT_VALUES.radioFrequencies);
	const [pimsFileName, setPimsFileName] = useState<string>(
		APP_CONTEXT_DEFAULT_VALUES.pimsFileName
	);
	const [pimsLocale, setPimsLocale] =
		useState<AppContextValues['pimsLocale']>('fr');
	const [apiResponse, setApiResponse] = useState<
		AppContextValues['apiResponse']
	>({
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
		riskIntensityMap,
		setRiskIntensityMap,
		iodePastilleEligibility,
		setIodePastilleEligibility,
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
