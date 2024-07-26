/**
 * Given latlon, return an html content with several radio brands and their frequencies
 */
const getRadioFrequenciesAroundLatLon = async (
	latitude: number,
	longitude: number
): Promise<string | null> => {
	const url = `https://www.radiofrance.com/frequences_ajax/${latitude}/${longitude}/SP`;
	try {
		const response = await fetch(url);
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
const parseRadioFrequencies = (
	htmlContent: string
): {
	[key: string]: string[];
} => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(htmlContent, 'text/html');
	const frequencies: { [key: string]: string[] } = {
		'France Inter': [],
		franceinfo: [],
		'France Bleu': [],
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
				// France Bleu brands always contain sth more, like 'France Bleu orleans'
				// Thus we need to manually gather them in the 'France Bleu' array value
				const franceBleuId = 'France Bleu';
				const isFranceBleu = radioBrand.includes(franceBleuId);
				if (isFranceBleu) {
					frequencies[franceBleuId].push(frequency);
				}

				// Work nice for other brands
				if (!frequencies[radioBrand]) {
					frequencies[radioBrand] = [];
				}
				frequencies[radioBrand].push(frequency);
			}
		}
	});

	return frequencies;
};

export const getRadioFrequencies = async ({
	latitude,
	longitude,
}: {
	latitude: number;
	longitude: number;
}): Promise<{
	[key: string]: string[];
}> => {
	const radioFrequenciesHTMLContent = await getRadioFrequenciesAroundLatLon(
		latitude,
		longitude
	);
	if (radioFrequenciesHTMLContent) {
		return parseRadioFrequencies(radioFrequenciesHTMLContent);
	} else {
		const frequencies: { [key: string]: string[] } = {
			'France Inter': [],
			franceinfo: [],
			'France Bleu': [],
		};
		return frequencies;
	}
};
