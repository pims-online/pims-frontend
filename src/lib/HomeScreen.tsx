import { useTranslation } from 'react-i18next';
import { STEPS } from '../layouts/constants';
import { fr } from '@codegouvfr/react-dsfr';
import { Button } from '@codegouvfr/react-dsfr/Button';

type Props = {
	navigateToFirstStep: () => void;
};

export default function HomeScreen(props: Props) {
	const { navigateToFirstStep } = props;
	const { t } = useTranslation(['homeScreen', 'stepper']);
	return (
		<div>
			<h5
				id="pims-home-screen__protection"
				style={{
					...fr.spacing('padding', { topBottom: '1w', rightLeft: '2w' }),
				}}
			>
				{t('homeScreen:protection')}
			</h5>
			<h5 className="pims__screen-title">{t('homeScreen:summary')}</h5>
			<p>{t('homeScreen:riskIdentification')}</p>
			<p>{t('homeScreen:fiveSteps')}</p>
			<ol>
				{STEPS.map((step) => (
					<li key={`home-screen-step-${step.keyTranslation}`}>
						{t(`stepper:${step.keyTranslation}`)}
					</li>
				))}
			</ol>
			<p>{t('homeScreen:trustworthySources')}</p>
			<div className="pims__responsive-flexbox-col">
				<h2
					id="pims-home-screen__start-process-title"
					className="pims__screen-title"
				>
					{t('homeScreen:startButton.title')}
				</h2>
				<p id="pims-home-screen__start-process-subtitle">
					{t('homeScreen:startButton.subtitle')}
				</p>
			</div>
			<div className="pims__responsive-flexbox-col">
				<Button size="medium" onClick={navigateToFirstStep} priority="primary">
					{t('homeScreen:startButton.text')}
				</Button>
			</div>
		</div>
	);
}
