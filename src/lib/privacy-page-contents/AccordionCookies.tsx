import { type TFunction } from 'i18next';
import { Trans } from 'react-i18next';

type Props = {
	t: TFunction;
};

export default function AccordionCookies(props: Props) {
	const { t } = props;

	return (
		<div>
			<p>
				<Trans
					t={t}
					i18nKey="cookies.introduction.cookies_creation"
					components={{
						k1: (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https:/pims-frontend.vercel.app"
							/>
						),
					}}
					values={{ domain: 'pims-frontend.vercel.app' }}
				/>
			</p>
			<p>{t('cookies.introduction.use_case')}</p>
			<h3>{t('cookies.definition.title')}</h3>
			<p>
				<span>{t('cookies.definition.content_1')}</span>
				<br />
				<span>{t('cookies.definition.content_2')}</span>
				<br />
				<span>{t('cookies.definition.content_3')}</span>
			</p>
			<h3>{t('cookies.pims_cookies.title')}</h3>
			<p>
				<Trans
					t={t}
					i18nKey="cookies.pims_cookies.banner"
					components={{
						k1: (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https:/pims-frontend.vercel.app"
							/>
						),
					}}
					values={{ domain: 'pims-frontend.vercel.app' }}
				/>
			</p>
			<h4>{t('cookies.pims_cookies.analytics.title')}</h4>
			<p>{t('cookies.pims_cookies.analytics.content_1')}</p>
			<h3>{t('cookies.opposition.title')}</h3>
			<p>{t('cookies.opposition.deactivation')}</p>
			<p>{t('cookies.opposition.deactivation_per_browser')}</p>
			<ul>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
					>
						Firefox
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://support.google.com/chrome/answer/95647?hl=fr"
					>
						Chrome
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
					>
						Edge
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
					>
						Safari
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://help.opera.com/Windows/10.20/fr/cookies.html"
					>
						Opera
					</a>
				</li>
			</ul>
		</div>
	);
}
