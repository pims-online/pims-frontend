type Props = {
	navigateToHomeScreen: () => void;
};

export default function FinalScreen(props: Props) {
	const { navigateToHomeScreen } = props;
	return (
		<div>
			<p>Final screen</p>
			<button onClick={navigateToHomeScreen}>Home again</button>
		</div>
	);
}
