type Props = {
	size: number;
};

export default function IconSMS(props: Props) {
	return (
		<svg
			aria-hidden="true"
			width={props.size}
			height={props.size}
			viewBox="-8 -8 40 40"
		>
			<path
				fill="currentColor"
				d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z"
			></path>
		</svg>
	);
}
