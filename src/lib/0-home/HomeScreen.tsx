import { useTranslation } from 'react-i18next';
import { fr } from '@codegouvfr/react-dsfr';
import { Button } from '@codegouvfr/react-dsfr/Button';

import { STEPS } from '../../layouts/constants';

type Props = {
	navigateToFirstStep: () => void;
};

export default function HomeScreen(props: Props) {
	const { navigateToFirstStep } = props;
	const { t } = useTranslation(['home_screen', 'stepper']);

	return (
		<div>
			<h5
				id="pims-home-screen__protection"
				style={{
					...fr.spacing('padding', { topBottom: '1w', rightLeft: '2w' }),
				}}
			>
				{t('home_screen:protection')}
			</h5>
			<h5 className="pims__screen-title">{t('home_screen:summary')}</h5>
			<p>{t('home_screen:risk_identification')}</p>
			<p>{t('home_screen:five_steps')}</p>
			<ol>
				{STEPS.map((step) => (
					<li key={`home-screen-step-${step.keyTranslation}`}>
						{t(`stepper:${step.keyTranslation}`)}
					</li>
				))}
			</ol>
			<p>{t('home_screen:trustworthy_sources')}</p>
			<div className="pims__responsive-flexbox-col">
				<h2
					id="pims-home-screen__start-process-title"
					className="pims__screen-title"
				>
					{t('home_screen:start_button.title')}
				</h2>
				<p id="pims-home-screen__start-process-subtitle">
					{t('home_screen:start_button.subtitle')}
				</p>
			</div>
			<div className="pims__responsive-flexbox-col">
				<Button size="medium" onClick={navigateToFirstStep} priority="primary">
					{t('home_screen:start_button.text')}
				</Button>
			</div>
		</div>
	);
}
