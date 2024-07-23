import { STEPS, type Step } from '../../layouts/constants';

export const getStepMap = () => {
	const stepMap = new Map<number, Step>();
	STEPS.forEach((step) => {
		stepMap.set(step.stepIndex, step);
	});
	return stepMap;
};

export const STEP_COUNT = STEPS.length;
