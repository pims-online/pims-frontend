import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import {
    DSFRWrapper,
    AppContextProvider,
} from './providers';
import PageLayout from '@/layouts/PageLayout';
import MainPage from '@/pages/MainPage';


type Props = {
	applicationId?: string;
	widgetHeaderFooter?: boolean;
}

export function WidgetApp(props: Props) {
	return (
		<DSFRWrapper>
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