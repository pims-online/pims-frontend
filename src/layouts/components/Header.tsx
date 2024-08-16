import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import { Header as HeaderDSFR } from '@codegouvfr/react-dsfr/Header';
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import { Badge } from '@codegouvfr/react-dsfr/Badge';

import LanguageSelector from './language-selector/LanguageSelector';
import ThemeSelector from './theme-selector/ThemeSelector';

type Props = {
	isWidget?: boolean;
};

export default function Header(props: Props) {
	const { t } = useTranslation('header');
	return props.isWidget ? <WidgetHeader t={t} /> : <GovernmentHeader t={t} />;
}

type HeaderChildProps = {
	t: TFunction;
};

function GovernmentHeader(props: HeaderChildProps) {
	const { t } = props;
	return (
		<HeaderDSFR
			brandTop={'PIMS'}
			homeLinkProps={{
				title: 'Accueil - BASEP - PIMS',
			}}
			quickAccessItems={[headerFooterDisplayItem, <LanguageSelector />]}
			id="fr-header-simple-header-with-service-title-and-tagline"
			serviceTitle={
				<>
					{t('service_title')}
					<Badge as="span" noIcon severity="success">
						Beta
					</Badge>
				</>
			}
			serviceTagline={t('service_tagline')}
		/>
	);
}

import iconGovernment from '@public/icons/logo_french_government.png';
/**
 * When integrating the React App on another website with the
 * Web Component widget, we should not use the official header
 * of the government as this is not a government website.
 * On top of that, the host website has already its website,
 * when the purpose of the Widget is to be a component among other.
 * Thus, we choose a simple text with a theme mode selector
 */
function WidgetHeader(props: HeaderChildProps) {
	const { t } = props;
	// ADD THEME MODE SELECTOR
	return (
		<div className="pims__widget-header">
			<div className="pims__widget-header-configs">
				<img
					src={iconGovernment}
					alt="French Government"
					width={67}
					height={40}
				/>
				<h4 className="pims__widget-header-title">{t('service_title')}</h4>
			</div>
			<div className="pims__widget-header-configs">
				<ThemeSelector />
				<LanguageSelector selectorKind="desktop" />
			</div>
		</div>
	);
}
