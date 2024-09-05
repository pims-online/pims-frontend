import { useTranslation } from 'react-i18next';
import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';

import { Container, RequiredFieldIndicator } from '../../components';

type Props = {
	kitListChecked: boolean;
	setKitListChecked: (nextValue: boolean) => void;
};

export default function EmergencyKitListing(props: Props) {
	const { t } = useTranslation('emergency_kit_screen');

	return (
		<Container withoutMarginBottom className="fr-mb-8v">
			<p className="pims-components__list-introducer">
				{t('kit_listing.title')}
			</p>
			<ol className="fr-mb-6v fr-mt-0">
				{[...Array(14).keys()].map((value) => (
					<li key={`kit-listing-item-${value}`}>
						{t(`kit_listing.items.item_${value + 1}`)}
					</li>
				))}
			</ol>
			<Container
				withoutMarginBottom
				flexboxAlignment="start"
				flexboxDirection="row"
			>
				<Checkbox
					className="fr-mb-0"
					options={[
						{
							label: '',
							nativeInputProps: {
								checked: props.kitListChecked,
								onChange: (e) =>
									props.setKitListChecked(e.currentTarget.checked),
							},
						},
					]}
				/>
				<p className="fr-mb-0">
					{`${t('kit_listing.checkbox')} `}
					<RequiredFieldIndicator />
				</p>
			</Container>
		</Container>
	);
}
