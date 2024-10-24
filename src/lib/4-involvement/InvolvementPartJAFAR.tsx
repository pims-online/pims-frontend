import { useTranslation, Trans } from 'react-i18next';

import { Container, Title } from '@/components';

import {
	INVOLVEMENT_LINK_JNR,
	INVOLVEMENT_LINK_ACTIONS_PLATFORM,
} from './constants';

export default function InvolvementPartJAFAR() {
	const { t } = useTranslation('involvement_screen');

	return (
		<Container>
			<Title text={t('jafar.title')} contained />
			<p>{t('jafar.content')}</p>
			<ul className="pims-components__arrowed-list">
				<li>
					<Trans
						t={t}
						i18nKey="jafar.items.item_1"
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
				<li>
					<Trans
						t={t}
						i18nKey="jafar.items.item_2"
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
			</ul>
		</Container>
	);
}
