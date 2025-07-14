import type { Dispatch, SetStateAction } from 'react';

import type { AppContextValues } from '../../providers';
import { Risk, StrimmingObligation } from '@/providers/AppContextConfig';

const BACKEND_DOMAIN = import.meta.env.VITE_BACKEND_URL;

export type SerialisedRisk = {
	typeIdentifier: string;
	intensityInCity: string | undefined,
	intensityAtAddress: string | undefined,
};

export type PimsParams = {
	address: string;
	usefulNumbers: AppContextValues['usefulNumbers'];
	riskList: Array<SerialisedRisk>;
	strimmingObligation: StrimmingObligation | undefined;
	emergencyKitStorage: string;
	radioFrequencies: AppContextValues['radioFrequencies'];
	gatheringPlace: string;
	locale: AppContextValues['pimsLocale'];
	filename: string;
	screenWidth: number;
	inseeCode: string | undefined;
	comment: string;
};

type ApiResponse = AppContextValues['apiResponse'];

export const serialiseRisk = (risk: Risk): SerialisedRisk => {
	const serialisedRisk: SerialisedRisk = {
		"typeIdentifier": risk.type.identifier,
		"intensityAtAddress": risk.intensityAtAddress,
		"intensityInCity": risk.intensityInCity,
	};

	return serialisedRisk;
}

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
