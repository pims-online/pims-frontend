import { useTranslation } from 'react-i18next';
import { setUseLang } from '@codegouvfr/react-dsfr/spa';

import LanguageSelectorMobile from './LanguageSelectorMobile';
import LanguageSelectorDesktop from './LanguageSelectorDesktop';

export default function LanguageSelector() {
	const {
		i18n: _i18n, //: { changeLanguage, language },
	} = useTranslation('');
	const currentLanguage = _i18n.language;

	const updateLocale = (nextValue: 'en' | 'fr') => {
		_i18n.changeLanguage(nextValue);
		setUseLang({ useLang: () => nextValue });
	};

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
