import type { GeoplateformeApiFeature, HandlerWrapper } from './types';

type Props = {
	addressFeatureList: Array<GeoplateformeApiFeature>;
	handlerWrapper: HandlerWrapper;
};

export default function AddressFeatureList(props: Props) {
	const { addressFeatureList, handlerWrapper } = props;
	const getHandler = (addressFeature: GeoplateformeApiFeature) => async () => {
		return addressFeature;
	}

	return (
		<ul
			id="pims-information-screen__address-feature-list"
			className="fr-py-2v fr-pl-4w fr-pr-2w"
		>
			{(addressFeatureList || []).map((addressFeature) => (
				<li
					key={`address-feature-${addressFeature.properties.citycode}-${addressFeature.properties.label}`}
				>
					<button onClick={handlerWrapper(getHandler(addressFeature))}>
						{addressFeature.properties.label}
					</button>
				</li>
			))}
		</ul>
	);
}
