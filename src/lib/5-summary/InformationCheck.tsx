import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../../providers';
import { Title, Container } from '@/components';

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
			// Prevent the escape during interpolation (example : prevent turning an apostrophe into &#39;)
			interpolation: { escapeValue: false },
		}),
		t('information_check.items.useful_numbers.insurance', {
			number: usefulNumbers.insurance,
			interpolation: { escapeValue: false },
		}),
		t('information_check.items.useful_numbers.relatives', {
			number: usefulNumbers.relatives,
			interpolation: { escapeValue: false },
		}),
		t('information_check.items.useful_numbers.others', {
			number: usefulNumbers.others,
			interpolation: { escapeValue: false },
		}),
	];

	return (
		<Container>
			<Title text={t('information_check.title')} contained />
			<p>{t('information_check.modification')}</p>
			<InformationCheckItem
				subtitle={t('information_check.items.address')}
				onClickModify={navigateToInformationScreen}
				itemId="address"
			>
				{address}
			</InformationCheckItem>
			<InformationCheckItem
				subtitle={t('information_check.items.gathering_place')}
				onClickModify={navigateToEmergencyKitScreen}
				itemId="gathering-place"
			>
				{gatheringPlace}
			</InformationCheckItem>
			<InformationCheckItem
				subtitle={t('information_check.items.kit_storage')}
				onClickModify={navigateToEmergencyKitScreen}
				itemId="emergency-kit-storage"
			>
				{emergencyKitStorage}
			</InformationCheckItem>
			<InformationCheckItem
				subtitle={t('information_check.items.useful_numbers.subtitle')}
				onClickModify={navigateToEmergencyKitScreen}
				itemId="useful-numbers"
			>
				<span className="pims-components__arrowed-list">
					{usefulNumberList.map((translation) => (
						<li key={`check-number-${translation}`}>{translation}</li>
					))}
				</span>
			</InformationCheckItem>
		</Container>
	);
}
