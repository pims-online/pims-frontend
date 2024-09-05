import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

import Header from './components/header/Header';
import Footer from './components/Footer';

type Props = {
	children: React.ReactNode;
	applicationId?: string;
	widgetHeaderFooter?: boolean;
};

export default function PageLayout(props: Props) {
	const applicationId = props.applicationId || 'pims-application';
	const isWidget = !!props.widgetHeaderFooter;
	const { isDark } = useIsDark();
	return (
		<div className={isDark ? 'pims-dark' : 'pims-light'} id={applicationId}>
			<Header isWidget={isWidget} />
			{props.children}
			{!isWidget && <Footer />}
		</div>
	);
}
