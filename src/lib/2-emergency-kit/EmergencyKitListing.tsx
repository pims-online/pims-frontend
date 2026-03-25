import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';

import { AppContext } from '@/providers';
import { Container, Title, RequiredFieldIndicator } from '@/components';
import { NavigationLock } from '@/layouts/types';

type Props = {
	registerNavLock: (name: string, lock?: NavigationLock) => void
};

export default function EmergencyKitListing(props: Props) {
	const { registerNavLock } = props;

	const { t } = useTranslation('emergency_kit_screen');
	const { iodePastilleEligibility, kitListChecked, setKitListChecked } = useContext(AppContext);
	const [isHighlighted, setHighlighted] = useState<boolean>(false);

	const onCheckboxChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
		setHighlighted(false);
		setKitListChecked(e.currentTarget.checked);
	};

	const highlight = () => {
		setHighlighted(true);
	};

	useEffect(() => {
		const lockName = "kit_list_checked";
		if (kitListChecked) {
			registerNavLock(lockName, undefined);
		} else {
			const lock: NavigationLock = {
				highlight,
				htmlElementId: 'pims-step-2__emergency-kit',
			}
			registerNavLock(lockName, lock);
		}
	}, [kitListChecked]);

	return (
		<Container withoutMarginBottom className="fr-mb-8v" id="pims-step-2__emergency-kit">
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
							label: 
								<>
									<p className="fr-mb-0">
										{`${t('kit_listing.checkbox')} `}
										<RequiredFieldIndicator />
									</p>
								</>,
							nativeInputProps: {
								checked: kitListChecked,
								onChange: onCheckboxChange,
							},
						},
					]}
					state={isHighlighted ? "error" : "default"}
					stateRelatedMessage={isHighlighted && t("kit_listing.checkbox_required")}
					data-fr-analytics-rating
					id="pims-step-2__checkbox-emergency-kit-read"
				/>
			</Container>
		</Container>
	);
}
