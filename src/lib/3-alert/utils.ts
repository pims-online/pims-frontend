import type { AppContextValues } from '../../providers';

type Coordinates = AppContextValues['coordinates'];
type RadioFrequencies = AppContextValues['radioFrequencies'];

/**
 * Given latlon, return an html content with several radio brands and their frequencies
 */
const getRadioFrequenciesAroundLatLon = async (
	latitude: Coordinates['latitude'],
	longitude: Coordinates['longitude']
): Promise<string | null> => {
	const proxyDomain = import.meta.env.VITE_SERVERLESS_API_URL;
	const url = `${proxyDomain}/api/proxy?latitude=${latitude}&longitude=${longitude}`;
	try {
		const response = await fetch(url);
		console.log('Get client response :  ', response);
		if (response.ok) {
			const text = await response.text();
			return text;
		} else {
			console.error(`HTTP error: ${response.status}`);
			return null;
		}
	} catch (error) {
		console.error(`Request error: ${error}`);
		return null;
	}
};

/**
 * Parse specifically the result of getRadioFrequenciesAroundLatLon
 * Example of one line
 * <div
				class="pb-05"
				tabindex="0"
				aria-label="France Bleu orleans - Orleans - 100.9MHz"
			>
				<img
					src="modules/radiofrance/rdf_frequence/images/picto-france-bleu.gif"
					alt="logo radio France Bleu"
				/>{' '}
				<strong>France Bleu orleans</strong> - Orleans -{' '}
				<strong>100.9MHz</strong>
			</div>
*/
const parseRadioFrequencies = (htmlContent: string): RadioFrequencies => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(htmlContent, 'text/html');
	const frequencies: RadioFrequencies = {
		franceInter: [],
		franceInfo: [],
		franceBleu: [],
	};

	// Look up for div containing frequencies data
	const divs = doc.querySelectorAll('div.pb-05');
	divs.forEach((div) => {
		const strongElements = div.querySelectorAll('strong');
		if (strongElements.length >= 2) {
			// Extract the radio brand in the first strong element
			const radioBrand = strongElements[0].textContent?.trim() || '';
			// Extract the related frequency in the second strong element
			let frequency = strongElements[1].textContent?.trim() || '';
			// Replace MHz with FM
			frequency = frequency.replace('MHz', ' FM');

			if (radioBrand && frequency) {
				if (radioBrand.includes('France Bleu')) {
					frequencies.franceBleu.push(frequency);
				}
				if (radioBrand.includes('franceinfo')) {
					frequencies.franceInfo.push(frequency);
				}
				if (radioBrand.includes('France Inter')) {
					frequencies.franceInter.push(frequency);
				}
			}
		}
	});

	return frequencies;
};

export const getRadioFrequencies = async ({
	latitude,
	longitude,
}: Coordinates): Promise<RadioFrequencies> => {
	const radioFrequenciesHTMLContent = await getRadioFrequenciesAroundLatLon(
		latitude,
		longitude
	);
	if (radioFrequenciesHTMLContent) {
		return parseRadioFrequencies(radioFrequenciesHTMLContent);
	} else {
		const frequencies: RadioFrequencies = {
			franceInter: [],
			franceInfo: [],
			franceBleu: [],
		};
		return frequencies;
	}
};
