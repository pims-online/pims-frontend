import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import SectionIntroduction from '@/lib/privacy-page-contents/SectionIntroduction';
import SectionRights from '@/lib/privacy-page-contents/SectionRights';
import SectionAccordions from '@/lib/privacy-page-contents/SectionAccordions';

export default function PrivacyPolicyPage() {
	const { t } = useTranslation('privacy_policy_page');

	useEffect(() => {
		document.title = `${t('title')} | PIMS`;
	}, [t]);

	return (
		<section className="pims-components__page">
			<h1>{t('title')}</h1>
			<hr />
			<SectionIntroduction t={t} />
			<SectionRights t={t} />
			<SectionAccordions t={t} />
		</section>
	);
}
