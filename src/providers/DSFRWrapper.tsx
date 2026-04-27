import { startReactDsfr } from '@codegouvfr/react-dsfr/spa';

import { useTranslation } from 'react-i18next';

type Props = {
	children: React.ReactNode;
}

// Should be the direct child of App, or the most outbound parent
export default function DSFRWrapper(props: Props) {
	const { children } = props;
	
	startReactDsfr({ 
		defaultColorScheme: 'system', 
		useLang: () => {
			const { i18n } = useTranslation('');
			return i18n.language
		}
	});
	
	return children;
}
