import type { Dispatch, SetStateAction } from 'react';

import type { AppContextValues } from '../../providers';
import { DicrimInfo } from '@/providers/AppContextConfig';

const BACKEND_DOMAIN = import.meta.env.VITE_BACKEND_URL;

export type PimsParams = {
	address: string;
	usefulNumbers: AppContextValues['usefulNumbers'];
	riskIdList: Array<string>;
	emergencyKitStorage: string;
	radioFrequencies: AppContextValues['radioFrequencies'];
	gatheringPlace: string;
	locale: AppContextValues['pimsLocale'];
	filename: string;
	screenWidth: number;
	inseeCode: number | undefined;
	dicrimInfo: DicrimInfo | undefined;
};

type ApiResponse = AppContextValues['apiResponse'];

export const generatePims = async (
	params: PimsParams,
	setApiResponse: Dispatch<SetStateAction<ApiResponse>>
): Promise<boolean> => {
	const finalUrl = `${BACKEND_DOMAIN}/download-pims`;

	if (params.inseeCode === undefined) {
		console.error('Cannot generate PIMS: inseeCode missing');
		return false;
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
