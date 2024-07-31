import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@codegouvfr/react-dsfr/Button';

import { AppContext } from '../../AppContextProvider';
import { Container } from '../../components';

import { generatePims } from './utils';

type Props = {
	navigateToFinalScreen: () => void;
};

export default function FinalizeButton(props: Props) {
	const { navigateToFinalScreen } = props;
	const { t } = useTranslation('summary_screen');
	const [isProcessing, setIsProcessing] = useState(false);
	const {
		pimsLocale,
		pimsFileName,
		usefulNumbers,
		riskIdList,
		emergencyKitStorage,
		radioFrequencies,
		setApiResponse,
	} = useContext(AppContext);

	const handleFinalizeButton = async () => {
		setIsProcessing(true);

		const params = {
			locale: pimsLocale,
			filename: pimsFileName,
			usefulNumbers,
			riskIdList,
			emergencyKitStorage,
			radioFrequencies,
			screenWidth: window.innerWidth,
		};

		try {
			await generatePims(params, setApiResponse);
			setIsProcessing(false);
			navigateToFinalScreen();
		} catch (error) {
			console.error(error);
			setIsProcessing(false);
			window.alert(t('finalize_button.error_happened'));
		}
	};

	return (
		<Container
			withoutMarginBottom
			flexboxAlignment="center"
			flexboxDirection="column"
		>
			<Button
				priority="primary"
				onClick={handleFinalizeButton}
				disabled={isProcessing}
				size="large"
			>
				{t('finalize_button.title')}
			</Button>
		</Container>
	);
}
