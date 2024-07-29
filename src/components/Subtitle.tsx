type Props = {
	text: string;
};

export default function Subtitle(props: Props) {
	return <h6 className="pims__subtitle">{props.text}</h6>;
}
