import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '@codegouvfr/react-dsfr/SearchBar';

import { AppContext } from '../../../providers';
import { Container, CircularProgress } from '../../../components';

import AddressFeatureList from './AddressFeatureList';
import type { DataGeopfFeature, GeorisqueAPIResponse } from './types';
import {
	getAutocompletedAddresses,
	getRisksAroundCoordinates,
	getEffectiveRiskIdentifierListFromGeorisqueResponse,
} from './utils';

export default function AddressInput() {
	const { t } = useTranslation('information_screen');
	const {
		setRiskIdList,
		address,
		setAddress,
		setCoordinates,
		setInseeCode,
		inseeCode,
	} = useContext(AppContext);

	// ----- State management -----
	// State to manage the results of the query on data.geopf api
	const [addressFeatureList, setAddressFeatureList] = useState<
		Array<DataGeopfFeature>
	>([]);
	// State to manage when to show the results of the data.geopf query, to help select a recognized address
	const [showAddressFeatureList, setShowAddressFeatureList] = useState(true);
	// State to manage API loading
	const [isFetchingAPI, setIsFetchingAPI] = useState(false);

	// Every time the address is updated, make a request on data.geopf to update the list
	useEffect(() => {
		if (address) {
			getAutocompletedAddresses(address, setAddressFeatureList);
		}
	}, [address]);

	const onChangeInputAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAddress(event.currentTarget.value);
		setShowAddressFeatureList(true);
	};

	const handleGeorisqueResponse = (
		georisqueResponse: GeorisqueAPIResponse | undefined
	) => {
		// 1. Get the identifiers of the risks to focus
		const riskIdList: Array<string> = georisqueResponse
			? getEffectiveRiskIdentifierListFromGeorisqueResponse(georisqueResponse)
			: [];
		// 2. Update the riskIdList -> display the list
		setRiskIdList(riskIdList);
		// 3. Hide the address list
		setShowAddressFeatureList(false);
	};

	// Retrieve georisque response with keyboard "enter"
	const onKeyDown = async (
		event: React.KeyboardEvent<HTMLInputElement>
	): Promise<void> => {
		if (event.key === 'Enter') {
			// 0. Set is fetching to True and hide the list
			setIsFetchingAPI(true);
			setShowAddressFeatureList(false);
			// 1. Make a request on georisque API to obtain GeorisqueAPIResponse, based on the address
			const georisqueResponse = await getRisksAroundCoordinates(
				undefined,
				address,
				inseeCode
			);
			// 2. Update the coordinates
			if (georisqueResponse) {
				setCoordinates({
					latitude: georisqueResponse.latitude,
					longitude: georisqueResponse.longitude,
				});
			}
			// 3. Process the response
			handleGeorisqueResponse(georisqueResponse);
			// 4. Terminate the loading
			setIsFetchingAPI(false);
		}
	};

	// Retrieve georisque response by clicking on an item of the feature list
	const onClickListItem = async (
		addressFeature: DataGeopfFeature
	): Promise<void> => {
		// 0. Set is fetching to True and hide the list
		setIsFetchingAPI(true);
		setShowAddressFeatureList(false);
		// 1. Update the address
		setAddress(addressFeature.properties.label);
		// 2. Make a request on georisque API to obtain GeorisqueAPIResponse, based on the coordinates (latlon)
		const coordinates = addressFeature.geometry.coordinates;
		const georisqueResponse = await getRisksAroundCoordinates(
			coordinates,
			address,
			inseeCode
		);
		// 3. Update the coordinates and the insee code
		setCoordinates({
			longitude: coordinates[0], // georisqueResponse.longitude,
			latitude: coordinates[1], //georisqueResponse.latitude,
		});
		setInseeCode(addressFeature.properties.citycode);
		// 4. Process the response
		handleGeorisqueResponse(georisqueResponse);
		// 5. Terminate the loading
		setIsFetchingAPI(false);
	};

	return (
		<>
			<SearchBar
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
						onKeyDown={onKeyDown}
					/>
				)}
			/>
			{showAddressFeatureList && addressFeatureList?.length > 0 && (
				<AddressFeatureList
					onClickListItem={onClickListItem}
					addressFeatureList={addressFeatureList}
				/>
			)}
			{isFetchingAPI && (
				<Container
					withoutMarginBottom
					flexboxAlignment="center"
					flexboxDirection="column"
					className="fr-mt-3v"
				>
					<CircularProgress color="blue" size="medium" />
				</Container>
			)}
		</>
	);
}
