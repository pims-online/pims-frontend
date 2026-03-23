import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBar as DSFRSearchBar } from '@codegouvfr/react-dsfr/SearchBar';
import type { GeoplateformeApiFeature } from './types';

import type { AddressChosenCallback } from './types';
type Props = {
	address: string;
	setAddress: Dispatch<SetStateAction<string>>;
	onAddressChosen: AddressChosenCallback;
	addressFeatureList: Array<GeoplateformeApiFeature>;
	setShowAddressFeatureList: Dispatch<SetStateAction<boolean>>;
};

export default function SearchBar(props: Props) {
	const { t } = useTranslation('information_screen');
	const {
		address,
		setAddress,
		setShowAddressFeatureList,
		onAddressChosen,
		addressFeatureList,
	} = props;

	const onChangeInputAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
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
		<DSFRSearchBar
			renderInput={({ className, id, type }) => (
				<input
					className={className}
					id={id}
					placeholder={t('address.search_bar_label')}
					type={type}
					value={address}
					// Note: The default behavior for an input of type 'text' is to clear the input value when the escape key is pressed.
					// However, due to a bug in @gouvfr/dsfr the escape key event is not propagated to the input element.
					// As a result this onChange is not called when the escape key is pressed.
					onChange={onChangeInputAddress}
					// Same goes for the keydown event so this is useless but we hope the bug will be fixed soon
					onKeyDown={handleKeyDown}
				/>
			)}
			data-fr-analytics-rating
			id="pims-step-1__input-address-search-bar"
		/>
	);
}
