import { useState, useEffect, useContext } from 'react';

import { AppContext } from '../../../providers';
import { Container, CircularProgress } from '@/components';
import { NavigationLock } from '@/layouts/types';

import AddressFeatureList from './AddressFeatureList';
import GeolocationButton from './GeolocationButton';
import SearchBar from './SearchBar';
import type {
	GeoplateformeApiFeature,
	GeorisqueApiResponse,
} from './types';
import {
	getAutocompletedAddresses,
	getRisksAroundCoordinates,
	importRiskList,
} from './utils';
import { Position, Risk } from '@/providers/AppContextConfig';


type Props = {
	registerNavLock: (name: string, lock?: NavigationLock) => void;
}

export default function AddressInput(props: Props) {
	const { registerNavLock } = props;

	const { setRiskList, position, setPosition } =
		useContext(AppContext);

	// ----- State management -----

	// The address typed by the user, may not be valid
	const searchParams = new URLSearchParams(window.location.search);
	const addressFromUrl = searchParams.get('address');
	const [tmpAddress, setTmpAddress] = useState<string>(position?.address || addressFromUrl || '');
	// State to manage the results of the query on data.geopf api
	const [addressFeatureList, setAddressFeatureList] = useState<
		Array<GeoplateformeApiFeature>
	>([]);
	// State to manage when to show the results of the data.geopf query, to help select a recognized address
	const [showAddressFeatureList, setShowAddressFeatureList] = useState(false);
	// State to manage API loading
	const [isFetchingAPI, setIsFetchingAPI] = useState(false);
	// State to manage whether the input field is highlighted 
	const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

	// ----- Geoplateforme autocomplete -----

	// Every time the address is updated, make a request on data.geopf to update the list
	useEffect(() => {
		if (tmpAddress) {
			getAutocompletedAddresses(tmpAddress, setAddressFeatureList);
		}
	}, [tmpAddress]);

	// ----- Georisque response handler -----

	const handleGeorisqueResponse = (
		georisqueResponse: GeorisqueApiResponse | undefined
	) => {
		// 1. Get the risks to focus on
		const riskList: Array<Risk> | undefined = georisqueResponse
			? importRiskList(georisqueResponse)
			: undefined;

		// 2. Update the state -> display the Risk list
		setRiskList(riskList);

		// 3. Hide the address list
		setShowAddressFeatureList(false);
	};

	// ----- Handler wrapper -----

	// We have different ways to retrieve Geoplateforme Feature,
	// But what is before and after remains the same
	// Thus, we provider a wrapper for handlers, where the handlers
	// Should be async method returning one Geoplateforme Feature
	const chooseAddress =
		async (geoplateformeFeature: GeoplateformeApiFeature) => {
		// 1 - Display that we are fetching something
		setIsFetchingAPI(true);
		setShowAddressFeatureList(false);
		setRiskList(undefined);

		try {
			// 2 - Apply the handler to get the Geoplateforme feature
			const coordinates = geoplateformeFeature.geometry.coordinates;
			const address = geoplateformeFeature.properties.label;
			const inseeCode = geoplateformeFeature.properties.citycode;

			// 3 - Update the context data based on the feature
			setTmpAddress(address);
			const position: Position = {
				address,
				coords: {
					longitude: coordinates[0],
					latitude: coordinates[1],
				},
				inseeCode,
			};
			setPosition(position);

			// 4 - Fetch Georisque API
			const georisqueResponse = await getRisksAroundCoordinates(
				coordinates,
				address,
				inseeCode
			);

			// 5 - Handle the Georisque Response
			handleGeorisqueResponse(georisqueResponse);
		} catch (error) {
			console.error(error);
		}

		// 6 - Display that the process is finished
		setIsFetchingAPI(false);
	};


	const highlight = () => {
		setIsHighlighted(true);
	};

	useEffect(() => {
		const lockName = "address";
		if (position === undefined) {
			const lock: NavigationLock = {
				highlight,
				htmlElementId: 'pims-step-1__input-address-search-bar',
			};
			registerNavLock(lockName, lock);
		} else {
			registerNavLock(lockName, undefined);
		}
	}, [position]);

	return (
		<>
			<SearchBar
				address={tmpAddress}
				setAddress={setTmpAddress}
				onAddressChosen={chooseAddress}
				addressFeatureList={addressFeatureList}
				setShowAddressFeatureList={setShowAddressFeatureList}
				highlighted={isHighlighted}
				setHighlighted={setIsHighlighted}
			/>
			{showAddressFeatureList && addressFeatureList?.length > 0 && (
				<AddressFeatureList
					onAddressChosen={chooseAddress}
					addressFeatureList={addressFeatureList}
				/>
			)}
			<GeolocationButton
				onAddressChosen={chooseAddress}
			/>
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
