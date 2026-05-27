import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import i18n from './i18n/i18n';
import {
	DSFRWrapper,
	AppContextProvider,
	AppRoutesProvider,
} from './providers';
import PageLayout from '@/layouts/PageLayout';
import HtmlLanguageUpdater from './components/HtmlLanguageUpdater';


function App() {
	return (
		<DSFRWrapper>
			<AppContextProvider>
				<I18nextProvider i18n={i18n}>
					<HtmlLanguageUpdater/>
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

export default App;
