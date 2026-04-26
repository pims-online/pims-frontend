import { type TFunction } from 'i18next';
import { Trans } from 'react-i18next';

const FRONTEND_DOMAIN = import.meta.env.VITE_APP_DOMAIN;
const FRONTEND_URL = import.meta.env.VITE_APP_URL;


type BrowserDeactivation = {
	browserName: string;
	deactivationUrl: string;
};

type Props = {
	t: TFunction;
};


const browserDeactivations: BrowserDeactivation[] = [
	{
		browserName: "Firefox",
		deactivationUrl: "https://support.mozilla.org/fr/kb/activer-desactiver-cookies",
	},
	{
		browserName: "Chrome",
		deactivationUrl: "https://support.google.com/chrome/answer/95647?hl=fr",
	},
	{
		browserName: "Edge",
		deactivationUrl: "https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
	},
	{
		browserName: "Safari",
		deactivationUrl: "https://support.apple.com/fr-fr/guide/safari/sfri11471/mac",
	},
	{
		browserName: "Opera",
		deactivationUrl: "https://help.opera.com/en/latest/web-preferences/#cookies"
	}
];


export default function AccordionCookies(props: Props) {
	const { t } = props;

	const browserDeactivationNodes = browserDeactivations.map(
		(value) => <li key={value.browserName}>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={value.deactivationUrl}
				title={t('cookies.opposition.deactivation_caption', {browser: value.browserName})}
			>
				{value.browserName}
			</a>
		</li>
	);

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
								href={FRONTEND_URL}
							/>
						),
					}}
					values={{ domain: FRONTEND_DOMAIN }}
				/>
			</p>
			<p>{t('cookies.introduction.use_case')}</p>
			<h4>{t('cookies.definition.title')}</h4>
			<p>
				<span>{t('cookies.definition.content_1')}</span>
				<br />
				<span>{t('cookies.definition.content_2')}</span>
				<br />
				<span>{t('cookies.definition.content_3')}</span>
			</p>
			<h4>{t('cookies.pims_cookies.title')}</h4>
			<p>
				<Trans
					t={t}
					i18nKey="cookies.pims_cookies.banner"
					components={{
						k1: (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={FRONTEND_URL}
							/>
						),
					}}
					values={{ domain: FRONTEND_DOMAIN }}
				/>
			</p>
			<h5>{t('cookies.pims_cookies.analytics.title')}</h5>
			<p>{t('cookies.pims_cookies.analytics.content_1')}</p>
			<h4>{t('cookies.opposition.title')}</h4>
			<p>{t('cookies.opposition.deactivation')}</p>
			<p>{t('cookies.opposition.deactivation_per_browser')}</p>
			<ul>
				{browserDeactivationNodes}
			</ul>
		</div>
	);
}
