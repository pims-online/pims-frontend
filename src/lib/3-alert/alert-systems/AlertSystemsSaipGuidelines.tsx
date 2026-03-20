import { useTranslation, Trans } from 'react-i18next';
import { clsx } from 'clsx';

import iconNoPhone from '@/assets/alert-icons/no_phone.png';
import iconStaySafeLight from '@/assets/alert-icons/stay_home_light.svg';
import iconStaySafeDark from '@/assets/alert-icons/stay_home_dark.svg';
import iconListenCarefully from '@/assets/alert-icons/radio_on.png';

import { Container } from '@/components';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

export default function AlertSystemsSaipGuidelines() {
	const { t } = useTranslation('alert_screen');

	const { isDark } = useIsDark();

	const items = [
		{
			translationKey: 'no_phone',
			iconLight: iconNoPhone,
			iconDark: iconNoPhone,
		},
		{
			translationKey: 'stay_safe',
			iconLight: iconStaySafeLight,
			iconDark: iconStaySafeDark,
		},
		{
			translationKey: 'listen_carefully',
			iconLight: iconListenCarefully,
			iconDark: iconListenCarefully,
		},
	];

	return (
		<Container>
			<p className={clsx('fr-mt-6v', 'pims-components__list-introducer')}>
				{t('alert_systems.saip_guidelines.introduction')}
			</p>
			<div className="pims-alert-screen__saip-guidelines-grid-container">
				{items.map((item, index) => (
					<div
						key={`saip-guidelines-${item.translationKey}`}
						className={clsx(
							'fr-py-2v',
							'pims-alert-screen__saip-guidelines-grid-item ',
							{
								'pims-alert-screen__saip-guidelines-grid-border': index > 0,
							}
						)}
					>
						<img
							src={isDark ? item.iconDark : item.iconLight}
							width={80}
							height={80}
							aria-hidden={true}
							className="fr-mb-2v"
						/>
						<p>
							<Trans
								t={t}
								i18nKey={`alert_systems.saip_guidelines.${item.translationKey}`}
								components={{
									k1: (
										<b className="pims-alert-screen__saip-guidelines-grid-text-bold" />
									),
								}}
							/>
						</p>
					</div>
				))}
			</div>
		</Container>
	);
}
