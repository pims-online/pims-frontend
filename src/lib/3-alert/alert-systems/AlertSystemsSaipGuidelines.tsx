import { useTranslation, Trans } from 'react-i18next';
import { clsx } from 'clsx';

import iconNoPhone from '@public/icons/dirty_saip_guidelines_no_phone.png';
import iconStaySafe from '@public/icons/dirty_saip_guidelines_stay_safe.png';
import iconListenCarefully from '@public/icons/dirty_saip_guidelines_listen_carefully.png';

import { Container } from '../../../components';

export default function AlertSystemsSaipGuidelines() {
	const { t } = useTranslation('alert_screen');

	const items = [
		{
			translationKey: 'no_phone',
			icon: iconNoPhone,
		},
		{
			translationKey: 'stay_safe',
			icon: iconStaySafe,
		},
		{
			translationKey: 'listen_carefully',
			icon: iconListenCarefully,
		},
	];

	return (
		<Container>
			<p className={clsx('fr-mt-6v', 'pims__list-introducer')}>
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
							src={item.icon}
							width={40}
							height={40}
							alt={item.translationKey}
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
