import { useContext } from 'react';
import { Button } from '@codegouvfr/react-dsfr/Button';

import { AppContext, APP_CONTEXT_DEFAULT_VALUES } from '../../providers';
import { Container } from '@/components';

type Props = {
	navigateToHomeScreen: () => void;
	buttonTitle: string;
};

export default function FinalButton(props: Props) {
	const {
		setAddress,
		setCoordinates,
		setInseeCode,
		setRiskList,
		setIodePastilleEligibility,
		setStrimmingObligation,
		setGatheringPlace,
		setKitListChecked,
		setEmergencyKitStorage,
		setUsefulNumbers,
		setRadioFrequencies,
		setPimsFileName,
		setPimsComment,
	} = useContext(AppContext);
	const onClickReset = () => {
		// 1 - Reset the values of the context
		setAddress(APP_CONTEXT_DEFAULT_VALUES.address);
		setCoordinates(APP_CONTEXT_DEFAULT_VALUES.coordinates);
		setInseeCode(APP_CONTEXT_DEFAULT_VALUES.inseeCode);
		setRiskList(APP_CONTEXT_DEFAULT_VALUES.riskList);
		setIodePastilleEligibility(
			APP_CONTEXT_DEFAULT_VALUES.iodePastilleEligibility
		);
		setStrimmingObligation(APP_CONTEXT_DEFAULT_VALUES.strimmingObligation);
		setGatheringPlace(APP_CONTEXT_DEFAULT_VALUES.gatheringPlace);
		setKitListChecked(APP_CONTEXT_DEFAULT_VALUES.kitListChecked);
		setEmergencyKitStorage(APP_CONTEXT_DEFAULT_VALUES.emergencyKitStorage);
		setUsefulNumbers(APP_CONTEXT_DEFAULT_VALUES.usefulNumbers);
		setRadioFrequencies(APP_CONTEXT_DEFAULT_VALUES.radioFrequencies);
		setPimsFileName(APP_CONTEXT_DEFAULT_VALUES.pimsFileName);
		setPimsComment(APP_CONTEXT_DEFAULT_VALUES.pimsComment);
		// 2 - Navigate back to home screen
		props.navigateToHomeScreen();
	};
	return (
		<Container
			withoutMarginBottom
			flexboxAlignment="center"
			flexboxDirection="column"
		>
			<Button
				onClick={onClickReset}
				size="medium"
				priority="secondary"
				data-fr-analytics-rating
				id="pims-step-6__button-go-back-to-home"
			>
				{props.buttonTitle}
			</Button>
		</Container>
	);
}
