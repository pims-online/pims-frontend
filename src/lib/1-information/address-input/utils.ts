import { RISK_IDENTIFIER_MAP } from '../risks/constants';
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
	inseeCode?: string | number
) => {
	return {
		geometry: {
			coordinates: coordinates,
		},
		properties: {
			label: address,
			citycode: inseeCode,
		},
	} as GeoplateformeApiFeature;
};

/**
 * Given a set of coordinates, query the georisque API to retrieve the risks related to the address
 */
export const getRisksAroundCoordinates = async (
	coordinates?: Array<number>,
	address?: string,
	inseeCode?: string | number
): Promise<GeorisqueApiResponse | undefined> => {
	// Documentation : https://www.georisques.gouv.fr/doc-api#/Rapport%20PDF%20et%20JSON/generateRapportRisqueJson
	let finalUrl = URL_GEORISQUE + 'resultats_rapport_risque?';

	// We add query params from the most precised to the lowest
	if (coordinates) {
		finalUrl = finalUrl + 'latlon=' + (coordinates || []).join(',');
	} else if (address) {
		const queryParams = new URLSearchParams(address).toString();
		finalUrl = finalUrl + 'adresse=' + queryParams;
	} else {
		finalUrl = finalUrl + 'code_insee=' + inseeCode;
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

/**
 * Given a Georisque Response, return the list of the identifiers of the risks identified by georisque
 */
export const getEffectiveRiskIdentifierListFromGeorisqueResponse = (
	georisqueResponse: GeorisqueApiResponse
): Array<string> => {
	const riskIdList = new Array<string>();

	const allRisks = Object.entries(georisqueResponse.risquesTechnologiques).concat(Object.entries(georisqueResponse.risquesNaturels));
	allRisks.forEach(entry => {
		if (entry[1].present !== true) {
			return;
		}

		const identifier = RISK_IDENTIFIER_MAP.get(entry[0]);
		if (identifier === undefined) {
			console.warn(`Unknown GeoRisque identifier: ${entry[0]}`);
			return;
		}
		
		riskIdList.push(identifier);
	});

	return riskIdList;
};

/**
 * Given a Georisque Response, return a mapping of georisque label to risk intensity level at the targetted address
 */
export const getRiskIntensityMapFromGeorisqueResponse = (
	georisqueResponse: GeorisqueApiResponse
): Map<string, string> => {
	const intensityMap = new Map<string, string>();

	const allRisks = Object.entries(georisqueResponse.risquesTechnologiques).concat(Object.entries(georisqueResponse.risquesNaturels));
	allRisks.forEach((entry) => {
		const identifier = RISK_IDENTIFIER_MAP.get(entry[0]);
		if (identifier === undefined) {
			console.warn(`Unknown GeoRisque identifier: ${entry[0]}`);
			return;
		}

		intensityMap.set(identifier, entry[1].libelleStatutAdresse);
	});

	return intensityMap;
};
