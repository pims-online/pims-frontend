import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@codegouvfr/react-dsfr/Input';

import { Container, Title } from '@/components';

type Props = {
	gatheringPlace: string;
	setGatheringPlace: Dispatch<SetStateAction<string>>;
};

export default function GatheringPlaceInput(props: Props) {
	const { t } = useTranslation('information_screen');

	return (
		<Container>
			<Title text={t('gathering_place.title')} />
			<Input
				label={t('gathering_place.hint')}
				nativeInputProps={{
					value: props.gatheringPlace,
					onChange: (e) => props.setGatheringPlace(e.currentTarget.value),
				}}
				data-fr-analytics-rating
				id="pims-step-1__input-gathering-place"
			/>
		</Container>
	);
}
