import { clsx } from 'clsx';
import TitleHelper, { TitleLevel } from './TitleHelper';


type Props = {
	text: string;
	level: TitleLevel;
	contained?: boolean;
	id?: string;
};

export default function Title(props: Props) {
	const { text, level, contained, id } = props;

	return (
		<TitleHelper
			level={level}
			className={clsx({
				'pims-components__title-text': !contained,
				'pims-components__title-contained fr-px-4w fr-py-2v': contained,
			})}
			id={id}
		>
			{text}
		</TitleHelper>
	);
}
