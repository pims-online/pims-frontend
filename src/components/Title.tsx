import { clsx } from 'clsx';

export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

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


type HelperProps = {
	level: TitleLevel;
	className: string;
	id?: string;
	children: string;
}

function TitleHelper(props: HelperProps) {
	const { level, className, id, children } = props;

	if (level == 'h1') {
		return <h1 className={className} id={id}>
				{children}
			</h1>
	} else if (level == 'h2') {
		return <h2 className={className} id={id}>
				{children}
			</h2>
	} else if (level == 'h3') {
		return <h3 className={className} id={id}>
				{children}
			</h3>
	} else if (level == 'h4') {
		return <h4 className={className} id={id}>
				{children}
			</h4>
	} else if (level == 'h5') {
		return <h5 className={className} id={id}>
				{children}
			</h5>
	} else if (level == 'h6') {
		return <h6 className={className} id={id}>
				{children}
			</h6>
	} else {
		return <></>;
	}
}
