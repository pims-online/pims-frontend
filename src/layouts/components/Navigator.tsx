import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';
import { ButtonProps } from '@codegouvfr/react-dsfr/Button';

import { Divider } from '@/components';
import { useTrackEvents } from '@/providers/analytics';

import { scrollToTop, scrollToUppermostLock } from '../utils';
import { NavigationLock } from '../types'

type Props = {
	currentStep: number;
	setCurrentStep: Dispatch<SetStateAction<number>>;
	navigationLocks: Map<string, NavigationLock>,
	clearNavigationLocks: () => void
};

export default function Navigator(props: Props) {
	// ----- Props -----
	const {
		currentStep,
		setCurrentStep,
		navigationLocks,
		clearNavigationLocks,
	} = props;

	// ----- Hooks -----
	const { t } = useTranslation('common');
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

	const onClickHandler = () => {
		if (navigationLocks.size > 0) {
			// 1. Trigger each lock
			navigationLocks.forEach((lock) => {
				lock.highlight();
			});

			// 2. Scroll to uppermost lock
			scrollToUppermostLock(navigationLocks);
		} else {
			setNextCurrentStep(currentStep + 1);
		}
	};

	
	const buttons: [ButtonProps, ...ButtonProps[]] = [
		{
			children:
			currentStep === 1 ? t('go_back_home') : t('go_previous_step'),
			iconId: 'fr-icon-arrow-left-s-line',
			priority: 'secondary',
			type: 'button',
			onClick: () => {
				clearNavigationLocks(); // Reset
				setNextCurrentStep(currentStep - 1);
			},
		},
	]
	const nextButtonPresent = currentStep < 5;
	if (nextButtonPresent) {
		buttons.push({
			children: t('go_next_step'),
			iconId: 'fr-icon-arrow-right-s-line',
			priority: 'primary',
			type: 'button',
			onClick: onClickHandler,
		});
	}

	return (
		<>
			<Divider className="fr-mt-10v" />
			<ButtonsGroup
				alignment="right"
				buttonsEquisized
				buttonsIconPosition="left"
				buttonsSize="medium"
				inlineLayoutWhen="always"
				buttons={buttons}
				className="fr-mt-4v"
				data-fr-analytics-rating
				id={navigatorId}
			/>
		</>
	);
}
