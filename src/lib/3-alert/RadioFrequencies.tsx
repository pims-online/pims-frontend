import { useEffect, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../../providers';
import { Container, CircularProgress } from '@/components';

import { getRadioFrequencies } from './utils';

export default function RadioFrequencies() {
	const { t } = useTranslation('alert_screen');
	const { radioFrequencies, setRadioFrequencies, coordinates } =
		useContext(AppContext);
	const [isProcessing, setIsProcessing] = useState(false);

	useEffect(() => {
		const fetchFrequencies = async () => {
			setIsProcessing(true);
			try {
				const data = await getRadioFrequencies(coordinates);
				setRadioFrequencies(data);
			} catch (error) {
				console.error(error);
			}
			setIsProcessing(false);
		};

		fetchFrequencies();
	}, [coordinates, setRadioFrequencies, setIsProcessing]);

	return (
		<Container withoutMarginBottom>
			<p className="pims-components__list-introducer">
				{t('radio_frequencies.near_station')}
			</p>
			{isProcessing ? (
				<CircularProgress color="blue" size="medium" />
			) : (
				<ul className="pims-components__toothed-list">
					<li>France Inter : {radioFrequencies.franceInter.join(', ')}</li>
					<li>France Bleu : {radioFrequencies.franceBleu.join(', ')}</li>
					<li>France Info : {radioFrequencies.franceInfo.join(', ')}</li>
				</ul>
			)}
		</Container>
	);
}
