import { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../../AppContextProvider';

import { getRadioFrequencies } from './utils';

export default function RadioFrequencies() {
	const { t } = useTranslation('alert_screen');
	const { radioFrequencies, setRadioFrequencies, coordinates } =
		useContext(AppContext);

	useEffect(() => {
		const fetchFrequencies = async () => {
			try {
				const data = await getRadioFrequencies(coordinates);
				setRadioFrequencies(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchFrequencies();
	}, [coordinates, setRadioFrequencies]);

	return (
		<div>
			<h5 className="pims__screen-title">{t('radio_frequencies.title')}</h5>
			<p>{t('radio_frequencies.near_station')}</p>
			<ul className="pims__toothed-list">
				<li>France Inter : {radioFrequencies.franceInter.join(', ')}</li>
				<li>France Bleu : {radioFrequencies.franceBleu.join(', ')}</li>
				<li>France Info : {radioFrequencies.franceInfo.join(', ')}</li>
			</ul>
		</div>
	);
}
