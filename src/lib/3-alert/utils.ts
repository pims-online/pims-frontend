import type { AppContextValues } from '../../providers';

type RadioFrequencies = AppContextValues['radioFrequencies'];


export const getRadioFrequencies = async (
	insee_code : string|undefined,
): Promise<RadioFrequencies|undefined> => {
	if (insee_code === undefined) {
		return undefined;
	}

	const BACKEND_DOMAIN = import.meta.env.VITE_BACKEND_URL;
	const url = `${BACKEND_DOMAIN}/radio-frequencies/${insee_code}`;

	try {
		const response = await fetch(url);
		const text: RadioFrequencies = await response.json();
		return text;
	} catch (error) {
		return undefined;
	}
};
