import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { fr } from '@codegouvfr/react-dsfr';
import { Input } from '@codegouvfr/react-dsfr/Input';

import type { KitNumbers } from '../types';

type KitNumbersKeys = keyof KitNumbers;

type Props = {
	kitNumbers: KitNumbers;
	setKitNumbers: Dispatch<SetStateAction<KitNumbers>>;
};

export default function EmergencyKitNumbersInputs(props: Props) {
	const { t } = useTranslation('emergency_kit_screen');

	const inputs: { translationKey: string; kitNumbersKey: KitNumbersKeys }[] = [
		{
			translationKey: 'town_hall',
			kitNumbersKey: 'townHall',
		},
		{
			translationKey: 'insurance',
			kitNumbersKey: 'insurance',
		},
		{
			translationKey: 'relatives',
			kitNumbersKey: 'relatives',
		},
		{
			translationKey: 'others',
			kitNumbersKey: 'others',
		},
	];

	return (
		<div className="pims-emergency-kit-screen__useful-numbers-subcontainer">
			<h6>{t('useful_numbers.inputs.subtitle')}</h6>
			<ul className="pims__toothed-list pims-emergency-kit-screen__input-list">
				{inputs.map((input) => (
					<li
						key={input.kitNumbersKey}
						style={{
							marginBottom: fr.spacing('1v'),
						}}
					>
						<p
							style={{
								marginBottom: fr.spacing('2v'),
							}}
						>
							{t(`useful_numbers.inputs.${input.translationKey}`)}
						</p>
						<Input
							label={undefined}
							nativeInputProps={{
								value: props.kitNumbers[input.kitNumbersKey],
								onChange: (e) =>
									props.setKitNumbers((prevValue) => {
										const nextKitNumbers = {
											...prevValue,
										};
										nextKitNumbers[input.kitNumbersKey] = e.target.value;
										return nextKitNumbers;
									}),
								required: true,
							}}
							className="pims-emergency-kit__input-container"
							style={{
								marginLeft: fr.spacing('1w'),
							}}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
