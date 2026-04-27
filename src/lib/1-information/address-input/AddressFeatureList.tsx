import type { GeoplateformeApiFeature, AddressChosenCallback } from './types';

type Props = {
	addressFeatureList: Array<GeoplateformeApiFeature>;
	onAddressChosen: AddressChosenCallback;
};

export default function AddressFeatureList(props: Props) {
	const { addressFeatureList, onAddressChosen } = props;

	return (
		<ul
			id="pims-information-screen__address-feature-list"
			className="fr-py-2v fr-pl-4w fr-pr-2w"
		>
			{addressFeatureList.map((addressFeature) => (
				<button 
					key={`address-feature-${addressFeature.properties.citycode}-${addressFeature.properties.label}`}
					onClick={() => { onAddressChosen(addressFeature); }}
				>
					<li>
						{addressFeature.properties.label}
					</li>
				</button>
			))}
		</ul>
	);
}
