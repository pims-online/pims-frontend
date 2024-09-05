import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import {
	DSFRWrapper,
	AppContextProvider,
	AppRouterProvider,
} from './providers';

type Props = {
	applicationId?: string;
	widgetHeaderFooter?: boolean;
};

function AppWithProviders(props: Props) {
	return (
		<AppContextProvider>
			<I18nextProvider i18n={i18n}>
				<AppRouterProvider
					applicationId={props.applicationId}
					widgetHeaderFooter={!!props.widgetHeaderFooter}
				/>
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

export function WidgetApp(props: Props) {
	return (
		<DSFRWrapper forWidget>
			<AppWithProviders
				applicationId={props.applicationId}
				widgetHeaderFooter={!!props.widgetHeaderFooter}
			/>
		</DSFRWrapper>
	);
}

export default App;
