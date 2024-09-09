import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';

i18n
	.use(initReactI18next)
	.use(detector) // use localStorage to set the default locale
	.init({
		resources: {
			en: { ...enTranslations },
			fr: { ...frTranslations },
		},
		fallbackLng: 'fr', // For missing translations
	});

export default i18n;
