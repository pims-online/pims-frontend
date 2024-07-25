import { fr } from '@codegouvfr/react-dsfr';

type Props = {
	iconsPaths: Array<string>;
	title: string;
	preventionList: Array<string>;
	isFirstItem?: boolean;
};

export default function RiskItem(props: Props) {
	const { iconsPaths, title, preventionList, isFirstItem } = props;
	return (
		<>
			<tr>
				<td colSpan={2}>
					<h5
						style={{
							...fr.spacing('margin', {
								top: isFirstItem ? '2v' : '6v',
								bottom: '2v',
							}),
						}}
					>
						{title}
					</h5>
				</td>
			</tr>
			<tr>
				<td style={{ minWidth: 80 }}>
					{iconsPaths.map((path) => (
						<img key={`image-${path}`} src={path} alt={title} />
					))}
				</td>
				<td className="pims-information-screen__risk-item-prevention-container">
					<ul
						style={{
							...fr.spacing('padding', {
								top: '3v',
								bottom: '2v',
								right: '1w',
							}),
							marginLeft: fr.spacing('1w'),
						}}
						className="pims__toothed-list"
					>
						{preventionList.map((prevention) => (
							<li
								key={`prevention-${prevention}`}
								style={{ paddingLeft: fr.spacing('1w') }}
							>
								{prevention}
							</li>
						))}
					</ul>
				</td>
			</tr>
		</>
	);
}
