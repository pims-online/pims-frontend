import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from '@codegouvfr/react-dsfr/Input';

import { Container, RequiredFieldIndicator } from '@/components';
import { NavigationLock } from '@/layouts/types';
import { AppContext } from '@/providers';

type Props = {
	registerNavLock: (name: string, lock?: NavigationLock) => void;
};

export default function EmergencyKitStorage(props: Props) {
	const { registerNavLock } = props;
	
	const { t } = useTranslation('emergency_kit_screen');
	const { emergencyKitStorage, setEmergencyKitStorage } = useContext(AppContext);

	const [isHighlighted, setHighlighted] = useState<boolean>(false);

	const onStorageLocationChanged = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
		setHighlighted(false);
		setEmergencyKitStorage(e.currentTarget.value);
	};

	const highlight = () => {
		setHighlighted(true);
	};

	useEffect(() => {
		const lockName = "kit_list_storage";
		if (emergencyKitStorage) {
			registerNavLock(lockName, undefined);
		} else {
			const lock: NavigationLock = {
				highlight,
				htmlElementId: 'pims-step-2__emergency-kit',
			}
			registerNavLock(lockName, lock);
		}
	}, [emergencyKitStorage]);

	return (
		<Container>
			<p className="fr-mb-0">
				{`${t('kit_storage.accessibility')} `}
				<RequiredFieldIndicator />
			</p>
			<Input
				label=""
				hintText={t('kit_storage.input_placeholder')}
				nativeInputProps={{
					value: emergencyKitStorage,
					onChange: onStorageLocationChanged,
				}}
				state={isHighlighted ? "error" : undefined}
				stateRelatedMessage={t("kit_storage.missing_value")}
				data-fr-analytics-rating
				id="pims-step-2__input-emergency-kit-storage"
			/>
		</Container>
	);
}
