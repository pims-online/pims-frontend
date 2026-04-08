import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageSelectorMobile from './LanguageSelectorMobile';
import LanguageSelectorDesktop from './LanguageSelectorDesktop';

type Props = {
	selectorKind?: 'responsive' | 'desktop' | 'mobile';
};

export default function LanguageSelector(props: Props) {
	const { i18n } = useTranslation('');
	
	const updateLocale = useCallback(
		(nextValue: 'en' | 'fr') => {
			i18n.changeLanguage(nextValue);
			localStorage.setItem('i18nextLng', nextValue);
		},
		[i18n]
	);
	
	const currentLanguage = i18n.language;
	if (props.selectorKind === 'desktop') {
		return (
			<div>
				<LanguageSelectorDesktop
					currentLanguage={currentLanguage}
					updateLocale={updateLocale}
				/>
			</div>
		);
	}

	if (props.selectorKind === 'mobile') {
		return (
			<LanguageSelectorMobile
				currentLanguage={currentLanguage}
				updateLocale={updateLocale}
			/>
		);
	}

	return (
		<div className="fr-mx-1w">
			<div className="fr-hidden fr-unhidden-lg">
				<LanguageSelectorDesktop
					currentLanguage={currentLanguage}
					updateLocale={updateLocale}
				/>
			</div>
			<div className="fr-hidden-lg">
				<LanguageSelectorMobile
					currentLanguage={currentLanguage}
					updateLocale={updateLocale}
				/>
			</div>
		</div>
	);
}
