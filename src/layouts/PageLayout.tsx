import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

import Header from './components/header/Header';
import Footer from './components/Footer';

type Props = {
	children: React.ReactNode;
	isWidget?: boolean;
	applicationId?: string;
	widgetHeaderFooter?: boolean;
};

export default function PageLayout(props: Props) {
	const applicationId = props.applicationId || 'pims-application';
	const isWidgetHeader = !!props.widgetHeaderFooter;
	const isWidget = !!props.isWidget;
	const { isDark } = useIsDark();
	return (
		<div className={isDark ? 'pims-dark' : 'pims-light'} id={applicationId}>
			<Header isWidget={isWidgetHeader} />
			{props.children}
			{!isWidget && <Footer />}
		</div>
	);
}
