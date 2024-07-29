import { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../../AppContextProvider';
import { Title, Container } from '../../components';

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
		<Container withoutMarginBottom>
			<Title text={t('radio_frequencies.title')} />
			<p className="pims__list-introducer">
				{t('radio_frequencies.near_station')}
			</p>
			<ul className="pims__toothed-list">
				<li>France Inter : {radioFrequencies.franceInter.join(', ')}</li>
				<li>France Bleu : {radioFrequencies.franceBleu.join(', ')}</li>
				<li>France Info : {radioFrequencies.franceInfo.join(', ')}</li>
			</ul>
		</Container>
	);
}
