import { clsx } from 'clsx';
import { Button } from '@codegouvfr/react-dsfr/Button';

import { LOCALE_FR, LOCALE_EN } from './constants';

type Props = {
	updateLocale: (nextValue: 'fr' | 'en') => void;
	currentLanguage: string;
};

export default function LanguageSelectorDesktop(props: Props) {
	const { currentLanguage, updateLocale } = props;
	return (
		<nav role="navigation" className="fr-translate fr-nav">
			<div className="fr-nav__item">
				<Button
					className="fr-translate__btn fr-btn"
					aria-controls="translate-1177"
					aria-expanded="false"
					priority="tertiary"
					data-fr-analytics-rating
					id="pims-layouts__button-change-locale-desktop"
				>
					{currentLanguage === LOCALE_FR && 'FR'}
					{currentLanguage === LOCALE_EN && 'EN'}
				</Button>
				<div
					className="fr-collapse fr-translate__menu fr-menu"
					id="translate-1177"
				>
					<ul className="fr-menu__list">
						<li>
							<button
								className={clsx('fr-translate__language fr-nav__link', {
									'pims-layouts__language-selector-nav-link-selected':
										currentLanguage === LOCALE_FR,
								})}
								aria-current="false" // To prevent fr-nav__link from removing pointer events
								onClick={() => updateLocale(LOCALE_FR)}
							>
								FR - Français
							</button>
						</li>
						<li>
							<button
								className={clsx('fr-translate__language fr-nav__link', {
									'pims-layouts__language-selector-nav-link-selected':
										currentLanguage === LOCALE_EN,
								})}
								aria-current="false" // To prevent fr-nav__link from removing pointer events
								onClick={() => updateLocale(LOCALE_EN)}
							>
								EN - English
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
