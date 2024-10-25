import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('@/pages/MainPage'));
const LegalInformationPage = lazy(() => import('@/pages/LegalInformationPage'));
const SiteMapPage = lazy(() => import('@/pages/SiteMapPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const AccessibilityPage = lazy(() => import('@/pages/AccessibilityPage'));

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
