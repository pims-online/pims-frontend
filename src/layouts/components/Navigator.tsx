import { useTranslation } from 'react-i18next';
import { fr } from '@codegouvfr/react-dsfr';
import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';
import { Dispatch, SetStateAction } from 'react';

type Props = {
	currentStep: number;
	setCurrentStep: Dispatch<SetStateAction<number>>;
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

	const scrollToTop = () => {
		if (window) {
			setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
		}
	};

	return (
		<ButtonsGroup
			alignment="right"
			buttonsEquisized
			buttonsIconPosition="left"
			buttonsSize="medium"
			inlineLayoutWhen="always"
			buttons={[
				{
					children: t('go_previous_step'),
					iconId: 'fr-icon-arrow-left-s-line',
					priority: 'secondary',
					type: 'button',
					onClick: () => {
						setIsNavigateNextLocked(false); // Reset
						setCurrentStep((step) => step - 1);
						scrollToTop();
					},
					disabled: currentStep === 1,
				},
				{
					children: t('go_next_step'),
					iconId: 'fr-icon-arrow-right-s-line',
					priority: 'primary',
					type: 'button',
					onClick: () => {
						setCurrentStep((step) => step + 1);
						scrollToTop();
					},
					disabled: isNavigateNextLocked || currentStep === 5,
				},
			]}
			style={{
				marginTop: fr.spacing('4v'),
			}}
		/>
	);
}
