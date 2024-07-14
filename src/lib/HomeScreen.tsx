type Props = {
	navigateToFirstStep: () => void;
};

export default function HomeScreen(props: Props) {
	return (
		<div>
			Home screen
			<button onClick={props.navigateToFirstStep}>Commencer</button>
		</div>
	);
}
