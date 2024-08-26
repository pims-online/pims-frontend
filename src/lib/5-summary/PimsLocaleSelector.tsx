import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';

import { AppContext } from '../../providers';
import { Subtitle } from '../../components';

export default function PimsLocaleSelector() {
	const { t } = useTranslation('summary_screen');
	const { pimsLocale, setPimsLocale } = useContext(AppContext);
	return (
		<>
			<Subtitle text={t('configuration.locale.title')} />
			<RadioButtons
				options={[
					{
						label: t('configuration.locale.french'),
						nativeInputProps: {
							checked: pimsLocale === 'fr',
							onChange: () => setPimsLocale('fr'),
						},
					},
					{
						label: t('configuration.locale.english'),
						nativeInputProps: {
							checked: pimsLocale === 'en',
							onChange: () => setPimsLocale('en'),
						},
					},
				]}
			/>
		</>
	);
}
