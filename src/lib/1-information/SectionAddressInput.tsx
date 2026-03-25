import { useTranslation } from 'react-i18next';

import { Container, RequiredFieldIndicator, Title } from '@/components';
import { NavigationLock } from '@/layouts/types';

import AddressInput from './address-input/AddressInput';


type Props = {
	registerNavLock: (name: string, lock?: NavigationLock) => void;
}

export default function SectionAddressInput(props: Props) {
	const { registerNavLock } = props;

	const { t } = useTranslation('information_screen');

	return (
		<Container>
			<Title contained text={t('address.title')} />
			<p className="pims-components__text-indicator">
				{`${t('address.call_to_action')} `}
				<RequiredFieldIndicator inverted />
			</p>
			<AddressInput registerNavLock={registerNavLock} />
		</Container>
	);
}
