import { useTranslation } from 'react-i18next';
import { Highlight } from '@codegouvfr/react-dsfr/Highlight';
import { Button } from '@codegouvfr/react-dsfr/Button';

import { Subtitle, Container } from '@/components';

type Props = {
	subtitle: string;
	children: NonNullable<React.ReactNode>;
	onClickModify: () => void;
	itemId: string;
};

export default function InformationCheckItem(props: Props) {
	const { t } = useTranslation('summary_screen');

	return (
		<Container>
			<Subtitle text={props.subtitle} />
			<Highlight size="lg" classes={{ root: 'fr-ml-0' }}>
				{props.children || <i>{t('information_check.items.unknown')}</i>}
			</Highlight>
			<Button
				onClick={props.onClickModify}
				priority="secondary"
				data-fr-analytics-rating
				id={`pims-step-5__button-modify-${props.itemId}`}
			>
				{t('information_check.modify_button')}
			</Button>
		</Container>
	);
}
