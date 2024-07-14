import Header from '../components/Header.tsx';
import LanguageSelector from '../components/LanguageSelector.tsx';
import { useState } from 'react';
import { SCREENS } from '../components/constants.ts';
import StepsLayout from './StepsLayout';
import HomeScreen from '../lib/HomeScreen.tsx';
import FinalScreen from '../lib/FinalScreen.tsx';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';
import { fr } from '@codegouvfr/react-dsfr';

export default function RootLayout() {
	const [currentIndex, setCurrentIndex] = useState(0);
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
