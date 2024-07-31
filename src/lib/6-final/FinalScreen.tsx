import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Title } from '../../components';
import { AppContext } from '../../AppContextProvider';

import FinalButton from './FinalButton';
import FinalActions from './FinalActions';

type Props = {
	navigateToHomeScreen: () => void;
};

export default function FinalScreen(props: Props) {
	const { navigateToHomeScreen } = props;
	const { t } = useTranslation('final_screen');
	const { pimsFileName } = useContext(AppContext);
	return (
		<div>
			<Title text={t('success', { customName: pimsFileName })} />
			<FinalActions />
			<FinalButton
				navigateToHomeScreen={navigateToHomeScreen}
				buttonTitle={t('goBackHome')}
			/>
		</div>
	);
}
