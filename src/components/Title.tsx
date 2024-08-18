import { clsx } from 'clsx';

type Props = {
	text: string;
	responsiveAlignment?: boolean;
};

export default function Title(props: Props) {
	return (
		<h4
			className={clsx('pims-components__title', {
				'pims-components__title-sm-center-align': !!props.responsiveAlignment,
			})}
		>
			{props.text}
		</h4>
	);
}
