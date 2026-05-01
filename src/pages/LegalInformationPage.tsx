import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Container } from '@/components';

const FRONTEND_DOMAIN = import.meta.env.VITE_APP_DOMAIN;
const SITE_DIRECTOR = import.meta.env.VITE_SITE_DIRECTOR;
const HOSTING_PROVIDER_NAME = import.meta.env.VITE_HOSTING_PROVIDER_NAME;
const HOSTING_PROVIDER_ADDRESS = import.meta.env.VITE_HOSTING_PROVIDER_ADDRESS;
const HOSTING_PROVIDER_CONTACT = import.meta.env.VITE_HOSTING_PROVIDER_CONTACT;

const Title = ({ text }: { text: string }) => <h1>{text}</h1>;
const Subtitle = ({ text }: { text: string }) => <h2>{text}</h2>;

export default function LegalInformationPage() {
	const { t } = useTranslation('legal_information_page');

	useEffect(() => {
		document.title = `${t('title')} | PIMS`;
	}, [t]);

	return (
		<main role="main" className="pims-components__page">
			<Title text={t('title')} />
			<hr />
			<Container>
				<Subtitle text={t('edition.title')} />
				<p>{t('edition.url', { domain: FRONTEND_DOMAIN })}</p>
				<Trans
					t={t}
					i18nKey="edition.editor"
					components={{
						br: <br/>
					}}
				/>
			</Container>
			<Container>
				<Subtitle text={t('publication.title')} />
				<p>{t('publication.content', { director: SITE_DIRECTOR })}</p>
			</Container>
			<Container>
				<Subtitle text={t('hosting.title')} />
				<p>
					{t('hosting.content', { name: HOSTING_PROVIDER_NAME, address: HOSTING_PROVIDER_ADDRESS})}
					{HOSTING_PROVIDER_CONTACT && 
						t('hosting.contact', {contact: HOSTING_PROVIDER_CONTACT})
					}
				</p>
			</Container>
			<Container>
				<Subtitle text={t('statistics_handler.title')} />
				<p>{t('statistics_handler.content')}</p>
			</Container>
			<Container>
				<Subtitle text={t('cookies_analytics.title')} />
				<p>{t('cookies_analytics.content')}</p>
			</Container>
			<Container>
				<Subtitle text={t('links_and_content.title')} />
				<p>
					<Trans
						t={t}
						i18nKey="links_and_content.licence"
						components={{
							k1: (
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf"
								/>
							),
						}}
					/>
				</p>
				<p>{t('links_and_content.rights')}</p>
				<p>{t('links_and_content.diffuse_information')}</p>
			</Container>
			<Container>
				<Subtitle text={t('accessibility.title')} />
				<p>{t('accessibility.content')}</p>
			</Container>
		</main>
	);
}
