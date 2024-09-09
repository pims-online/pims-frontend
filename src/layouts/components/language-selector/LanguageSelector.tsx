import { useContext, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { setUseLang } from '@codegouvfr/react-dsfr/spa';

import { AppContext } from '../../../providers';

import LanguageSelectorMobile from './LanguageSelectorMobile';
import LanguageSelectorDesktop from './LanguageSelectorDesktop';

type Props = {
	selectorKind?: 'responsive' | 'desktop' | 'mobile';
};

export default function LanguageSelector(props: Props) {
	const { setPimsLocale } = useContext(AppContext);
	const {
		i18n: _i18n, //: { changeLanguage, language },
	} = useTranslation('');
	const currentLanguage = _i18n.language;

	const updateLocale = useCallback(
		(nextValue: 'en' | 'fr') => {
			_i18n.changeLanguage(nextValue);
			setUseLang({ useLang: () => nextValue });
			setPimsLocale(nextValue);
			localStorage.setItem('i18nextLng', nextValue);
		},
		[setPimsLocale, _i18n]
	);

	// At first use, the user does not have i18nextLng defined, so react-i18n uses the fallback
	// Without having the language set
	const initialI18nextLng = localStorage.getItem('i18nextLng');
	useEffect(() => {
		if (!initialI18nextLng || !['fr', 'en'].includes(initialI18nextLng)) {
			// Force language to fr
			updateLocale('fr');
		}
	}, [initialI18nextLng, updateLocale]);

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
