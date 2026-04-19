import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Title, Divider } from '@/components';
import { AppContext } from '../../providers';

import FinalButton from './FinalButton';
import FinalActions from './FinalActions';

type Props = {
	navigateToHomeScreen: () => void;
};

export default function FinalScreen(props: Props) {
	const { navigateToHomeScreen } = props;
	const { t } = useTranslation('final_screen');
	const { pimsTitle } = useContext(AppContext);
	const title = pimsTitle
		? t('success', { customName: pimsTitle })
		: t('success_unnamed');

	return (
		<div>
			<Title text={title} />
			<FinalActions />
			<Divider />
			<FinalButton
				navigateToHomeScreen={navigateToHomeScreen}
				buttonTitle={t('goBackHome')}
			/>
		</div>
	);
}
