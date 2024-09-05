import { clsx } from 'clsx';

type Props = {
	inverted?: boolean;
};

export default function RequiredFieldIndicator(props: Props) {
	const className = clsx({
		'pims-components__text-red-marianne': !props.inverted,
		'pims-components__text-red-marianne-inverted': !!props.inverted,
	});

	return <b className={className}>*</b>;
}
