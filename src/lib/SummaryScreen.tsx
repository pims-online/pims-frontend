type Props = {
	navigateToFinalScreen: () => void;
};

export default function SummaryScreen(props: Props) {
	const { navigateToFinalScreen } = props;
	return (
		<div>
			<p>Summary Screen</p>
			<button onClick={navigateToFinalScreen}>Finalize</button>
		</div>
	);
}
