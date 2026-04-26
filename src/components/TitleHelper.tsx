
export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = {
	level: TitleLevel;
	className: string;
	id?: string;
	children: string;
}

export default function TitleHelper(props: Props) {
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
