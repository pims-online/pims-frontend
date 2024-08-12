import { clsx } from 'clsx';

type Props = {
	color?: 'blue' | 'orange';
	size?: 'large' | 'medium' | 'small';
};

export default function CircularProgress(props: Props) {
	// Color
	const containerClassName =
		props.color === 'orange' ? 'pims__cp-orange' : 'pims__cp-blue';

	// Size
	const classSize = props.size ? `pims__cp-${props.size}` : 'pims__cp-medium';

	// Color structure :
	// - div : color of the background circle (complete circle)
	// - div::before : color of the semi-circle
	// - span : color of the bubble / head of the semi-circle
	return (
		<div
			className={clsx('pims__circular-progress', classSize, containerClassName)}
		>
			<span></span>
		</div>
	);
}
