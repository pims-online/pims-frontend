import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { Alert } from '@codegouvfr/react-dsfr/Alert';

import { CircularProgress, Container } from '@/components';

import {
	getUserLocation,
	getGeoplateformeFeaturesFromCoordinates,
} from './utils';
import type { GeoplateformeApiFeature, AddressChosenCallback } from './types';

type Props = {
	onAddressChosen: AddressChosenCallback;
};

export default function GeolocationButton(props: Props) {
	const { t } = useTranslation('information_screen');
	const { onAddressChosen } = props;

	const [isProcessing, setIsProcessing] = useState(false);
	const [hasError, setHasError] = useState(false);

	const isGeolocationAPISupported = !!navigator.geolocation;

	// If the navigator does not support geolocation, display nothing
	if (!isGeolocationAPISupported) return null;

	const handleGetGeoplateformeFeature = async (
		position: GeolocationPosition
	) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;

		// 1 - Fetch address Feature List
		let featureList: GeoplateformeApiFeature[] = [];
		try {
			featureList = await getGeoplateformeFeaturesFromCoordinates({
				latitude,
				longitude,
			});
		} finally {
			// 2 - Notify the user that it has been done
			setIsProcessing(false);
		}

		// 3 - If list is not empty
		if (featureList.length > 0) {
			// 4 - Select the first address of the list
			onAddressChosen(featureList[0]);
		}
	};

	const handleGeolocationError = async (
		error: GeolocationPositionError
	) => {
		setIsProcessing(false);
		setHasError(true);

		console.error(`Error when getting position: ${error.message}`)
	}

	const handleGetGeolocation = () => {
		setIsProcessing(true);
		// Request navigator geolocation API to get user location
		// Then use the handler to get feature list from Geoplateforme
		// We need to provide the handler because the API does not return the response
		getUserLocation(handleGetGeoplateformeFeature, handleGeolocationError);
	};

	const handleErrorPopupClosed = () => {
		setHasError(false);
	}

	return <>
		<Container
			className="fr-my-4v"
			withoutMarginBottom
			flexboxAlignment="center"
			flexboxDirection="row"
		>
			<Button
				onClick={handleGetGeolocation}
				priority="secondary"
				className="fr-mr-2w"
				data-fr-analytics-rating
				id="pims-step-1__button-use-current-geolocation"
			>
				{t('get_geolocation')}
			</Button>
			{isProcessing && <CircularProgress color="blue" size="small" />}
		</Container>
		<Alert title={t("geolocation_failed")} severity="warning" closable onClose={handleErrorPopupClosed} isClosed={!hasError}/>
	</>;
}
