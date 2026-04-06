import { clsx } from 'clsx';

type Props = {
	iconsPaths: Array<string>;
	title: string;
	intensity: string | undefined;
	preventionList: Array<string>;
	isFirstItem?: boolean;
	compact?: boolean;
};

export default function RiskItem(props: Props) {
	const { iconsPaths, title, intensity, preventionList, isFirstItem, compact } = props;

	return (
		<>
			<tr>
				<td colSpan={2} className="fr-p-0 fr-m-0">
					<h5
						className={clsx({
							'pims-information-screen__risk-item-title-compact': compact,
							'fr-mb-2v': !compact,
							'fr-mt-6v': !isFirstItem && !compact, // Instead of using border-spacing on the table
							'fr-mt-3v': !isFirstItem && compact,
						})}
					>
						{title}
					</h5>
					{intensity !== undefined &&
					<p className="pims-information-screen__risk-item-intensity">
						{intensity}
					</p>}
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
					<ul className={clsx('fr-ml-1w', 'pims-components__toothed-list')}>
						{preventionList.map((prevention) => (
							<li key={`prevention-${prevention}`}>{prevention}</li>
						))}
					</ul>
				</td>
			</tr>
		</>
	);
}
