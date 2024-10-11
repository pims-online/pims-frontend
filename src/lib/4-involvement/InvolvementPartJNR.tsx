import { useTranslation, Trans } from 'react-i18next';

import { Container, Title } from '@/components';

import { INVOLVEMENT_LINK_JNR } from './constants';

export default function InvolvementPartJNR() {
	const { t } = useTranslation('involvement_screen');

	return (
		<Container>
			<Title text={t('jnr.title')} />
			<ul className="pims-components__arrowed-list">
				<li>
					<Trans
						t={t}
						i18nKey="jnr.link"
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
