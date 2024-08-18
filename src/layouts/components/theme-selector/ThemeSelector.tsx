import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';
import IconLight from './IconLight';
import IconDark from './IconDark';

export default function ThemeSelector() {
	const { isDark, setIsDark } = useIsDark();
	const onChangeTheme = () => setIsDark((darkEnabled) => !darkEnabled);
	return (
		<div onClick={onChangeTheme} className="pims-layouts__theme-selector">
			{isDark ? <IconLight /> : <IconDark />}
		</div>
	);
}
