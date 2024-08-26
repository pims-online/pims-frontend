import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { DSFRWrapper, AppContextProvider } from './providers';
import RootLayout from './layouts/RootLayout';

function AppWithProviders() {
	return (
		<AppContextProvider>
			<I18nextProvider i18n={i18n}>
				<RootLayout />
			</I18nextProvider>
		</AppContextProvider>
	);
}

function App() {
	return (
		<DSFRWrapper>
			<AppWithProviders />
		</DSFRWrapper>
	);
}

export function WidgetApp() {
	return (
		<DSFRWrapper forWidget>
			<AppWithProviders />
		</DSFRWrapper>
	);
}

export default App;
