import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import i18n from './i18n/i18n';
import {
	DSFRWrapper,
	AppContextProvider,
	AppRoutesProvider,
} from './providers';
import PageLayout from '@/layouts/PageLayout';
import MainPage from '@/pages/MainPage';

function App() {
	return (
		<DSFRWrapper>
			<AppContextProvider>
				<I18nextProvider i18n={i18n}>
					<BrowserRouter>
						<PageLayout>
							<AppRoutesProvider />
						</PageLayout>
					</BrowserRouter>
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
					<PageLayout
						widgetConfig={{
							useWidgetHeader: props.widgetHeaderFooter,
							applicationId: props.applicationId,
						}}
					>
						<MainPage />
					</PageLayout>
				</I18nextProvider>
			</AppContextProvider>
		</DSFRWrapper>
	);
}

export default App;
