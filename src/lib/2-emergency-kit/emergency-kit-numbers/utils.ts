import { type AnnuaireAPIResponse } from './types';

const ANNUAIRE_API_URL = 'https://api-lannuaire.service-public.fr/';
const EXPLORE_PATH =
	'/api/explore/v2.1/catalog/datasets/api-lannuaire-administration/records';

export const getTownHallNumber = async (inseeCode?: number | string) => {
	if (!inseeCode) return '';

	const queryParam = '?where';
	const queryName = 'nom%20LIKE%20%22Mairie%22'; // Filter to have only Mairie
	const queryinseeCode = `code_insee_commune%20LIKE%20%22${inseeCode}%22`; // Filter to fit to the given code insee
	const finalQuerySelector = `${queryParam}=${queryName}%20AND%20${queryinseeCode}&limit=20`;
	const finalUrl = ANNUAIRE_API_URL + EXPLORE_PATH + finalQuerySelector;

	try {
		const response = await fetch(finalUrl);
		const data = (await response.json()) as AnnuaireAPIResponse;

		if (data.total_count > 0) {
			const firstResult = data.results[0];

			const telephoneData = JSON.parse(firstResult.telephone);
			if (telephoneData.length > 0) {
				return telephoneData[0].valeur || '';
			}
		}
	} catch (error) {
		console.error('The annuaire API raised an error : ', error);
		return '';
	}
};
