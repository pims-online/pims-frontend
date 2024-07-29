import { clsx } from 'clsx';

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
				<td colSpan={2} className="fr-p-0 fr-m-0">
					<h5
						className={clsx('fr-mb-2v', {
							'fr-mt-6v': !isFirstItem, // Instead of using border-spacing on the table
						})}
					>
						{title}
					</h5>
				</td>
			</tr>
			<tr>
				<td style={{ minWidth: 80 }} className="fr-p-0 fr-m-0">
					{iconsPaths.map((path) => (
						<img key={`image-${path}`} src={path} alt={title} />
					))}
				</td>
				<td
					className={clsx(
						'fr-p-0 fr-m-0',
						'pims-information-screen__risk-item-prevention-container'
					)}
				>
					<ul className={clsx('fr-ml-1w', 'pims__toothed-list')}>
						{preventionList.map((prevention) => (
							<li key={`prevention-${prevention}`}>{prevention}</li>
						))}
					</ul>
				</td>
			</tr>
		</>
	);
}
