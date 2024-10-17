import stepOne from '@/assets/step-icons/step_one.png';
import stepTwo from '@/assets/step-icons/step_two.png';
import stepThree from '@/assets/step-icons/step_three.png';
import stepFour from '@/assets/step-icons/step_four.png';
import stepFive from '@/assets/step-icons/step_five.png';

type HomeScreenStep = {
	icon: string;
	i18nKey: string;
	id: number;
};

export const HOME_SCREEN_STEPS: HomeScreenStep[] = [
	{
		id: 1,
		i18nKey: 'step_one',
		icon: stepOne,
	},
	{
		id: 2,
		i18nKey: 'step_two',
		icon: stepTwo,
	},
	{
		id: 3,
		i18nKey: 'step_three',
		icon: stepThree,
	},
	{
		id: 4,
		i18nKey: 'step_four',
		icon: stepFour,
	},
	{
		id: 5,
		i18nKey: 'step_five',
		icon: stepFive,
	},
];
