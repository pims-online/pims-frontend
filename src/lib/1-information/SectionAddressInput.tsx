import { useTranslation } from 'react-i18next';

import { Container, RequiredFieldIndicator, Title } from '@/components';

import AddressInput from './address-input/AddressInput';

export default function SectionAddressInput() {
	const { t } = useTranslation('information_screen');

	return (
		<Container>
			<Title contained text={t('address.title')} />
			<p className="pims-components__text-indicator">
				{`${t('address.call_to_action')} `}
				<RequiredFieldIndicator inverted />
			</p>
			<AddressInput />
		</Container>
	);
}
