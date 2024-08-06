import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';
import { Input } from '@codegouvfr/react-dsfr/Input';

import { getTownHallNumber } from './utils';
import type { KitNumbers } from './types';

type KitNumbersKeys = keyof KitNumbers;

type Props = {
	kitNumbers: KitNumbers;
	setKitNumbers: Dispatch<SetStateAction<KitNumbers>>;
	inseeCode?: string | number;
};

export default function EmergencyKitNumbersInputsItems(props: Props) {
	const { kitNumbers, setKitNumbers, inseeCode } = props;
	const { t } = useTranslation('emergency_kit_screen');

	const [suggestedTownHallNumber, setSuggestedTownHallNumber] = useState<
		string | undefined
	>(undefined);

	useEffect(() => {
		const fetchTownHallNumber = async () => {
			const townHallNumber = await getTownHallNumber(inseeCode);
			setSuggestedTownHallNumber(townHallNumber);
		};

		fetchTownHallNumber();
	}, [inseeCode]);

	const inputs: {
		translationKey: string;
		kitNumbersKey: KitNumbersKeys;
		hintText?: string;
	}[] = [
		{
			translationKey: 'town_hall',
			kitNumbersKey: 'townHall',
			hintText: suggestedTownHallNumber
				? t('useful_numbers.inputs.suggested_number', {
						suggestedNumber: suggestedTownHallNumber,
					})
				: '',
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
					className={clsx({
						'fr-mt-2v': index > 0 && !input.hintText,
						'fr-mt-5v': index > 0 && !!input.hintText,
					})}
				>
					<p className="fr-mb-1v">
						{t(`useful_numbers.inputs.${input.translationKey}`)}
					</p>
					<Input
						label={undefined}
						hintText={input.hintText}
						nativeInputProps={{
							value: kitNumbers[input.kitNumbersKey],
							onChange: (e) =>
								setKitNumbers((prevValue) => {
									const nextKitNumbers = {
										...prevValue,
									};
									nextKitNumbers[input.kitNumbersKey] = e.target.value;
									return nextKitNumbers;
								}),
							required: true,
						}}
						className={clsx('fr-ml-1w', 'pims-emergency-kit__input-container', {
							'pims-emergency-kit__input-container-with-hint': !!input.hintText,
						})}
					/>
				</li>
			))}
		</ul>
	);
}
