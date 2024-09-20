import { useTranslation } from 'react-i18next';

export default function PrivacyPolicyPage() {
	const { t } = useTranslation('privacy_policy_page');
	return (
		<section className="pims-layouts__container">
			<h2>{t('title')}</h2>
		</section>
	);
}
