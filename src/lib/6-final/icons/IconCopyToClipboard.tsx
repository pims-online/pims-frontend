type Props = {
	size: number;
};

export default function IconCopyToClipboard(props: Props) {
	return (
		<svg
			aria-hidden="true"
			width={props.size}
			height={props.size}
			viewBox="-7 -7 28 28"
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M10.111 0c.859 0 1.556.697 1.556 1.556L11.666 3h-1.555V1.556H1.556v10.888H3V14H1.556a1.556 1.556 0 01-1.55-1.414L0 12.444V1.556C0 .696.696 0 1.556 0zm3 3c.859 0 1.556.697 1.556 1.556v10.888c0 .86-.697 1.556-1.556 1.556H4.556C3.696 17 3 16.303 3 15.444V4.556C3 3.696 3.696 3 4.556 3zm0 1.556H4.556v10.888h8.555V4.556z"
			></path>
		</svg>
	);
}
