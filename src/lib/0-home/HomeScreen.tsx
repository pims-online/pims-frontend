import { useTranslation } from 'react-i18next';

import SectionOnlineProcedure from './SectionOnlineProcedure';
import SectionTemplate from './SectionTemplate';
import SectionRequiredFieldMeaning from './SectionRequiredFieldMeaning';
import SectionSteps from './SectionSteps';
import StartButton from './StartButton';

type Props = {
	navigateToFirstStep: () => void;
};

export default function HomeScreen(props: Props) {
	const { t } = useTranslation('home_screen');

	return (
		<div>
			<h1>
				{t('title')}
			</h1>
			<h3
				id="pims-home-screen__title-protection"
				className="fr-mb-8v fr-py-3v fr-px-3w"
			>
				{t('protection')}
			</h3>
			<SectionOnlineProcedure />
			<SectionTemplate i18nKey="recipient" />
			<SectionTemplate i18nKey="information" />
			<SectionSteps />
			<SectionRequiredFieldMeaning />
			<StartButton navigateToFirstStep={props.navigateToFirstStep} />
		</div>
	);
}
