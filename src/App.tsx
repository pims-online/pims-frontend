import './App.css';
import './fonts.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n/i18n';
import { I18nextProvider } from 'react-i18next';

function LocaleApp() {
	const {
		t,
		i18n, //: { changeLanguage, language },
	} = useTranslation('test');
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
	const handleChangeLanguage = () => {
		const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
		setCurrentLanguage(newLanguage);
		i18n.changeLanguage(newLanguage);
	};

	return (
		<div style={{ fontFamily: 'Marianne' }}>
			<button onClick={handleChangeLanguage}>Change language</button>
			<h1>{t('helloWorld')}</h1>
			<h2>{t('helloWorld')}</h2>
			<h3>{t('helloWorld')}</h3>
			<h4>{t('helloWorld')}</h4>
			<h5>{t('helloWorld')}</h5>
			<h6>{t('helloWorld')}</h6>
			<p>{t('helloWorld')}</p>
			<p style={{ fontWeight: 100 }}>{t('testWidget')}</p>

			<p style={{ fontWeight: 300 }}>{t('testWidget')}</p>

			<p style={{ fontWeight: 400 }}>{t('testWidget')}</p>

			<p style={{ fontWeight: 500 }}>{t('testWidget')}</p>

			<p style={{ fontWeight: 700 }}>{t('testWidget')}</p>

			<p style={{ fontWeight: 800 }}>{t('testWidget')}</p>

			<p style={{ fontWeight: 500, fontStyle: 'italic' }}>{t('testWidget')}</p>
		</div>
	);
}

function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<LocaleApp />
		</I18nextProvider>
	);
}

export default App;
