import { Route, Routes } from 'react-router-dom';

import LegalInformationPage from '@/pages/LegalInformationPage';
import MainPage from '@/pages/MainPage';
import SiteMapPage from '@/pages/SiteMapPage';

import {
	HREF_ROUTE_LEGAL_INFORMATION,
	HREF_ROUTE_MAIN,
	HREF_ROUTE_SITE_MAP,
} from './constants';

export default function AppRoutesProvider() {
	return (
		<Routes>
			<Route path={HREF_ROUTE_MAIN} element={<MainPage />} />
			<Route path={HREF_ROUTE_SITE_MAP} element={<SiteMapPage />} />
			<Route
				path={HREF_ROUTE_LEGAL_INFORMATION}
				element={<LegalInformationPage />}
			/>
		</Routes>
	);
}
