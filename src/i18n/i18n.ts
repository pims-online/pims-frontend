import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';

export const supportedLanguages: string[] = ["fr", "en"]

i18n
	.use(initReactI18next)
	.use(LanguageDetector) // use localStorage to set the default locale
	.init({
		supportedLngs: supportedLanguages,
		resources: {
			en: { ...enTranslations },
			fr: { ...frTranslations },
		},
		fallbackLng: 'fr', // For missing translations
		detection: {
			order: ['localStorage', 'navigator'],
		},
	});

export default i18n;
