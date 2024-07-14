import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';
import { useTranslation } from 'react-i18next';

type Props = {
	currentStep: number;
	setCurrentStep: (nextStep: number) => void;
};

export default function Navigator(props: Props) {
	const { currentStep, setCurrentStep } = props;

	const { t } = useTranslation('common');
	return (
		<ButtonsGroup
			alignment="right"
			buttonsEquisized
			buttonsIconPosition="left"
			buttonsSize="medium"
			inlineLayoutWhen="always"
			buttons={[
				{
					children: t('goPreviousStep'),
					iconId: 'fr-icon-arrow-left-s-line',
					priority: 'secondary',
					type: 'button',
					onClick: () => setCurrentStep(currentStep - 1),
					disabled: currentStep === 1,
				},
				{
					children: t('goNextStep'),
					iconId: 'fr-icon-arrow-right-s-line',
					priority: 'primary',
					type: 'button',
					onClick: () => setCurrentStep(currentStep + 1),
					disabled: currentStep === 5,
				},
			]}
		/>
	);
}
