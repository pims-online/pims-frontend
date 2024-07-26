import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getRadioFrequencies } from './utils';

export default function RadioFrequencies() {
	const { t } = useTranslation('alert_screen');
	const [frequencies, setFrequencies] = useState<{ [key: string]: string[] }>({
		'France Inter': [],
		franceinfo: [],
		'France Bleu': [],
	});

	useEffect(() => {
		const fetchFrequencies = async () => {
			try {
				const data = await getRadioFrequencies({
					latitude: 47.873298,
					longitude: 1.847517,
				});
				setFrequencies(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchFrequencies();
	}, []);

	return (
		<div>
			<h5 className="pims__screen-title">{t('radio_frequencies.title')}</h5>
			<p>{t('radio_frequencies.near_station')}</p>
			<ul className="pims__toothed-list">
				<li>France Inter : {frequencies['France Inter'].join(', ')}</li>
				<li>France Bleu : {frequencies['France Bleu'].join(', ')}</li>
				<li>France Info : {frequencies['franceinfo'].join(', ')}</li>
			</ul>
		</div>
	);
}
