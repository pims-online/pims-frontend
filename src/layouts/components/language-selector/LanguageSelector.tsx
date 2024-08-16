import { useTranslation } from 'react-i18next';
import { setUseLang } from '@codegouvfr/react-dsfr/spa';

import LanguageSelectorMobile from './LanguageSelectorMobile';
import LanguageSelectorDesktop from './LanguageSelectorDesktop';

type Props = {
	selectorKind?: 'responsive' | 'desktop' | 'mobile';
};

export default function LanguageSelector(props: Props) {
	const {
		i18n: _i18n, //: { changeLanguage, language },
	} = useTranslation('');
	const currentLanguage = _i18n.language;

	const updateLocale = (nextValue: 'en' | 'fr') => {
		_i18n.changeLanguage(nextValue);
		setUseLang({ useLang: () => nextValue });
	};

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
