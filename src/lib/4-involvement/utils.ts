import { DicrimInfo, PaginatedResponseDicrimModel } from "./types";


// Returns the download link to the DICRIM of a municipality.
export const getDicrimLink = async(inseeCode: number | undefined): Promise<DicrimInfo | undefined> => {
    // Skip if insee code is missing
    if (inseeCode === undefined) {
        return undefined;
    }

    // Fetch the availability of a DICRIM on the Géorisque API
    const url = `https://georisques.gouv.fr/api/v1/gaspar/dicrim?code_insee=${inseeCode}&page=1&page_size=1`;
    const response = await fetch(url);
    const content: PaginatedResponseDicrimModel = await response.json();

    // Check that there is a DICRIM available
    if (content.data.length <= 0) {
        return undefined;
    }

    // Return the link to the DICIRM
    return {
        url: `https://files.georisques.fr/DICRIM/DICRIM_${inseeCode}.pdf`,
        cityName: content.data[0].libelle_commune,
    };
}