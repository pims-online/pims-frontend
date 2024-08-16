import type { TFunction } from 'i18next';

import iconGovernment from '@public/icons/logo_french_government.png';

import LanguageSelector from '../language-selector/LanguageSelector';
import ThemeSelector from '../theme-selector/ThemeSelector';

type Props = {
	t: TFunction;
};

/**
 * When integrating the React App on another website with the
 * Web Component widget, we should not use the official header
 * of the government as this is not a government website.
 * On top of that, the host website has already its website,
 * when the purpose of the Widget is to be a component among other.
 * Thus, we choose a simple text with a theme mode selector
 */
export default function HeaderWidget(props: Props) {
	const { t } = props;
	return (
		<div className="pims-layouts__widget-header">
			<div className="pims-layouts__widget-header-configs">
				<img
					src={iconGovernment}
					alt="French Government"
					width={67}
					height={40}
				/>
				<h4 className="pims-layouts__widget-header-title">
					{t('service_title')}
				</h4>
			</div>
			<div className="pims-layouts__widget-header-configs">
				<ThemeSelector />
				<LanguageSelector selectorKind="desktop" />
			</div>
		</div>
	);
}
