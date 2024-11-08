import { clsx } from 'clsx';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

import Header from './components/header/Header';
import Footer from './components/Footer';
import { ConsentBannerAndConsentManagement } from './components/consentManagement';

type Props = {
	children: React.ReactNode;
	widgetConfig?: {
		useWidgetHeader?: boolean;
		applicationId?: string;
	};
};

export default function PageLayout(props: Props) {
	const isWidget = !!props.widgetConfig;
	const widgetConfig = props?.widgetConfig || {};
	const applicationId = widgetConfig?.applicationId || 'pims-application';
	const useWidgetHeader = !!widgetConfig.useWidgetHeader;

	const { isDark } = useIsDark();
	return (
		<div
			className={clsx('pims__main-layout', isDark ? 'pims-dark' : 'pims-light')}
			id={applicationId}
		>
			<ConsentBannerAndConsentManagement />
			<Header isWidget={useWidgetHeader} />
			{props.children}
			{!isWidget && <Footer />}
		</div>
	);
}
