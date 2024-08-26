import { useState } from 'react';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

// ----- LAYOUT COMPONENTS -----
import { SCREENS } from './constants.ts';
import StepsLayout from './StepsLayout';
import Header from './components/header/Header';

// ----- SCREENS -----
import HomeScreen from '../lib/0-home/HomeScreen';
import FinalScreen from '../lib/6-final/FinalScreen';

type Props = {
	widgetHeaderFooter?: boolean;
	applicationId?: string;
};

export default function RootLayout(props: Props) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const { isDark } = useIsDark();

	const navigateToFirstStep = () => setCurrentIndex(1);
	const navigateToHomeScreen = () => setCurrentIndex(0);
	const applicationId = props.applicationId || 'pims-application';
	return (
		<div className={isDark ? 'pims-dark' : 'pims-light'} id={applicationId}>
			<Header isWidget={props.widgetHeaderFooter} />
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
		</div>
	);
}
