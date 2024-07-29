import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';
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
			<ul
				className={clsx(
					'fr-m-0',
					'pims__toothed-list',
					'pims-emergency-kit-screen__input-list'
				)}
			>
				{inputs.map((input, index) => (
					<li
						key={input.kitNumbersKey}
						className={clsx({ 'fr-mt-2v': index > 0 })}
					>
						<p className="fr-mb-1v">
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
							className={clsx(
								'fr-ml-1w',
								'pims-emergency-kit__input-container'
							)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
