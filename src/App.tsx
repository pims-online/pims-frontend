import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import {
	DSFRWrapper,
	AppContextProvider,
	AppRouterProvider,
} from './providers';
import MainPage from '@/pages/MainPage';

function App() {
	return (
		<DSFRWrapper>
			<AppContextProvider>
				<I18nextProvider i18n={i18n}>
					<AppRouterProvider />
				</I18nextProvider>
			</AppContextProvider>
		</DSFRWrapper>
	);
}

export function WidgetApp(props: {
	applicationId?: string;
	widgetHeaderFooter?: boolean;
}) {
	return (
		<DSFRWrapper forWidget>
			<AppContextProvider>
				<I18nextProvider i18n={i18n}>
					<MainPage {...props} isWidget />
				</I18nextProvider>
			</AppContextProvider>
		</DSFRWrapper>
	);
}

export default App;
