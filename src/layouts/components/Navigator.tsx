import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';
import { clsx } from 'clsx';

import { Divider } from '@/components';
import { useTrackEvents } from '@/providers/analytics';

import { scrollToTop } from '../utils';
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

	const scrollToUppermostLock = () => {
		// 1. Find uppermost lock
		let uppermostTop: number|undefined = undefined;
		let uppermostId: string|undefined = undefined;
		navigationLocks.forEach((lock) => {
			if (lock.htmlElementId === undefined) {
				return;
			}
			const rect = document.getElementById(lock.htmlElementId)?.getBoundingClientRect()
			if (rect === undefined) {
				return;
			}
			const top = rect.top;
			if (uppermostTop === undefined || top > uppermostTop) {
				uppermostTop = top;
				uppermostId = lock.htmlElementId;
			}
		});

		// 2. Put the uppermost lock into view
		if (uppermostId !== undefined) {
			const options: ScrollIntoViewOptions = {
				block: 'nearest',
				behavior: 'smooth'
			}
			document.getElementById(uppermostId)?.scrollIntoView(options);
		}
	};

	const onClickHandler = () => {
		if (navigationLocks.size > 0) {
			// 1. Trigger each lock
			navigationLocks.forEach((lock) => {
				lock.highlight();
			});

			// 2. Scroll to uppermost lock
			scrollToUppermostLock()
		} else {
			setNextCurrentStep(currentStep + 1);
		}
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
							clearNavigationLocks(); // Reset
							setNextCurrentStep(currentStep - 1);
						},
					},
					{
						children: t('go_next_step'),
						iconId: 'fr-icon-arrow-right-s-line',
						priority: 'primary',
						type: 'button',
						onClick: onClickHandler,
						disabled: nextButtonHidden,
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
