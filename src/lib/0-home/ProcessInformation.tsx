import { useTranslation } from 'react-i18next';

import { Container, Title, RequiredFieldIndicator } from '@/components';
import { STEPS } from '@/layouts/constants';

export default function ProcessInformation() {
	const { t } = useTranslation(['home_screen', 'stepper']);

	return (
		<Container>
			<Title text={t('home_screen:summary')} responsiveAlignment />
			<p>{t('home_screen:risk_identification')}</p>
			<p className="pims-components__list-introducer">
				{t('home_screen:five_steps')}
			</p>
			<ol className="fr-mb-6v fr-mt-0">
				{STEPS.map((step) => (
					<li key={`home-screen-step-${step.keyTranslation}`}>
						{t(`stepper:${step.keyTranslation}`)}
					</li>
				))}
			</ol>
			<p>{t('home_screen:trustworthy_sources')}</p>
			<p>
				<RequiredFieldIndicator />
				{` : ${t('home_screen:mandatory_fields')}`}
			</p>
		</Container>
	);
}
