import { useTranslation, Trans } from 'react-i18next';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

import { HOME_SCREEN_STEPS } from './constants';
import SectionTemplate from './SectionTemplate';

export default function SectionSteps() {
	const { t } = useTranslation('home_screen');
	const translationKeyPrefix = 'steps';

	const { isDark } = useIsDark();

	return (
		<SectionTemplate i18nKey={translationKeyPrefix}>
			<div className="pims-home-screen__steps-container">
				{HOME_SCREEN_STEPS.map((step) => (
					<div
						key={`${translationKeyPrefix}-list-item-${step.id}`}
						className="pims-home-screen__step-item"
					>
						<img src={isDark ? step.darkIcon : step.lightIcon} alt={step.i18nKey} width={80} height={80} />
						<div className="pims-home-screen__step-item-text-container">
							<p>
								<b className="fr-mr-1w">{step.id}.</b>
								<Trans
									t={t}
									i18nKey={`${translationKeyPrefix}.items.${step.i18nKey}`}
									components={{
										k1: <b />,
									}}
								/>
							</p>
						</div>
					</div>
				))}
			</div>
		</SectionTemplate>
	);
}
