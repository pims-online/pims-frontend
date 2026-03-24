/**
 * When the user navigates between screens, we want the inputs (and the states) to be preserved
 * all the way. The easiest way to enforce that is to keep these states in the Context.
 * Thus, every state related to an input should be setup in and passed through the Context.
 */

import { useState, createContext } from 'react';

import {
	type AppContextValues,
	APP_CONTEXT_DEFAULT_VALUES,
	Position,
	Risk,
	StrimmingObligation,
} from './AppContextConfig';

export const AppContext = createContext<AppContextValues>(
	APP_CONTEXT_DEFAULT_VALUES
);

export default function AppContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [position, setPosition] = useState<Position|undefined>(undefined);
	const [riskList, setRiskList] = useState<Array<Risk> | undefined>(
		APP_CONTEXT_DEFAULT_VALUES.riskList
	);
	const [iodePastilleEligibility, setIodePastilleEligibility] =
		useState<string|undefined>(APP_CONTEXT_DEFAULT_VALUES.iodePastilleEligibility);
	const [strimmingObligation, setStrimmingObligation] =
		useState<StrimmingObligation | undefined>(APP_CONTEXT_DEFAULT_VALUES.strimmingObligation);
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
	const [pimsComment, setPimsComment] = useState<string>(
		APP_CONTEXT_DEFAULT_VALUES.pimsComment
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

	const appContextValues: AppContextValues = {
		position,
		setPosition,
		riskList,
		setRiskList,
		iodePastilleEligibility,
		setIodePastilleEligibility,
		strimmingObligation,
		setStrimmingObligation,
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
		pimsComment,
		setPimsComment,
	};

	return (
		<AppContext.Provider value={appContextValues}>
			{children}
		</AppContext.Provider>
	);
}
