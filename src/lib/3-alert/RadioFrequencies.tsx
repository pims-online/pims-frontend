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

	const frequenciesToString = (rawFreqs: string[]) => {
		if (rawFreqs.length == 0) {
			return <span className='pims-alert-screen__alert-systems-radio-freq-unavailable'>{t("radio_frequencies.unavailable")}</span>;
		} else {
			return <>{rawFreqs.join(" / ")} Mhz</>;
		}
	}

	return (
		<Container withoutMarginBottom>
			<p className="pims-components__list-introducer">
				{t('radio_frequencies.near_station')}
			</p>
			{isProcessing ? (
				<CircularProgress color="blue" size="medium" />
			) : (
				<ul className="pims-components__toothed-list">
					<li>France Inter : {frequenciesToString(radioFrequencies.franceInter)}</li>
					<li>ICI : {frequenciesToString(radioFrequencies.ici)}</li>
					<li>franceinfo : {frequenciesToString(radioFrequencies.franceInfo)}</li>
				</ul>
			)}
		</Container>
	);
}
