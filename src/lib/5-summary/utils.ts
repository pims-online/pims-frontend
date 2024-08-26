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
): Promise<boolean> => {
	const finalUrl = `${BACKEND_DOMAIN}/download-pims`;

	const apiIsDisabled = true;
	if (apiIsDisabled) {
		const pimsExampleUrl =
			'https://pims-flask-app-generated-pdf-development.s3.eu-west-3.amazonaws.com/pims_2024-08-26-08-16-47_Demo-David-Bretaud.pdf';

		const mockResponse = {
			pims_url: pimsExampleUrl,
			file_size_ko: 74.8,
			file_size_mo: 0.0748,
		} as ApiResponse;

		const resolve = () => setApiResponse(mockResponse);
		resolve();

		return true;
	}
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
			return true;
		} else {
			console.error('Failed to download the file');
			return false;
		}
	} catch (error) {
		console.error('Get an error in generate Pims : ', error);
		return false;
	}
};
