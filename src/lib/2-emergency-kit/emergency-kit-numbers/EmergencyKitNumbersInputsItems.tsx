import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { UsefulNumbers } from '@/providers/AppContextConfig';

type Props = {
	kitNumbers: UsefulNumbers;
	setKitNumbers: Dispatch<SetStateAction<UsefulNumbers>>;
};

export default function EmergencyKitNumbersInputsItems(props: Props) {
	const { kitNumbers, setKitNumbers } = props;
	const { t } = useTranslation('emergency_kit_screen');

	const inputs: {
		translationKey: string;
		kitNumbersKey: keyof UsefulNumbers;
	}[] = [
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
	return <>
		<p id="pims-emergency-kit-screen__input-list-label" className="pims-components__text-indicator">
			{t("useful_numbers.inputs.label")}
			</p>
		<ul
			className={clsx(
				'fr-m-0',
				'pims-components__toothed-list',
				'pims-emergency-kit-screen__input-list'
			)}
			role="group"
			aria-labelledby='pims-emergency-kit-screen__input-list-label'
		>
			{inputs.map((input, index) => (
				<li
					key={input.kitNumbersKey}
					className={clsx({
						'fr-mt-2v': index > 0
					})}
				>
					<Input
						label={t(`useful_numbers.inputs.${input.translationKey}`)}
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
						className="fr-ml-1w pims-emergency-kit__input-container"
						data-fr-analytics-rating
						id={`pims-step-2__input-useful-number-${input.kitNumbersKey}`}
					/>
				</li>
			))}
		</ul>
	</>;
}
