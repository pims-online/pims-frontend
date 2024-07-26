import { useTranslation, Trans } from 'react-i18next';

export default function AlertSystemsList() {
	const { t } = useTranslation('alert_screen');

	return (
		<>
			<p>{t('alert_systems.activation')}</p>
			<ul className="pims__toothed-list">
				<li>
					<Trans
						t={t}
						i18nKey={'alert_systems.systems.fr_alert'}
						components={{
							k1: <b />,
						}}
					/>
				</li>
				<li>
					<Trans
						t={t}
						i18nKey={'alert_systems.systems.saip'}
						components={{
							k1: <b />,
						}}
					/>
				</li>
			</ul>
		</>
	);
}
