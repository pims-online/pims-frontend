import { useTranslation } from 'react-i18next';
import { Footer as FooterDSFR } from '@codegouvfr/react-dsfr/Footer';
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';

import {
	HREF_ROUTE_LEGAL_INFORMATION,
	HREF_ROUTE_SITE_MAP,
	HREF_ROUTE_ACCESSIBILITY,
} from '@/providers';

import {
	FooterConsentManagementItem,
	FooterPersonalDataPolicyItem,
} from './consentManagement';

export default function Footer() {
	const { t } = useTranslation('header');
	return (
		<FooterDSFR
			accessibility="partially compliant"
			accessibilityLinkProps={{
				href: HREF_ROUTE_ACCESSIBILITY,
			}}
			contentDescription={t('footer')}
			termsLinkProps={{
				href: HREF_ROUTE_LEGAL_INFORMATION,
			}}
			websiteMapLinkProps={{
				href: HREF_ROUTE_SITE_MAP,
			}}
			bottomItems={[
				<FooterPersonalDataPolicyItem />,
				<FooterConsentManagementItem />,
				headerFooterDisplayItem,
			]}
		/>
	);
}
