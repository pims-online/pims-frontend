import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const FRONTEND_URL = import.meta.env.VITE_APP_URL;

const AUDITED_PAGES: string[] = [
	"/",
	"/sitemap",
	"/accessibilite",
	"/mentions-legales",
	"/politique-de-confidentialite",
]

export default function AccessibilityPage() {
	const { t } = useTranslation('accessibility_page');

	useEffect(() => {
		document.title = `${t('title')} | PIMS`;
	}, [t]);

	return (
		<main role="main" className="pims-components__page">
			<h1>{t('title')}</h1>
			<p>{t('date')}</p>
			<hr />
			<p>{t('basep_commitment')}</p>
			<p>
				<Trans
					t={t}
					i18nKey="declaration"
					components={{
						k1: <strong />,
					}}
					values={{
						url: FRONTEND_URL,
					}}
				/>
			</p>
			
			<h2>{t('conformity.title')}</h2>
			<p>
				<Trans
					t={t}
					i18nKey="conformity.description"
					components={{
						k1: <strong />,
						k2: (
							<abbr title="Référentiel général d’amélioration de l’accessibilité" />
						),
					}}
				/>
			</p>

			<h3>{t('conformity.result')}</h3>
			<p>
				<Trans
					t={t}
					i18nKey='conformity.audit'
					components={{
						k1: <a href='https://jump-mines.fr/'/>
					}}
				/>
			</p>

			<h2>{t('inaccessible_content.title')}</h2>
			<ul>
				<li>{t('inaccessible_content.1')}</li>
			</ul>

			<h2>{t('establishment.title')}</h2>
			<p>{t('establishment.date')}</p>

			<h3>{t('establishment.technology')}</h3>
			<ul>
				<li>{t('establishment.tech_1')}</li>
				<li>{t('establishment.tech_2')}</li>
				<li>{t('establishment.tech_3')}</li>
			</ul>

			<h3>{t('establishment.test_environment')}</h3>
			<ul>
				<li>{t('establishment.test_1')}</li>
			</ul>

			<h3>{t('establishment.tooling')}</h3>
			<ul>
				<li>
					<Trans 
						t={t}
						i18nKey='establishment.tool_1'
						components={{
							k1: <a href='https://coolors.co/contrast-checker'/>
						}}
					/>
				</li>
			</ul>

			<h3>{t('establishment.pages')}</h3>
			<ol>
				{AUDITED_PAGES.map((page, i) => {
					return <li key={`accessibility-audited-pages-${i}`}>
						{t(`establishment.page_${i+1}`)}
						&#32;
						(<a href={page}>{new URL(page, FRONTEND_URL).toString().replace("https://", "").replace("http://", "")}</a>)
					</li>;
				})}
			</ol>

			<h2>{t('right_of_recourse.title')}</h2>
			<p>{t('right_of_recourse.description')}</p>
			<p>{t('right_of_recourse.actions.placeholder')}</p>
			<ul>
				<li>
					<Trans
						t={t}
						i18nKey="right_of_recourse.actions.defense"
						components={{
							k1: <a href="https://formulaire.defenseurdesdroits.fr/" />,
						}}
					/>
				</li>
				<li>
					<Trans
						t={t}
						i18nKey="right_of_recourse.actions.delegate"
						components={{
							k1: (
								<a href="https://www.defenseurdesdroits.fr/saisir/delegues" />
							),
						}}
					/>
				</li>
				<li>
					{t('right_of_recourse.actions.send_letter')}
					<br />
					Défenseur des droits
					<br />
					Libre réponse 71120 75342 Paris CEDEX 07
				</li>
			</ul>
		</main>
	);
}
