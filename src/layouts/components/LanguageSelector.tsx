import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
	const {
		i18n: _i18n, //: { changeLanguage, language },
	} = useTranslation('test');
	const [currentLanguage, setCurrentLanguage] = useState(_i18n.language);
	const handleChangeLanguage = () => {
		const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
		setCurrentLanguage(newLanguage);
		_i18n.changeLanguage(newLanguage);
	};
	return <button onClick={handleChangeLanguage}>Change language</button>;
}
