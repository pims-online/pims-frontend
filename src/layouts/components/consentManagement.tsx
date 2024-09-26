import { createConsentManagement } from '@codegouvfr/react-dsfr/consentManagement';
//import { startEulerianAnalytics } from "@codegouvfr/react-dsfr/eulerianAnalytics";
import { HREF_ROUTE_PRIVACY_POLICY } from '@/providers/constants';

/*
const prEulerianApi = startEulerianAnalytics({
    "domain": "pims-frontend.vercel.app",
    "site": {
        "environment": process.env.NODE_ENV === "development" ? "development" : "production",
        "entity": "Bureau de l'Alerte, de la Sensibilisation et de l'Education des Publics"
    }
});
*/

const eulerianAnalyticsDescriptionFr = [
	"En cliquant sur 'Accepter', vous consentez à l'utilisation des cookies pour nous",
	'aider à améliorer notre site web en collectant et en rapportant des informations',
	"sur votre utilisation grâce à Eulerian Analytics. Si vous n'êtes pas d'accord, veuillez",
	"cliquer sur 'Refuser'. Votre expérience de navigation ne sera pas affectée.",
].join(' ');

const eulerianAnalyticsDescriptionEn = [
	"By clicking 'Accept', you consent to the use of cookies to help us",
	'improve our website by collecting and reporting information',
	'about your usage through Eulerian Analytics. If you do not agree, please',
	"click 'Decline'. Your browsing experience will not be affected.",
].join(' ');

export const {
	ConsentBannerAndConsentManagement,
	FooterConsentManagementItem,
	FooterPersonalDataPolicyItem,
	useConsent,
} = createConsentManagement({
	finalityDescription: ({ lang }) => ({
		eulerianAnalytics: {
			title: 'Eulerian Analytics',
			description:
				lang === 'en'
					? eulerianAnalyticsDescriptionEn
					: eulerianAnalyticsDescriptionFr,
		},
	}),
	/*
  If you have a page that describe your personal data policy, you can link to it here. 
  Like any other *LinkProps you can turn it into a button by using { href: "#", onClick: ... } 
  (if you are using react-router it will be `to` instead of `href`).
  */
	personalDataPolicyLinkProps: {
		href: HREF_ROUTE_PRIVACY_POLICY,
	},
	/*
This optional callback is called when the user takes stance on what he accepts and refuses. 
It gives you the opportunity to perform asynchronous actions before the user can continue to navigate.
*/
	consentCallback: async ({ finalityConsent, finalityConsent_prev }) => {
		console.log('This is consent callback : ', {
			finalityConsent,
			finalityConsent_prev,
		});
		/*
    The finalityConsent_prev represent the previous consent object.
    If the user is taking stance for the first time, finalityConsent_prev will be undefined.
    finalityConsent_prev is restored from the localStorage.
    */

		/*
    const eulerian = await prEulerianApi;

    if (finalityConsent.eulerianAnalytics) {
        console.log("Enabling eulerian analytics");
        eulerian.enable();
    } else {
        console.log("Disabling eulerian analytics");
        eulerian.disable();
    }
    */

		/*
    Example: Reload the page if the user refuse cookies.
    if( finalityConsent_prev === undefined && !finalityConsent.isFullConsent ){
        //Do something async
        location.reload();
    }
    */
	},
});
