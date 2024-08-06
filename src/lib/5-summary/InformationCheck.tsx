import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../../AppContextProvider';
import { Title, Container } from '../../components';

import InformationCheckItem from './InformationCheckItem';

type Props = {
	navigateToInformationScreen: () => void;
	navigateToEmergencyKitScreen: () => void;
};

export default function InformationCheck(props: Props) {
	const { t } = useTranslation('summary_screen');
	const { emergencyKitStorage, usefulNumbers, address, gatheringPlace } =
		useContext(AppContext);
	const { navigateToInformationScreen, navigateToEmergencyKitScreen } = props;

	const usefulNumberList = [
		t('information_check.items.useful_numbers.town_hall', {
			number: usefulNumbers.townHall,
		}),
		t('information_check.items.useful_numbers.insurance', {
			number: usefulNumbers.insurance,
		}),
		t('information_check.items.useful_numbers.relatives', {
			number: usefulNumbers.relatives,
		}),
		t('information_check.items.useful_numbers.others', {
			number: usefulNumbers.others,
		}),
	];

	return (
		<Container>
			<Title text={t('information_check.title')} />
			<p>{t('information_check.warning')}</p>
			<InformationCheckItem
				subtitle={t('information_check.items.address')}
				onClickModify={navigateToInformationScreen}
			>
				{address}
			</InformationCheckItem>
			<InformationCheckItem
				subtitle={t('information_check.items.gathering_place')}
				onClickModify={navigateToInformationScreen}
			>
				{gatheringPlace || (
					<i>{t('information_check.items.gathering_place_unknown')}</i>
				)}
			</InformationCheckItem>
			<InformationCheckItem
				subtitle={t('information_check.items.kit_storage')}
				onClickModify={navigateToEmergencyKitScreen}
			>
				{emergencyKitStorage}
			</InformationCheckItem>
			<InformationCheckItem
				subtitle={t('information_check.items.useful_numbers.subtitle')}
				onClickModify={navigateToEmergencyKitScreen}
			>
				<span className="pims__arrowed-list">
					{usefulNumberList.map((translation) => (
						<li key={`check-number-${translation}`}>{translation}</li>
					))}
				</span>
			</InformationCheckItem>
		</Container>
	);
}
