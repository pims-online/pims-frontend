import { Route, Routes } from 'react-router-dom';

import LegalInformationPage from '@/pages/LegalInformationPage';
import MainPage from '@/pages/MainPage';
import SiteMapPage from '@/pages/SiteMapPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import AccessibilityPage from '@/pages/AccessibilityPage';

import {
	HREF_ROUTE_LEGAL_INFORMATION,
	HREF_ROUTE_MAIN,
	HREF_ROUTE_SITE_MAP,
	HREF_ROUTE_PRIVACY_POLICY,
	HREF_ROUTE_ACCESSIBILITY,
} from './constants';

export default function AppRoutesProvider() {
	return (
		<Routes>
			<Route path={HREF_ROUTE_MAIN} element={<MainPage />} />
			<Route path={HREF_ROUTE_SITE_MAP} element={<SiteMapPage />} />
			<Route path={HREF_ROUTE_PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
			<Route path={HREF_ROUTE_ACCESSIBILITY} element={<AccessibilityPage />} />
			<Route
				path={HREF_ROUTE_LEGAL_INFORMATION}
				element={<LegalInformationPage />}
			/>
		</Routes>
	);
}
