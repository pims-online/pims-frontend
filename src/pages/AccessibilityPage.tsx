import { useTranslation, Trans } from 'react-i18next';

export default function AccessibilityPage() {
	const { t } = useTranslation('accessibility_page');
	return (
		<section className="pims-components__page">
			<h1>{t('title')}</h1>
			<p>{t('date')}</p>
			<hr />
			<p>{t('basep_commitment')}</p>
			<p>
				<Trans
					t={t}
					i18nKey="declaration"
					components={{
						k1: (
							<strong />
						),
					}}
				/></p>
			<h2>{t('conformity.title')}</h2>
			<p><Trans
				t={t}
				i18nKey="conformity.description"
				components={{
					k1: (
						<strong />
					),
					k2: <abbr title="Référentiel général d’amélioration de l’accessibilité" />
				}}
			/></p>
			<h2>{t('right_of_recourse.title')}</h2>
			<p>{t('right_of_recourse.description')}</p>
			<p>{t('right_of_recourse.actions.placeholder')}</p>
			<ul>
				<li><Trans
					t={t}
					i18nKey="right_of_recourse.actions.defense"
					components={{
						k1: (
							<a href="https://formulaire.defenseurdesdroits.fr/" />
						),
					}}
				/></li>
				<li><Trans
					t={t}
					i18nKey="right_of_recourse.actions.delegate"
					components={{
						k1: (
							<a href="https://www.defenseurdesdroits.fr/saisir/delegues" />
						),
					}}
				/></li>
				<li>{t('right_of_recourse.actions.send_letter')}<br />
					Défenseur des droits<br />
					Libre réponse 71120 75342 Paris CEDEX 07</li>
			</ul>
			<hr />
			<p><Trans
				t={t}
				i18nKey="generator"
				components={{
					k1: (
						<a href="https://betagouv.github.io/a11y-generateur-declaration/#create" />
					),
				}}
			/></p>
		</section>
	);
}
