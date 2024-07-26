import { fr } from '@codegouvfr/react-dsfr';

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
			style={{
				...fr.spacing('padding', { topBottom: '2v', left: '4w', right: '2w' }),
			}}
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
