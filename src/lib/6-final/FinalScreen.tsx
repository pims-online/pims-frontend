import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Title } from '@/components';
import { AppContext } from '../../providers';

import FinalButton from './FinalButton';
import FinalActions from './FinalActions';

type Props = {
	navigateToHomeScreen: () => void;
};

export default function FinalScreen(props: Props) {
	const { navigateToHomeScreen } = props;
	const { t } = useTranslation('final_screen');
	const { pimsFileName } = useContext(AppContext);
	const title = pimsFileName
		? t('success', { customName: pimsFileName })
		: t('success_unnamed');

	return (
		<div>
			<Title text={title} />
			<FinalActions />
			<FinalButton
				navigateToHomeScreen={navigateToHomeScreen}
				buttonTitle={t('goBackHome')}
			/>
		</div>
	);
}
