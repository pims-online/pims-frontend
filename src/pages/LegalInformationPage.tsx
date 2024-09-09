import { useTranslation, Trans } from 'react-i18next';
import { Container } from '@/components';

const Title = ({ text }: { text: string }) => <h2>{text}</h2>;
const Subtitle = ({ text }: { text: string }) => <h4>{text}</h4>;

export default function LegalInformationPage() {
	const { t } = useTranslation('legal_information_page');
	return (
		<section className="pims-layouts__container">
			<Title text={t('title')} />
			<Container>
				<Subtitle text={t('edition.title')} />
				<p>{t('edition.url', { url: 'www.pims-frontend.vercel.app' })}</p>
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
