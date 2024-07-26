import { useTranslation } from 'react-i18next';
import { fr } from '@codegouvfr/react-dsfr';
import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';

type Props = {
	currentStep: number;
	setCurrentStep: (nextStep: number) => void;
	isNavigateNextLocked: boolean;
	setIsNavigateNextLocked: (nextValue: boolean) => void;
};

export default function Navigator(props: Props) {
	const {
		currentStep,
		setCurrentStep,
		isNavigateNextLocked,
		setIsNavigateNextLocked,
	} = props;

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
					onClick: () => {
						setIsNavigateNextLocked(false); // Reset
						setCurrentStep(currentStep - 1);
					},
					disabled: currentStep === 1,
				},
				{
					children: t('goNextStep'),
					iconId: 'fr-icon-arrow-right-s-line',
					priority: 'primary',
					type: 'button',
					onClick: () => setCurrentStep(currentStep + 1),
					disabled: isNavigateNextLocked || currentStep === 5,
				},
			]}
			style={{
				marginTop: fr.spacing('4v'),
			}}
		/>
	);
}
