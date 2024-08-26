import type { Dispatch, SetStateAction } from 'react';

import type { AppContextValues } from '../../providers';

const BACKEND_DOMAIN = import.meta.env.VITE_BACKEND_URL;

export type PimsParams = {
	usefulNumbers: AppContextValues['usefulNumbers'];
	riskIdList: Array<string>;
	emergencyKitStorage: string;
	radioFrequencies: AppContextValues['radioFrequencies'];
	gatheringPlace: string;
	locale: AppContextValues['pimsLocale'];
	filename: string;
	screenWidth: number;
};

type ApiResponse = AppContextValues['apiResponse'];

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
