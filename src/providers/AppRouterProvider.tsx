import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LegalInformationPage from '@/pages/LegalInformationPage';
import MainPage from '@/pages/MainPage';
import SiteMapPage from '@/pages/SiteMapPage';

import {
	HREF_ROUTE_LEGAL_INFORMATION,
	HREF_ROUTE_MAIN,
	HREF_ROUTE_SITE_MAP,
} from './constants';

type Props = {
	applicationId?: string;
	widgetHeaderFooter?: boolean;
};

export default function AppRouterProvider(props: Props) {
	return (
		<Router>
			<Routes>
				<Route path={HREF_ROUTE_MAIN} element={<MainPage {...props} />} />
				<Route
					path={HREF_ROUTE_SITE_MAP}
					element={<SiteMapPage {...props} />}
				/>
				<Route
					path={HREF_ROUTE_LEGAL_INFORMATION}
					element={<LegalInformationPage {...props} />}
				/>
			</Routes>
		</Router>
	);
}
