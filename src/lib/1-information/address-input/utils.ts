import type {
	DataGeopfResponse,
	DataGeopfFeature,
	GeorisqueAPIResponse,
} from './types';
import { dataTest1, dataTest2 } from './data-test';

const URL_DATA_GEOCODAGE = 'https://data.geopf.fr/geocodage/';
const URL_GEORISQUE = 'https://georisques.gouv.fr/api/';

/**
 * Given an input 'address', search for the closest results in geocodage database
 */
export const getAutocompletedAddresses = (
	address: string,
	updateList: (nextAddresses: Array<DataGeopfFeature>) => void
) => {
	const queryParams = new URLSearchParams(address).toString();
	// Limit the response to 15 results with 'limit=15'
	const finalUrl = URL_DATA_GEOCODAGE + 'search?q=' + queryParams + '&limit=15';

	fetch(finalUrl)
		.then(async (response) => {
			const data = (await response.json()) as DataGeopfResponse;
			updateList(data.features);
		})
		.catch((error) => {
			console.error('There was an error!', error);
			updateList([]);
		});
};

/**
 * Given a set of coordinates, query the georisque API to retrieve the risks related to the address
 */
export const getRisksAroundCoordinates = async (
	coordinates?: Array<number>,
	address?: string
): Promise<GeorisqueAPIResponse> => {
	let finalUrl = URL_GEORISQUE + 'resultats_rapport_risque?';
	if (coordinates) {
		finalUrl = finalUrl + 'latlon=' + (coordinates || []).join(',');
	} else {
		const queryParams = new URLSearchParams(address).toString();
		finalUrl = finalUrl + 'adresse=' + queryParams;
	}
	console.log('Waiting for the following api to be released : ', finalUrl);
	// TODO : remove the comments when the API is released
	// try {
	// 	const data = await fetch(finalUrl);
	// 	// @ts-expect-error Response and GeorisqueAPIResponse not matching
	// 	return data;
	// } catch (error) {
	// 	console.error('Get an error fetching Georisque API', error);
	// }
	const expectedData = Math.round(Math.random()) === 0 ? dataTest1 : dataTest2;
	return expectedData;
};

/**
 * Given a Georisque Response, return the list of the identifiers of the risks identified by georisque
 */
export const getEffectiveRiskIdentifierListFromGeorisqueResponse = (
	georisqueResponse: GeorisqueAPIResponse
): Array<string> => {
	const technologicalRisks = Object.entries(
		georisqueResponse.risquesTechnologiques
	)
		.filter((entry) => entry[1].present === true)
		.map((entry) => entry[0]);
	const naturalRisks = Object.entries(georisqueResponse.risquesNaturels)
		.filter((entry) => entry[1].present === true)
		.map((entry) => entry[0]);
	return [...naturalRisks, ...technologicalRisks];
};
