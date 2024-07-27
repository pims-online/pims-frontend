import { useTranslation, Trans } from 'react-i18next';
import { fr } from '@codegouvfr/react-dsfr';

type Props = {
	translationKeyPrefix: string;
	listLength: number;
};

export default function InvolvementList(props: Props) {
	const { t } = useTranslation('involvement_screen');
	const { translationKeyPrefix, listLength } = props;
	return (
		<div style={{ marginBottom: fr.spacing('8v') }}>
			<h5 className="pims__screen-title">
				{t(`${translationKeyPrefix}.title`)}
			</h5>
			<ul className="pims__arrowed-list">
				{[...Array(listLength).keys()].map((id) => (
					<li key={`${translationKeyPrefix}-list-item-${id + 1}`}>
						<Trans
							t={t}
							i18nKey={`${translationKeyPrefix}.items.item_${id + 1}`}
							components={{
								k1: <b className="pims__text-color-orange" />,
							}}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
