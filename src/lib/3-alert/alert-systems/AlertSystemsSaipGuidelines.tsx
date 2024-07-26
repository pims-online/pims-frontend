import { useTranslation, Trans } from 'react-i18next';
import { clsx } from 'clsx';
import { fr } from '@codegouvfr/react-dsfr';

export default function AlertSystemsSaipGuidelines() {
	const { t } = useTranslation('alert_screen');

	const items = [
		{
			translationKey: 'no_phone',
			icon: '/icons/dirty-saip-guidelines-no-phone.png',
		},
		{
			translationKey: 'stay_safe',
			icon: '/icons/dirty-saip-guidelines-stay-safe.png',
		},
		{
			translationKey: 'listen_carefully',
			icon: '/icons/dirty-saip-guidelines-listen-carefully.png',
		},
	];

	return (
		<div style={{ ...fr.spacing('margin', { topBottom: '4v' }) }}>
			<p>{t('alert_systems.saip_guidelines.introduction')}</p>
			<div className="pims-alert-screen__saip-guidelines-grid-container">
				{items.map((item, index) => (
					<div
						key={`saip-guidelines-${item.translationKey}`}
						className={clsx('pims-alert-screen__saip-guidelines-grid-item ', {
							'pims-alert-screen__saip-guidelines-grid-border': index > 0,
						})}
						style={{
							...fr.spacing('padding', { topBottom: '2v' }),
						}}
					>
						<img
							src={item.icon}
							width={40}
							height={40}
							alt={item.translationKey}
							style={{ marginBottom: fr.spacing('2v') }}
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
		</div>
	);
}
