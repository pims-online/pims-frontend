import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Container } from '@/components';

const FRONTEND_DOMAIN = import.meta.env.VITE_APP_DOMAIN;

const Title = ({ text }: { text: string }) => <h1>{text}</h1>;
const Subtitle = ({ text }: { text: string }) => <h2>{text}</h2>;

export default function LegalInformationPage() {
	const { t } = useTranslation('legal_information_page');

	useEffect(() => {
		document.title = `${t('title')} | PIMS`;
	}, [t]);

	return (
		<section className="pims-components__page">
			<Title text={t('title')} />
			<hr />
			<Container>
				<Subtitle text={t('edition.title')} />
				<p>{t('edition.url', { domain: FRONTEND_DOMAIN })}</p>
				<p>{t('edition.editor')}</p>
			</Container>
			<Container>
				<Subtitle text={t('publication.title')} />
				<p>{t('publication.content', { director: 'David Bretaud' })}</p>
			</Container>
			<Container>
				<Subtitle text={t('hosting.title')} />
				<p>{t('hosting.content')}</p>
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
		</section>
	);
}
