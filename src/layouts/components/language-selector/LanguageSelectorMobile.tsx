import { useTranslation } from 'react-i18next';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { RadioButtons } from '@codegouvfr/react-dsfr/RadioButtons';

import { LOCALE_FR, LOCALE_EN } from './constants';

type Props = {
	updateLocale: (nextValue: 'fr' | 'en') => void;
	currentLanguage: string;
};

export default function LanguageSelectorMobile(props: Props) {
	const { currentLanguage, updateLocale } = props;
	const { t } = useTranslation('common');
	return (
		<nav role="navigation" className="fr-translate fr-nav">
			<div className="fr-nav__item">
				<Button className="fr-translate__btn fr-btn" priority="tertiary">
					{t('select_language')}
				</Button>
				<RadioButtons
					orientation="horizontal"
					options={[
						{
							label: 'FR - Français',
							nativeInputProps: {
								checked: currentLanguage === LOCALE_FR,
								onChange: () => updateLocale(LOCALE_FR),
							},
						},
						{
							label: 'EN - English',
							nativeInputProps: {
								checked: currentLanguage === LOCALE_EN,
								onChange: () => updateLocale(LOCALE_EN),
							},
						},
					]}
					className="fr-ml-2w"
					data-fr-analytics-rating
					id="pims-layouts__radio-button-change-locale-mobile"
				/>
			</div>
		</nav>
	);
}
