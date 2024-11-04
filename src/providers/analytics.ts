import { useConsent } from '@/layouts/components/consentManagement';

type TrackEventArgs = {
	action: 'click' | 'fill_input' | 'download' | 'check';
	category: 'actions' | 'navigation';
	label: string; // id of the component
	value?: number; // value if necessary, such as the step in navigation
};

function _trackEvent({ action, category, label, value }: TrackEventArgs) {
	if (typeof window.gtag !== 'undefined') {
		window?.gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	} else {
		console.warn('gtag is not defined');
	}
}

export const useTrackEvents = () => {
	const fullConsent = useConsent();
	const analyticsEnabled = fullConsent?.finalityConsent?.eulerianAnalytics;

	function trackEvent(args: TrackEventArgs) {
		if (analyticsEnabled) {
			_trackEvent(args);
		}
	}

	return trackEvent;
};
