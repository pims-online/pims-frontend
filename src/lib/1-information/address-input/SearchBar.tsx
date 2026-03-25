import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import type { GeoplateformeApiFeature } from './types';

import type { AddressChosenCallback } from './types';
import Input from '@codegouvfr/react-dsfr/Input';
type Props = {
	address: string;
	setAddress: Dispatch<SetStateAction<string>>;
	onAddressChosen: AddressChosenCallback;
	addressFeatureList: Array<GeoplateformeApiFeature>;
	setShowAddressFeatureList: Dispatch<SetStateAction<boolean>>;
	highlighted: boolean;
	setHighlighted: Dispatch<SetStateAction<boolean>>;
};

export default function SearchBar(props: Props) {
	const { t } = useTranslation('information_screen');
	const {
		address,
		setAddress,
		setShowAddressFeatureList,
		onAddressChosen,
		addressFeatureList,
		highlighted,
		setHighlighted,
	} = props;

	const onChangeInputAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
		setHighlighted(false);

		// Skip update if the address is already as expected (the change is probably comming from outside this component)
		if (event.currentTarget.value === address) {
			return;
		}

		setAddress(event.currentTarget.value);
		setShowAddressFeatureList(true);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			// If the featureList is not empty, pick the first item
			if (addressFeatureList.length > 0) {
				onAddressChosen(addressFeatureList[0]);
			}
		}
	};

	return (
		<Input
			label="Veuillez renseigner votre adresse"
			iconId='fr-icon-search-line'
			nativeInputProps={{
				placeholder: t('address.search_bar_label'),
				value: address,
				onChange: onChangeInputAddress,
				onKeyDown: handleKeyDown,
			}}
			state={highlighted ? "error" : undefined}
			stateRelatedMessage={highlighted ? t("address.address_missing") : undefined}
			data-fr-analytics-rating
			id="pims-step-1__input-address-search-bar"
		/>
	);
}
