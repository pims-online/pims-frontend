import { useEffect, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { APP_CONTEXT_DEFAULT_VALUES, AppContext } from '../../providers';
import { Container, CircularProgress } from '@/components';

import { getRadioFrequencies } from './utils';

export default function RadioFrequencies() {
	const { t } = useTranslation('alert_screen');
	const { radioFrequencies, setRadioFrequencies, inseeCode } =
		useContext(AppContext);
	const [isProcessing, setIsProcessing] = useState(false);

	useEffect(() => {
		const fetchFrequencies = async () => {
			if (inseeCode === undefined) {
				setRadioFrequencies(APP_CONTEXT_DEFAULT_VALUES.radioFrequencies);
				return;
			}

			setIsProcessing(true);
			try {
				const data = await getRadioFrequencies(inseeCode);
				if (data !== undefined) {
					setRadioFrequencies(data);
				}
			} catch (error) {
				console.error(error);
			}
			setIsProcessing(false);
		};

		fetchFrequencies();
	}, [inseeCode, setRadioFrequencies, setIsProcessing]);

	return (
		<Container withoutMarginBottom>
			<p className="pims-components__list-introducer">
				{t('radio_frequencies.near_station')}
			</p>
			{isProcessing ? (
				<CircularProgress color="blue" size="medium" />
			) : (
				<ul className="pims-components__toothed-list">
					<li>France Inter : {radioFrequencies.franceInter.join(' / ')} MHz</li>
					<li>ICI : {radioFrequencies.ici.join(' / ')} MHz</li>
					<li>franceinfo : {radioFrequencies.franceInfo.join(' / ')} MHz</li>
				</ul>
			)}
		</Container>
	);
}
