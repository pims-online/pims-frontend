import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@codegouvfr/react-dsfr/Button';

import { AppContext } from '../../providers';
import { Container, CircularProgress } from '@/components';

import { generatePims } from './utils';

type Props = {
	navigateToFinalScreen: () => void;
};

export default function FinalizeButton(props: Props) {
	const { navigateToFinalScreen } = props;
	const { t } = useTranslation('summary_screen');
	const [isProcessing, setIsProcessing] = useState(false);
	const {
		address,
		pimsLocale,
		pimsFileName,
		usefulNumbers,
		riskIdList,
		emergencyKitStorage,
		radioFrequencies,
		setApiResponse,
		gatheringPlace,
		inseeCode,
	} = useContext(AppContext);

	const handleFinalizeButton = async () => {
		setIsProcessing(true);

		const params = {
			address,
			locale: pimsLocale,
			filename: pimsFileName,
			usefulNumbers,
			riskIdList: riskIdList || [],
			emergencyKitStorage,
			radioFrequencies,
			screenWidth: window.innerWidth,
			gatheringPlace,
			inseeCode,
		};

		const isSuccess = await generatePims(params, setApiResponse);
		setIsProcessing(false);
		if (isSuccess) {
			navigateToFinalScreen();
		} else {
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
				className="fr-mb-3v"
				data-fr-analytics-rating
				id="pims-step-5__button-generate-pims"
			>
				{t('finalize_button.title')}
			</Button>
			{isProcessing && <CircularProgress color="blue" size="medium" />}
		</Container>
	);
}
