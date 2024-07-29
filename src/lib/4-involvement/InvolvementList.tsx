import { useTranslation, Trans } from 'react-i18next';

import { Container, Title } from '../../components';

type Props = {
	translationKeyPrefix: string;
	listLength: number;
	isLast?: boolean;
};

export default function InvolvementList(props: Props) {
	const { t } = useTranslation('involvement_screen');
	const { translationKeyPrefix, listLength, isLast } = props;

	return (
		<Container withoutMarginBottom={isLast}>
			<Title text={t(`${translationKeyPrefix}.title`)} />
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
		</Container>
	);
}
