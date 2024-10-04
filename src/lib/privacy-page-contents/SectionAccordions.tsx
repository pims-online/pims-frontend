import { type TFunction } from 'i18next';
import { Accordion } from '@codegouvfr/react-dsfr/Accordion';
import { fr } from '@codegouvfr/react-dsfr';

import AccordionCookies from './AccordionCookies';
import AccordionDataPolicy from './AccordionDataPolicy';

type Props = {
	t: TFunction;
};

export default function SectionAccordions(props: Props) {
	const { t } = props;

	return (
		<div className={fr.cx('fr-accordions-group')}>
			<Accordion label={t('cookies.title')}>
				<AccordionCookies t={t} />
			</Accordion>
			<Accordion label={t('data_policy.title')}>
				<AccordionDataPolicy t={t} />
			</Accordion>
		</div>
	);
}
