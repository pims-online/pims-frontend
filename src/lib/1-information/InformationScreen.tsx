import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';
import { Accordion } from '@codegouvfr/react-dsfr/Accordion';

import { AppContext } from '../../AppContextProvider';
import { Title, Container } from '../../components';

import AddressInput from './address-input/AddressInput';
import RiskList from './risks/RiskList';
import { RISK_LIST } from './risks/constants';

type Props = {
	setIsNavigateNextLocked: (nextValue: boolean) => void;
};

export default function InformationScreen(props: Props) {
	const { t } = useTranslation('information_screen');
	const { setIsNavigateNextLocked } = props;
	const { riskIdList, coordinates } = useContext(AppContext);

	useEffect(() => {
		// Block navigation while the coordinates of the user and the related risks are unknown
		if (
			!riskIdList?.length ||
			coordinates.latitude === undefined ||
			coordinates.longitude === undefined
		) {
			setIsNavigateNextLocked(true);
		} else {
			setIsNavigateNextLocked(false);
		}
	}, [riskIdList, coordinates, setIsNavigateNextLocked]);

	return (
		<div>
			<h5
				className={clsx(
					'fr-py-2v fr-px-2w',
					'pims-information-screen__georisque-item'
				)}
			>
				{t('address.title')}
			</h5>
			<p
				className={clsx(
					'fr-py-2v fr-px-2w',
					'pims-information-screen__georisque-item'
				)}
			>
				{t('address.call_to_action')}
			</p>
			<AddressInput />
			{riskIdList?.length > 0 && (
				<Container>
					<Title text={t('safe_behavior')} />
					<RiskList riskIdList={riskIdList} />
				</Container>
			)}
			<Accordion label={t('see_more_risks')}>
				<RiskList
					riskIdList={RISK_LIST.map((item) => item.georisqueApiIdentifier)}
				/>
			</Accordion>
		</div>
	);
}
