import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';
i18n.use(initReactI18next).init({
	resources: {
		en: { ...enTranslations },
		fr: { ...frTranslations },
	},
	lng: 'fr',
	fallbackLng: 'fr', // For missing translations
});

export default i18n;
