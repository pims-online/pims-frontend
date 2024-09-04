import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBar as DSFRSearchBar } from '@codegouvfr/react-dsfr/SearchBar';
import { mockGeoplateformeFeature } from "./utils";
import type { GeoplateformeApiFeature } from "./types";

import type { HandlerWrapper } from "./types";
type Props = {
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  handlerWrapper: HandlerWrapper;
  addressFeatureList: Array<GeoplateformeApiFeature>
  setShowAddressFeatureList: Dispatch<SetStateAction<boolean>>;
}

export default function SearchBar(props: Props) {
  const { t } = useTranslation('information_screen');
  const { address, setAddress, setShowAddressFeatureList, handlerWrapper, addressFeatureList } = props;

  const onChangeInputAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.currentTarget.value);
    setShowAddressFeatureList(true);
  };

  // If the user pressed Enter in the Input search bar, we need to trigger
  // the fetch to geoplateforme based on the current address and select the best option
  const geoplateformeHandler = async () => {
    // If the featureList is not empty, return the first item
    if ((addressFeatureList || []).length > 0) {
      return addressFeatureList[0];
    }
    // Else, return only the address, with the structure of a GeoplateformeApiFeature
    return mockGeoplateformeFeature(undefined, address, undefined);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const fullHandler = handlerWrapper(geoplateformeHandler);
      fullHandler();
    }
  }


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
    />
  )
}