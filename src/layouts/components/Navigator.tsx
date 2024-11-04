import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';
import { clsx } from 'clsx';

import { Divider } from '@/components';
import { useTrackEvents } from '@/providers/analytics';

import { useScrollToTop } from '../utils';

type Props = {
	currentStep: number;
	setCurrentStep: Dispatch<SetStateAction<number>>;
	isNavigateNextLocked: boolean;
	setIsNavigateNextLocked: (nextValue: boolean) => void;
};

export default function Navigator(props: Props) {
	// ----- Props -----
	const {
		currentStep,
		setCurrentStep,
		isNavigateNextLocked,
		setIsNavigateNextLocked,
	} = props;

	// ----- Hooks -----
	const { t } = useTranslation('common');
	const scrollToTop = useScrollToTop();
	const trackEvent = useTrackEvents();

	// ----- Utils -----
	const navigatorId = 'pims-layouts__button-navigator';

	const setNextCurrentStep = (nextStep: number) => {
		setCurrentStep(nextStep);
		scrollToTop();
		trackEvent({
			action: 'click',
			category: 'navigation',
			label: navigatorId,
			value: nextStep,
		});
	};

	const nextButtonHidden = currentStep === 5;

	return (
		<>
			<Divider className="fr-mt-10v" />
			<ButtonsGroup
				alignment="right"
				buttonsEquisized
				buttonsIconPosition="left"
				buttonsSize="medium"
				inlineLayoutWhen="always"
				buttons={[
					{
						children:
							currentStep === 1 ? t('go_back_home') : t('go_previous_step'),
						iconId: 'fr-icon-arrow-left-s-line',
						priority: 'secondary',
						type: 'button',
						onClick: () => {
							setIsNavigateNextLocked(false); // Reset
							setNextCurrentStep(currentStep - 1);
						},
					},
					{
						children: t('go_next_step'),
						iconId: 'fr-icon-arrow-right-s-line',
						priority: 'primary',
						type: 'button',
						onClick: () => {
							setNextCurrentStep(currentStep + 1);
						},
						disabled: isNavigateNextLocked || nextButtonHidden,
						className: clsx({ 'button-hidden': nextButtonHidden }),
					},
				]}
				className="fr-mt-4v"
				data-fr-analytics-rating
				id={navigatorId}
			/>
		</>
	);
}
