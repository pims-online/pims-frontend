import { useState } from 'react';
import { fr } from '@codegouvfr/react-dsfr';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

// ----- LAYOUT COMPONENTS -----
import { SCREENS } from './constants.ts';
import StepsLayout from './StepsLayout';
import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector';

// ----- SCREENS -----
import HomeScreen from '../lib/0-home/HomeScreen';
import FinalScreen from '../lib/6-final/FinalScreen';

export default function RootLayout() {
	const [currentIndex, setCurrentIndex] = useState(3);
	const { isDark } = useIsDark();

	const navigateToFirstStep = () => setCurrentIndex(1);
	const navigateToHomeScreen = () => setCurrentIndex(0);
	return (
		<div className={isDark ? 'pims-dark' : 'pims-light'}>
			<Header />
			<section style={{ padding: fr.spacing('2w') }}>
				<LanguageSelector />
				{currentIndex === SCREENS.HOME_SCREEN && (
					<HomeScreen navigateToFirstStep={navigateToFirstStep} />
				)}
				{currentIndex >= 1 && currentIndex <= 5 && (
					<StepsLayout
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
					/>
				)}
				{currentIndex === SCREENS.FINAL_SCREEN && (
					<FinalScreen navigateToHomeScreen={navigateToHomeScreen} />
				)}
			</section>
		</div>
	);
}
