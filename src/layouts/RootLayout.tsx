import Header from '../components/Header.tsx';
import LanguageSelector from '../components/LanguageSelector.tsx';
import { useState } from 'react';
import { SCREENS } from '../components/constants.ts';
import StepsLayout from './StepsLayout';
import HomeScreen from '../lib/HomeScreen.tsx';
import FinalScreen from '../lib/FinalScreen.tsx';

export default function RootLayout() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const navigateToFirstStep = () => setCurrentIndex(1);
	return (
		<div>
			<Header />
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
			{currentIndex === SCREENS.FINAL_SCREEN && <FinalScreen />}
		</div>
	);
}
