import { useTranslation, Trans } from 'react-i18next';

export default function AlertSystemsList() {
	const { t } = useTranslation('alert_screen');

	return (
		<>
			<p className="pims-components__list-introducer">
				{t('alert_systems.activation')}
			</p>
			<ul className="pims-components__toothed-list">
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
