import { Dispatch, SetStateAction } from 'react';

const BACKEND_DOMAIN = import.meta.env.VITE_BACKEND_URL;

export const getIodePastilleEligibility = async (
	inseeCode: number | string,
	setIodePastilleEligibility: Dispatch<SetStateAction<string>>,
	setIsFetchingAPI: Dispatch<SetStateAction<boolean>>
): Promise<void> => {
	const updateEligibility = (value: string) => {
		setIodePastilleEligibility(value);
		setIsFetchingAPI(false);
		return;
	};
	// Start fetching
	setIsFetchingAPI(true);

	if (!inseeCode) {
		updateEligibility('');
	}

	const finalUrl = `${BACKEND_DOMAIN}/iode-pastille-eligibility/${inseeCode}`;
	try {
		const response = await fetch(finalUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			const data = (await response.json()) as {
				eligible: boolean;
				inb_name: string;
			};
			updateEligibility(data.inb_name);
		} else {
			console.error('Failed to get eligibility to iode pastille');
			updateEligibility('');
		}
	} catch (error) {
		console.error(error);
		updateEligibility('');
	}
};
