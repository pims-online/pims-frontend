import type { Dispatch, SetStateAction } from 'react';

import type { AppContextValues } from '../../providers';
import { Risk, StrimmingObligation } from '@/providers/AppContextConfig';
import { RISK_MAP_TYPE } from '../1-information/risks/constants';

const BACKEND_DOMAIN = import.meta.env.VITE_BACKEND_URL;

export type SerialisedRisk = {
	typeIdentifier: string;
	intensityInCity: string | undefined,
	intensityAtAddress: string | undefined,
};

export type PimsParams = {
	address: string;
	usefulNumbers: AppContextValues['usefulNumbers'];
	riskList: Array<Risk>;
	strimmingObligation: StrimmingObligation;
	emergencyKitStorage: string;
	radioFrequencies: AppContextValues['radioFrequencies'];
	gatheringPlace: string;
	locale: string;
	filename: string;
	screenWidth: number;
	iodePastilleElegibility: boolean;
	cityName: string;
	comment: string;
}

export type SerialisedPimsParams = {
	address: string;
	usefulNumbers: AppContextValues['usefulNumbers'];
	riskList: Array<SerialisedRisk>;
	strimmingObligation: StrimmingObligation;
	emergencyKitStorage: string;
	radioFrequencies: AppContextValues['radioFrequencies'];
	gatheringPlace: string;
	locale: string;
	filename: string;
	screenWidth: number;
	iodePastilleElegibility: boolean;
	cityName: string;
	comment: string;
};

type ApiResponse = AppContextValues['apiResponse'];

export const serialiseRisk = (risk: Risk): SerialisedRisk => {
	const serialisedRisk: SerialisedRisk = {
		typeIdentifier: risk.type.identifier,
		intensityAtAddress: risk.intensityAtAddress,
		intensityInCity: risk.intensityInCity,
	};

	return serialisedRisk;
}

export function deserialiseRisk(serialisedRisk: SerialisedRisk): Risk {
	const type = RISK_MAP_TYPE.get(serialisedRisk.typeIdentifier);
	if (type === undefined) {
		throw new Error(`Unknown risk type identifier '${serialisedRisk.typeIdentifier}'`);
	}

	const risk: Risk = {
		type,
		intensityInCity: serialisedRisk.intensityInCity,
		intensityAtAddress: serialisedRisk.intensityAtAddress,
	}

	return risk;
}

export function serialisePimsParams(params: PimsParams): SerialisedPimsParams {
	return {
		address: params.address,
		usefulNumbers: params.usefulNumbers,
		riskList: params.riskList.map(serialiseRisk),
		strimmingObligation: params.strimmingObligation,
		emergencyKitStorage: params.emergencyKitStorage,
		radioFrequencies: params.radioFrequencies,
		gatheringPlace: params.gatheringPlace,
		locale: params.locale,
		filename: params.filename,
		screenWidth: params.screenWidth,
		iodePastilleElegibility: params.iodePastilleElegibility,
		cityName: params.cityName,
		comment: params.comment,
	}
}

export function deserialisePimsParams(serialisedParams: SerialisedPimsParams): PimsParams {
	return {
		address: serialisedParams.address,
		usefulNumbers: serialisedParams.usefulNumbers,
		riskList: serialisedParams.riskList.map(deserialiseRisk),
		strimmingObligation: serialisedParams.strimmingObligation,
		emergencyKitStorage: serialisedParams.emergencyKitStorage,
		radioFrequencies: serialisedParams.radioFrequencies,
		gatheringPlace: serialisedParams.gatheringPlace,
		locale: serialisedParams.locale,
		filename: serialisedParams.filename,
		screenWidth: serialisedParams.screenWidth,
		cityName: serialisedParams.cityName,
		iodePastilleElegibility: serialisedParams.iodePastilleElegibility,
		comment: serialisedParams.comment,
	}
}

export const generatePims = async (
	params: PimsParams,
	setApiResponse: Dispatch<SetStateAction<ApiResponse>>
): Promise<boolean> => {
	const finalUrl = `${BACKEND_DOMAIN}/download-pims`;

	const serialisedParams = serialisePimsParams(params);

	try {
		const response = await fetch(finalUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(serialisedParams),
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
