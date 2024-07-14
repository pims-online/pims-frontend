export enum SCREENS {
	HOME_SCREEN = 0,
	INFORMATION_SCREEN = 1,
	EMERGENCY_KIT_SCREEN = 2,
	ALERT_SCREEN = 3,
	INVOLVEMENT_SCREEN = 4,
	SUMMARY_SCREEN = 5,
	FINAL_SCREEN = 6,
}

// ----- STEPPER -----

export type Step = {
	stepIndex: number;
	keyTranslation: string;
};

const STEP_1_INFORMATION: Step = {
	stepIndex: SCREENS.INFORMATION_SCREEN,
	keyTranslation: 'step_one',
};

const STEP_2_EMERGENCY_KIT: Step = {
	stepIndex: SCREENS.EMERGENCY_KIT_SCREEN,
	keyTranslation: 'step_two',
};

const STEP_3_ALERT: Step = {
	stepIndex: SCREENS.ALERT_SCREEN,
	keyTranslation: 'step_three',
};

const STEP_4_INVOLVEMENT: Step = {
	stepIndex: SCREENS.INVOLVEMENT_SCREEN,
	keyTranslation: 'step_four',
};

const STEP_5_SUMMARY: Step = {
	stepIndex: SCREENS.SUMMARY_SCREEN,
	keyTranslation: 'step_five',
};

export const STEPS = [
	STEP_1_INFORMATION,
	STEP_2_EMERGENCY_KIT,
	STEP_3_ALERT,
	STEP_4_INVOLVEMENT,
	STEP_5_SUMMARY,
];
