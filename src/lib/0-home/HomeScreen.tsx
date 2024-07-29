import { useTranslation } from 'react-i18next';

import ProcessInformation from './ProcessInformation';
import StartButton from './StartButton';

type Props = {
	navigateToFirstStep: () => void;
};

export default function HomeScreen(props: Props) {
	const { t } = useTranslation('home_screen');

	return (
		<div>
			<h4
				id="pims-home-screen__title-protection"
				className="fr-mb-8v fr-py-3v fr-px-3w"
			>
				{t('protection')}
			</h4>
			<ProcessInformation />
			<StartButton navigateToFirstStep={props.navigateToFirstStep} />
		</div>
	);
}
