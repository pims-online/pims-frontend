import { useState } from 'react';

// ----- UTILS -----
import { useScrollToTop } from './utils';

// ----- LAYOUT COMPONENTS -----
import { SCREENS } from './constants.ts';
import StepsLayout from './StepsLayout';

// ----- SCREENS -----
import HomeScreen from '@/lib/0-home/HomeScreen';
import FinalScreen from '@/lib/6-final/FinalScreen';

export default function RootLayout() {
	const startIndex = 3;
	const currentIndexInitValue =
		import.meta.env.VITE_ENVIRONMENT === 'local' ? startIndex : 0;
	const [currentIndex, setCurrentIndex] = useState(currentIndexInitValue);
	const scrollToTop = useScrollToTop();

	const navigateToFirstStep = () => {
		setCurrentIndex(1);
		scrollToTop();
	};

	const navigateToHomeScreen = () => {
		setCurrentIndex(0);
		scrollToTop();
	};
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
