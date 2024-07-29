import type { DataGeopfFeature } from './types';

type Props = {
	addressFeatureList: Array<DataGeopfFeature>;
	onClickListItem: (addressFeature: DataGeopfFeature) => void;
};

export default function AddressFeatureList(props: Props) {
	const { addressFeatureList, onClickListItem } = props;

	return (
		<ul
			id="pims-information-screen__address-feature-list"
			className="fr-py-2v fr-pl-4w fr-pr-2w"
		>
			{(addressFeatureList || []).map((addressFeature) => (
				<li
					key={`address-feature-${addressFeature.properties.citycode}-${addressFeature.properties.label}`}
				>
					<button onClick={() => onClickListItem(addressFeature)}>
						{addressFeature.properties.label}
					</button>
				</li>
			))}
		</ul>
	);
}
