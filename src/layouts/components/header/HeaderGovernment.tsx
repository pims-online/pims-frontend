import type { TFunction } from 'i18next';
import { Header as HeaderDSFR } from '@codegouvfr/react-dsfr/Header';
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import { Badge } from '@codegouvfr/react-dsfr/Badge';

import LanguageSelector from '../language-selector/LanguageSelector';
import { HREF_ROUTE_MAIN } from '@/providers';

type Props = {
	t: TFunction;
};

export default function HeaderGovernment(props: Props) {
	const { t } = props;
	return (
		<HeaderDSFR
			brandTop={'Gouvernement'}
			homeLinkProps={{
				title: 'Accueil - BASEP - PIMS',
				href: HREF_ROUTE_MAIN,
			}}
			quickAccessItems={[headerFooterDisplayItem, <LanguageSelector />]}
			id="fr-header-simple-header-with-service-title-and-tagline"
			serviceTitle={
				<>
					{t('service_title')}
					<Badge as="span" noIcon severity="success">
						Beta
					</Badge>
				</>
			}
			serviceTagline={t('service_tagline')}
		/>
	);
}
