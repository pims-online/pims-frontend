import type { Dispatch, SetStateAction } from 'react';

import type {
	UsefulNumbers,
	RadioFrequencies,
	Locale,
	ApiResponse,
} from '../../AppContextProvider';

const BACKEND_DOMAIN = 'http://127.0.0.1:5000';

export type PimsParams = {
	usefulNumbers: UsefulNumbers;
	riskIdList: Array<string>;
	emergencyKitStorage: string;
	radioFrequencies: RadioFrequencies;
	gatheringPlace: string;
	locale: Locale;
	filename: string;
	screenWidth: number;
};

export const generatePims = async (
	params: PimsParams,
	setApiResponse: Dispatch<SetStateAction<ApiResponse>>
): Promise<void> => {
	const finalUrl = `${BACKEND_DOMAIN}/download-pims`;

	try {
		const response = await fetch(finalUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		});

		if (response.ok) {
			const data = (await response.json()) as ApiResponse;
			setApiResponse(data);
		} else {
			console.error('Failed to download the file');
		}
	} catch (error) {
		console.error('Get an error in generate Pims : ', error);
	}
};
