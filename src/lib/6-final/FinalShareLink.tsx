import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
	EmailShareButton,
	FacebookShareButton,
	FacebookMessengerShareButton,
	LineShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share';
import {
	EmailIcon,
	FacebookIcon,
	FacebookMessengerIcon,
	LineIcon,
	XIcon,
	WhatsappIcon,
} from 'react-share';

import { AppContext } from '@/providers';

import IconCopyToClipboard from './icons/IconCopyToClipboard';
import IconSMS from './icons/IconSMS';

export default function FinalShareLink() {
	// ----- Hooks -----
	const { t } = useTranslation('final_screen');
	const { apiResponse } = useContext(AppContext);

	// ----- Links -----
	const url = apiResponse.pims_url;
	const pimsAppUrl = import.meta.env.VITE_APP_URL;

	// ----- Texts -----
	const messageSubject = t('share.subject');
	const messageBody = t('share.body', { pimsUrl: pimsAppUrl, url: '' });
	const messageBodyOnly = t('share.body_only', {
		pimsUrl: pimsAppUrl,
		url: '',
	});
	const messageBodyOnlyWithLink = t('share.body_only', {
		pimsUrl: pimsAppUrl,
		url: url,
	});

	const iconProps = {
		size: 32,
		round: true,
	};

	// ----- Handlers -----
	const handleCopyToClipboard = () => {
		navigator.clipboard
			.writeText(apiResponse.pims_url)
			.then(() => {
				alert(t('actions.copyToClipboard'));
			})
			.catch((error) => {
				console.error('Failed to copy: ', error);
			});
	};

	return (
		<div className="pims-final-screen__button-list">
			<button
				onClick={handleCopyToClipboard}
				className="pims__share-button pims__bt-copy-to-clipboard"
			>
				<IconCopyToClipboard {...iconProps} />
			</button>

			<a
				href={`sms:?body=${encodeURIComponent(messageBodyOnlyWithLink)}`}
				className="pims__share-button pims__bt-sms"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconSMS {...iconProps} />
			</a>

			<EmailShareButton
				url={url}
				subject={messageSubject}
				body={messageBody}
				separator=""
			>
				<EmailIcon {...iconProps} />
			</EmailShareButton>

			<FacebookShareButton url={url}>
				<FacebookIcon {...iconProps} />
			</FacebookShareButton>

			<FacebookMessengerShareButton
				url={url}
				redirectUri={url}
				appId="531197663039275"
			>
				<FacebookMessengerIcon {...iconProps} />
			</FacebookMessengerShareButton>

			<TwitterShareButton url={url} title={messageBodyOnlyWithLink}>
				<XIcon {...iconProps} />
			</TwitterShareButton>

			<WhatsappShareButton url={url} title={messageBodyOnly} separator="">
				<WhatsappIcon {...iconProps} />
			</WhatsappShareButton>

			<LineShareButton url={url} title={messageBodyOnlyWithLink}>
				<LineIcon {...iconProps} />
			</LineShareButton>
		</div>
	);
}
