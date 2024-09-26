import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicyPage() {
	const { t } = useTranslation('privacy_policy_page');

	useEffect(() => {
		document.title = `${t('title')} | PIMS`;
	}, [t]);

	return (
		<section className="pims-components__page">
			<h1>{t('title')}</h1>
		</section>
	);
}
