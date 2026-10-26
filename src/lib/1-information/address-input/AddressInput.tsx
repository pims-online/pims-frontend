import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { Button } from '@codegouvfr/react-dsfr/Button';

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
	fetchAutocompletedAddresses,
	getRisksAroundCoordinates,
	importRiskList,
} from './utils';
import { Position, Risk } from '@/providers/AppContextConfig';


type Props = {
	registerNavLock: (name: string, lock?: NavigationLock) => void;
}

export default function AddressInput(props: Props) {
	const { registerNavLock } = props;

	const { t } = useTranslation('information_screen');
	const { riskList, setRiskList, position, setPosition } =
		useContext(AppContext);

	// ----- State management -----

	// The address typed by the user, may not be valid
	const searchParams = new URLSearchParams(window.location.search);
	const addressFromUrl = searchParams.get('address');
	const [tmpAddress, setTmpAddress] = useState<string>(position?.address || addressFromUrl || '');
	// State to manage the results of the query on data.geopf api
	const [addressFeatureList, setAddressFeatureList] = useState<
		Array<GeoplateformeApiFeature>|undefined
	>(undefined);
	// State to manage when to show the results of the data.geopf query, to help select a recognized address
	const [showAddressFeatureList, setShowAddressFeatureList] = useState(false);
	// State to manage API loading
	const [isFetchingAPI, setIsFetchingAPI] = useState(false);
	// State to manage whether the input field is highlighted 
	const [isHighlighted, setIsHighlighted] = useState<boolean>(false);
	// State to manage whether the user tried to move on while the risks were loading
	const [isRisksLockHighlighted, setIsRisksLockHighlighted] = useState<boolean>(false);

	// ----- Geoplateforme autocomplete -----

	// Every time the address is updated, make a request on data.geopf to update the list
	useEffect(() => {
		let cancelled: boolean = false;

		if (tmpAddress.length < 3) {
			setAddressFeatureList(undefined);
		}

		async function handler() {
			if (tmpAddress.length >= 3) {
				const addresses = await fetchAutocompletedAddresses(tmpAddress);
				
				if (cancelled) {
					return;
				}
				setAddressFeatureList(addresses);
			}
		}
		handler()

		function cancel() {
			cancelled = true;
		}
		return cancel;
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
	// Fetches the risks around a position and stores them in the context.
	// Used when an address is chosen, and again when the user retries after a failure.
	// riskList stays undefined on failure, which keeps the "risks" navigation lock on.
	const loadRisks = async (position: Position) => {
		// 1 - Display that we are fetching something
		setIsFetchingAPI(true);
		setIsRisksLockHighlighted(false);
		setRiskList(undefined);

		try {
			// 2 - Fetch Georisque API (coordinates are [longitude, latitude], as Georisque expects)
			const georisqueResponse = await getRisksAroundCoordinates(
				[position.coords.longitude, position.coords.latitude],
				position.address,
				position.inseeCode
			);

			// 3 - Handle the Georisque Response
			handleGeorisqueResponse(georisqueResponse);
		} catch (error) {
			console.error(error);
		}

		// 4 - Display that the process is finished
		setIsFetchingAPI(false);
	};

	const chooseAddress =
		async (geoplateformeFeature: GeoplateformeApiFeature) => {
		setIsHighlighted(false);
		setShowAddressFeatureList(false);

		// 1 - Update the context data based on the Geoplateforme feature
		const coordinates = geoplateformeFeature.geometry.coordinates;
		const address = geoplateformeFeature.properties.label;
		const inseeCode = geoplateformeFeature.properties.citycode;

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

		// 2 - Fetch the risks for this position
		await loadRisks(position);
	};

	// The risks are required to generate the PIMS: an address chosen but whose risks
	// are still loading, or failed to load, must not let the user move on.
	const risksLoadFailed = position !== undefined && riskList === undefined && !isFetchingAPI;


	const highlight = () => {
		setIsHighlighted(true);
	};

	useEffect(() => {
		const lockName = "address";
		if (position === undefined) {
			const lock: NavigationLock = {
				highlight,
				focusId: 'pims-step-1__input-address-search-bar',
				scrollId: 'pims-step-1__input-address-section'
			};
			registerNavLock(lockName, lock);
		} else {
			registerNavLock(lockName, undefined);
		}
	}, [position]);

	useEffect(() => {
		const lockName = "risks";
		if (position !== undefined && riskList === undefined) {
			const lock: NavigationLock = {
				highlight: () => setIsRisksLockHighlighted(true),
				focusId: 'pims-step-1__input-address-search-bar',
				scrollId: 'pims-step-1__input-address-section'
			};
			registerNavLock(lockName, lock);
		} else {
			registerNavLock(lockName, undefined);
		}
	}, [position, riskList]);

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
			{showAddressFeatureList && addressFeatureList !== undefined && (
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
			{/* Live region: announces the loading / failure messages to screen readers */}
			<div aria-live="polite">
				{isFetchingAPI && isRisksLockHighlighted && (
					<Alert
						className="fr-mt-3v"
						severity="info"
						small
						description={t('address.risks_loading')}
					/>
				)}
				{risksLoadFailed && position !== undefined && (
					<Container withoutMarginBottom className="fr-mt-3v">
						<Alert
							severity="error"
							small
							description={t('address.risks_failed')}
						/>
						<Button
							className="fr-mt-2v"
							priority="secondary"
							size="small"
							onClick={() => loadRisks(position)}
						>
							{t('retry')}
						</Button>
					</Container>
				)}
			</div>
		</>
	);
}
