import { clsx } from 'clsx';

type Props = {
	iconsPaths: Array<string>;
	title: string;
	intensity: string | undefined;
	preventionList: Array<string>;
	isFirstItem?: boolean;
	compact?: boolean;
	/** Semantic level of the risk title (h5 on the site). It only changes the tag:
	 *  the look stays the one of an h5, through the DSFR fr-h5 class. */
	titleLevel?: 'h3' | 'h4' | 'h5';
};

export default function RiskItem(props: Props) {
	const { iconsPaths, title, intensity, preventionList, isFirstItem, compact } = props;
	const TitleTag = props.titleLevel ?? 'h5';

	return (
		<tbody>
			<tr>
				<td colSpan={2} className="fr-p-0 fr-m-0">
					<TitleTag
						className={clsx({
							'fr-h5': TitleTag !== 'h5',
							'pims-information-screen__risk-item-title-compact': compact,
							'fr-mb-2v': !compact,
							'fr-mt-6v': !isFirstItem && !compact, // Instead of using border-spacing on the table
							'fr-mt-3v': !isFirstItem && compact,
						})}
					>
						{title}
					</TitleTag>
					{intensity !== undefined &&
					<p className="pims-information-screen__risk-item-intensity">
						{intensity}
					</p>}
				</td>
			</tr>
			<tr>
				<td style={{ minWidth: 80 }} className="fr-p-0 fr-m-0">
					{iconsPaths.map((path) => (
						<img key={`image-${path}`} src={path} alt="" role="presentation" />
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
		</tbody>
	);
}
