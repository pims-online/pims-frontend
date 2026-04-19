import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@codegouvfr/react-dsfr/Button';

import { AppContext } from '../../providers';
import { Container, CircularProgress } from '@/components';

import { generatePims, PimsParams } from './utils';

type Props = {
	navigateToFinalScreen: () => void;
};

export default function FinalizeButton(props: Props) {
	const { navigateToFinalScreen } = props;
	const { i18n, t } = useTranslation('summary_screen');
	const [isProcessing, setIsProcessing] = useState(false);
	const {
		position,
		pimsFileName,
		usefulNumbers,
		riskList,
		strimmingObligation,
		emergencyKitStorage,
		radioFrequencies,
		setApiResponse,
		gatheringPlace,
		pimsComment,
		iodePastilleEligibility
	} = useContext(AppContext);

	const handleFinalizeButton = async () => {
		setIsProcessing(true);

		if (strimmingObligation === undefined) {
			throw new Error("Cannot generate PIMS as strimmingObligation is undefined");
		}

		if (position === undefined) {
			throw new Error("Cannot generate PIMS as position is undefined");
		}

		if (riskList === undefined) {
			throw new Error("Cannot generate PIMS as risks are undefined");
		}

		const params: PimsParams = {
			address: position.address,
			locale: i18n.language,
			filename: pimsFileName,
			usefulNumbers,
			riskList: riskList,
			strimmingObligation,
			emergencyKitStorage,
			radioFrequencies,
			screenWidth: window.innerWidth,
			gatheringPlace,
			cityName: position.inseeCode,
			iodePastilleElegibility: (iodePastilleEligibility !== undefined),
			comment: pimsComment,
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
