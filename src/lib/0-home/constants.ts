import step1light from '@/assets/step-icons/step-1-light.svg';
import step1dark from '@/assets/step-icons/step-1-dark.svg';
import step2light from '@/assets/step-icons/step-2-light.svg';
import step2dark from '@/assets/step-icons/step-2-dark.svg';
import step3light from '@/assets/step-icons/step-3-light.svg';
import step3dark from '@/assets/step-icons/step-3-dark.svg';
import step4light from '@/assets/step-icons/step-4-light.svg';
import step4dark from '@/assets/step-icons/step-4-dark.svg';
import step5light from '@/assets/step-icons/step-5-light.svg';
import step5dark from '@/assets/step-icons/step-5-dark.svg';

type HomeScreenStep = {
	lightIcon: string;
	darkIcon: string;
	i18nKey: string;
	id: number;
};

export const HOME_SCREEN_STEPS: HomeScreenStep[] = [
	{
		id: 1,
		i18nKey: 'step_one',
		lightIcon: step1light,
		darkIcon: step1dark,
	},
	{
		id: 2,
		i18nKey: 'step_two',
		lightIcon: step2light,
		darkIcon: step2dark,
	},
	{
		id: 3,
		i18nKey: 'step_three',
		lightIcon: step3light,
		darkIcon: step3dark,
	},
	{
		id: 4,
		i18nKey: 'step_four',
		lightIcon: step4light,
		darkIcon: step4dark,
	},
	{
		id: 5,
		i18nKey: 'step_five',
		lightIcon: step5light,
		darkIcon: step5dark,
	},
];
