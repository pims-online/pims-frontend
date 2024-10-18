import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';

import { AppContext } from '@/providers';
import { Container, Title, RequiredFieldIndicator } from '@/components';

type Props = {
	kitListChecked: boolean;
	setKitListChecked: (nextValue: boolean) => void;
};

export default function EmergencyKitListing(props: Props) {
	const { t } = useTranslation('emergency_kit_screen');
	const { iodePastilleEligibility } = useContext(AppContext);

	return (
		<Container withoutMarginBottom className="fr-mb-8v">
			<Title text={t('kit_listing.title')} contained />
			<ol className="fr-mb-6v fr-mt-0">
				{iodePastilleEligibility && (
					<li key="kit-listing-item-iode-pastille">
						{t('kit_listing.items.iode_pastille')}
					</li>
				)}
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
					data-fr-analytics-rating
					id="pims-step-2__checkbox-emergency-kit-read"
				/>
				<p className="fr-mb-0">
					{`${t('kit_listing.checkbox')} `}
					<RequiredFieldIndicator />
				</p>
			</Container>
		</Container>
	);
}
