import r2wc from '@r2wc/react-to-web-component';
import { WidgetApp } from './App';

export const WebComponentWidget = r2wc(WidgetApp, {
	props: {
		applicationId: 'string',
		widgetHeaderFooter: 'boolean',
	},
});

customElements.define('pims-dematerialized-widget', WebComponentWidget);
