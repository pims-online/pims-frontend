import { Risk } from '@/providers/AppContextConfig';
import { RISK_TYPE_MAP, RISK_INTENSITY_MAP } from '../risks/constants';
import type {
	GeoplateformeApiResponse,
	GeoplateformeApiFeature,
	GeorisqueApiResponse,
	GeolocationCoordinates,
} from './types';

const URL_DATA_GEOCODAGE = 'https://data.geopf.fr/geocodage/';
const URL_GEORISQUE = 'https://georisques.gouv.fr/api/v1/';

/**
 * Given an input 'address', search for the closest results in geocodage database
 */
export const getAutocompletedAddresses = (
	address: string,
	updateList: (nextAddresses: Array<GeoplateformeApiFeature>) => void
) => {
	const queryParams = new URLSearchParams(address).toString();
	// Limit the response to 15 results with 'limit=15'
	const finalUrl = URL_DATA_GEOCODAGE + 'search?q=' + queryParams + '&limit=10';

	fetch(finalUrl)
		.then(async (response) => {
			const data = (await response.json()) as GeoplateformeApiResponse;
			updateList(data.features);
		})
		.catch((error) => {
			console.error('There was an error!', error);
			updateList([]);
		});
};

/**
 * Use the navigator feature to retrieve the user current position
 */
export const getUserLocation = (
	fetchGeoplateforme: (latitude: number, longitude: number) => Promise<void>
) => {
	// if geolocation is supported by the users browser
	const options = {
		enableHighAccuracy: true,
		timeout: 4000,
		maximumAge: 0,
	};
	if (navigator.geolocation) {
		// get the current users location
		navigator.geolocation.getCurrentPosition(
			// If position can be retrieved
			async (position) => {
				const { latitude, longitude } = position.coords;

				await fetchGeoplateforme(latitude, longitude);
			},
			// If there was an error getting the users location
			(error) => {
				console.error('Error getting user location:', error);
			},
			options
		);
	}
	// If geolocation is not supported by the users browser
	else {
		console.error('Geolocation is not supported by this browser.');
	}
};

/**
 * Retrive from Geoplateforme the Feature based on coordinates, and update the feature list
 */
export const getGeoplateformeFeaturesFromCoordinates = async (
	coordinates: GeolocationCoordinates
) => {
	try {
		if (!coordinates) {
			return [];
		}
		const finalUrl =
			URL_DATA_GEOCODAGE +
			'reverse?' +
			`lon=${coordinates.longitude}` +
			'&' +
			`lat=${coordinates.latitude}` +
			'&limit=10';
		const response = await fetch(finalUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = (await response.json()) as GeoplateformeApiResponse;
		return data.features;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const mockGeoplateformeFeature = (
	coordinates?: Array<number>,
	address?: string,
	inseeCode?: number
) => {
	return {
		geometry: {
			coordinates: coordinates,
		},
		properties: {
			label: address,
			citycode: `${inseeCode}`,
		},
	} as GeoplateformeApiFeature;
};

/**
 * Given a set of coordinates, query the georisque API to retrieve the risks related to the address
 */
export const getRisksAroundCoordinates = async (
	coordinates?: Array<number>,
	address?: string,
	inseeCode?: number
): Promise<GeorisqueApiResponse | undefined> => {
	// Documentation : https://www.georisques.gouv.fr/doc-api#/Rapport%20PDF%20et%20JSON/generateRapportRisqueJson
	let finalUrl = URL_GEORISQUE + 'resultats_rapport_risque?';

	// We add query params from the most precised to the lowest
	if (coordinates !== undefined) {
		finalUrl = finalUrl + 'latlon=' + (coordinates || []).join(',');
	} else if (address !== undefined) {
		const queryParams = new URLSearchParams(address).toString();
		finalUrl = finalUrl + 'adresse=' + queryParams;
	} else if (inseeCode !== undefined) {
		finalUrl = finalUrl + 'code_insee=' + inseeCode;
	} else {
		console.error('getRisksAroundCoordinates expects one argument to be provided');
		return undefined;
	}

	try {
		const response = await fetch(finalUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			const data = (await response.json()) as GeorisqueApiResponse;
			return data;
		}
	} catch (error) {
		console.error('Get an error fetching Georisque API', error);
	}
	return undefined;
};

/*
	Given a Géorisque risk intensity, return the corresponding internal intensity identifier
*/
const importRiskIntensity = (
	intensityStr: string | undefined
): string | undefined => {
	if (intensityStr === undefined) {
		return undefined;
	}

	const intensity = RISK_INTENSITY_MAP.get(intensityStr)
	if (intensity === undefined) {
		console.warn(`Unknown GeoRisque risk level: ${intensityStr}`)
		return undefined;
	}

	return intensity;
}

/*
	Given a georisqueResponse, returns the associated risk list
*/
export const importRiskList = (
	georisqueResponse: GeorisqueApiResponse
): Array<Risk> => {
	const riskList = new Array<Risk>();

	const allRisks = Object.entries(georisqueResponse.risquesTechnologiques).concat(Object.entries(georisqueResponse.risquesNaturels));
	allRisks.forEach(entry => {
		const georisqueId = entry[0];
		const georisqueRisk = entry[1];

		if (georisqueRisk.present !== true) {
			return;
		}

		const types = RISK_TYPE_MAP.get(georisqueId);
		if (types === undefined) {
			console.warn(`Unknown GeoRisque identifier: ${georisqueId}`);
			return;
		}

		if (georisqueRisk.libelleStatutAdresse === undefined) {
			console.warn(`Unknown intensity at address for risk ${georisqueId}`);
		}
		if (georisqueRisk.libelleStatutCommune === undefined) {
			console.warn(`Unknown intensity in city for risk ${georisqueId}`);
		}
		const intensityAtAddress = importRiskIntensity(georisqueRisk.libelleStatutAdresse);
		const intensityInCity 	 = importRiskIntensity(georisqueRisk.libelleStatutCommune);
		
		types.forEach(type => {
			const risk: Risk = {
				type: type,
				intensityAtAddress: intensityAtAddress,
				intensityInCity: intensityInCity,
			};

			riskList.push(risk);
		});
	});

	return riskList;
}
