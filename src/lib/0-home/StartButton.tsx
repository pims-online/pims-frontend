import { useTranslation } from 'react-i18next';
import { Button } from '@codegouvfr/react-dsfr/Button';

import { Container } from '@/components';

type Props = {
	navigateToFirstStep: () => void;
};

export default function StartButton(props: Props) {
	const { t } = useTranslation('home_screen');

	return (
		<Container
			flexboxAlignment="center"
			flexboxDirection="column"
			withoutMarginBottom
			withoutDivider
			className="fr-mb-4v"
		>
			<h2 id="pims-home-screen__start-process-title">
				{t('start_button.title')}
			</h2>
			<p id="pims-home-screen__start-process-subtitle" className="fr-mb-3v">
				{t('start_button.subtitle')}
			</p>
			<Button
				size="medium"
				onClick={props.navigateToFirstStep}
				priority="primary"
				data-fr-analytics-rating
				id="pims-step-0__button-start"
			>
				{t('start_button.text')}
			</Button>
		</Container>
	);
}
