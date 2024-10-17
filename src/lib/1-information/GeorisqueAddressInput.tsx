import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

import { Container, RequiredFieldIndicator, Title } from '@/components';

import AddressInput from './address-input/AddressInput';

export default function GeorisqueAddressInput() {
	const { t } = useTranslation('information_screen');

	return (
		<Container>
			<Title contained text="J'identifie les risques majeurs qui m'entourent" />
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
				{`${t('address.call_to_action')} `}
				<RequiredFieldIndicator inverted />
			</p>
			<AddressInput />
		</Container>
	);
}
