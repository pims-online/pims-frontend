import { clsx } from 'clsx';

type Props = {
	text: string;
	contained?: boolean;
	id?: string;
};

export default function Title(props: Props) {
	const { text, contained, id } = props;

	return (
		<h5
			className={clsx({
				'pims-components__title-text': !contained,
				'pims-components__title-contained fr-px-4w fr-py-2v': contained,
			})}
			id={id}
		>
			{text}
		</h5>
	);
}
