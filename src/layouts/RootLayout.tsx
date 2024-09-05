import { useState } from 'react';

// ----- LAYOUT COMPONENTS -----
import { SCREENS } from './constants.ts';
import StepsLayout from './StepsLayout';

// ----- SCREENS -----
import HomeScreen from '@/lib/0-home/HomeScreen';
import FinalScreen from '@/lib/6-final/FinalScreen';

export default function RootLayout() {
	const startIndex = 2;
	const currentIndexInitValue =
		import.meta.env.VITE_ENVIRONMENT === 'local' ? startIndex : 0;
	const [currentIndex, setCurrentIndex] = useState(currentIndexInitValue);

	const navigateToFirstStep = () => {
		setCurrentIndex(1);
		if (window) {
			setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
		}
	};
	const navigateToHomeScreen = () => setCurrentIndex(0);
	return (
		<section className="pims-layouts__container">
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
	);
}
