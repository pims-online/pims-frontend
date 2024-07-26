import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Stepper as StepperDSFR } from '@codegouvfr/react-dsfr/Stepper';

import { STEP_COUNT, getStepMap } from './utils';

type Props = {
	currentStep: number;
};

export default function Stepper(props: Props) {
	const { currentStep } = props;
	const { t } = useTranslation('stepper');

	const stepMap = useMemo(() => {
		return getStepMap();
	}, []);

	const step = stepMap.get(currentStep);
	const title = step ? t(step.keyTranslation) : 'title not found';

	const hasNextStep = currentStep < STEP_COUNT;
	const nextStep = hasNextStep ? stepMap.get(currentStep + 1) : undefined;
	const nextTitle =
		hasNextStep && nextStep ? t(nextStep.keyTranslation) : undefined;

	return (
		<StepperDSFR
			currentStep={currentStep}
			nextTitle={nextTitle}
			stepCount={STEP_COUNT}
			title={title}
		/>
	);
}
