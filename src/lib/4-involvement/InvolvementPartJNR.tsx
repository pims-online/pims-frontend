import { useTranslation, Trans } from 'react-i18next';
import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark';

import { Container, Title } from '@/components';

import {
	INVOLVEMENT_LINK_JNR,
	INVOLVEMENT_LINK_ACTIONS_PLATFORM,
} from './constants';

import logoJnrLight from '@/assets/alert-icons/logo_journee_nationale_resilience_light_mode.svg';
import logoJnrDark from '@/assets/alert-icons/logo_journee_nationale_resilience_dark_mode.svg';

export default function InvolvementPartJNR() {
	const { t } = useTranslation('involvement_screen');
	const { isDark } = useIsDark();

	return (
		<Container>
			<div className='pims-components__title-with-logo fr-mb-4v'>
				{/* Decorative: the title beside it already names the JNR, so the
				    logo must not be announced a second time by screen readers. */}
				<img
					className='pims-involvement__jnr-logo'
					src={isDark ? logoJnrDark : logoJnrLight}
					alt=''
					role='presentation'
				/>
				<Title text={t('jnr.title')} level='h3' contained />
			</div>
			<p>{t('jnr.content')}</p>
			<ul className="pims-components__arrowed-list">
				<li>
					<Trans
						t={t}
						i18nKey="jnr.items.item_1"
						components={{
							k1: (
								<a
									href={`https://${INVOLVEMENT_LINK_JNR}`}
									target="_blank"
									rel="noopener noreferrer"
									className="pims-components__text-color-orange"
								/>
							),
						}}
					/>
				</li>
				<li>
					<Trans
						t={t}
						i18nKey="jnr.items.item_2"
						components={{
							k1: (
								<a
									href={`https://${INVOLVEMENT_LINK_ACTIONS_PLATFORM}`}
									target="_blank"
									rel="noopener noreferrer"
									className="pims-components__text-color-orange"
								/>
							),
						}}
					/>
				</li>
			</ul>
		</Container>
	);
}
