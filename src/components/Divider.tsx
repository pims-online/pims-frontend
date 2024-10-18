import { clsx } from 'clsx';

type Props = {
	className?: string;
};

export default function Divider(props: Props) {
	return (
		<hr
			className={clsx(
				'pims-components__divider fr-mb-4v',
				props.className || ''
			)}
		/>
	);
}
