import { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@codegouvfr/react-dsfr/Button';

import { CircularProgress, Container } from '@/components';

import {
	getUserLocation,
	getGeoplateformeFeaturesFromCoordinates,
} from './utils';
import type { GeoplateformeApiFeature, HandlerWrapper } from './types';

type Props = {
	setAddressFeatureList: Dispatch<
		SetStateAction<Array<GeoplateformeApiFeature>>
	>;
	handlerWrapper: HandlerWrapper;
};

export default function GeolocationButton(props: Props) {
	const { t } = useTranslation('information_screen');
	const { setAddressFeatureList, handlerWrapper } = props;
	const [isProcessing, setIsProcessing] = useState(false);

	const isGeolocationAPISupported = !!navigator.geolocation;

	// If the navigator does not support geolocation, display nothing
	if (!isGeolocationAPISupported) return null;

	const handleGetGeoplateformeFeature = async (
		latitude: number,
		longitude: number
	) => {
		// 1 - Update address Feature List
		const featureList = await getGeoplateformeFeaturesFromCoordinates({
			latitude,
			longitude,
		});
		setAddressFeatureList(featureList || []);

		// 2 - Notify the user that it has been done
		setIsProcessing(false);

		// 3 - If list is not empty
		if ((featureList || []).length > 0) {
			// 4 - Select the address of the first item
			const selectedFeature = featureList[0];
			const getFeature = async () => {
				return selectedFeature;
			};
			// 5 - Trigger full handler
			const fullHandler = handlerWrapper(getFeature);
			fullHandler();
		}
	};

	const handleGetGeolocation = async () => {
		setIsProcessing(true);
		// Request navigator geolocation API to get user location
		// Then use the handler to get feature list from Geoplateforme
		// We need to provide the handler because the API does not return the response
		await getUserLocation(handleGetGeoplateformeFeature);
	};

	return (
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
			>
				{t('get_geolocation')}
			</Button>
			{isProcessing && <CircularProgress color="blue" size="small" />}
		</Container>
	);
}
