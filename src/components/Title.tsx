import { clsx } from 'clsx';

type Props = {
	text: string;
	contained?: boolean;
};

export default function Title(props: Props) {
	return (
		<h5
			className={clsx({
				'pims-components__title-text': !props.contained,
				'pims-components__title-contained fr-px-4w fr-py-2v': props.contained,
			})}
		>
			{props.text}
		</h5>
	);
}
