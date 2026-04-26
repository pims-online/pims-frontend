import TitleHelper, { TitleLevel } from "./TitleHelper";

type Props = {
	text: string;
	level: TitleLevel;
};

export default function Subtitle(props: Props) {
	const { text, level } = props;

	return <TitleHelper level={level} className="pims-components__subtitle fr-mb-4v">{text}</TitleHelper>
}
