type Props = {
	text: string;
};

export default function Subtitle(props: Props) {
	return <h6 className="pims-components__subtitle fr-mb-4v">{props.text}</h6>;
}
