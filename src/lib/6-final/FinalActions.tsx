import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Download } from '@codegouvfr/react-dsfr/Download';

import { AppContext } from '@/providers';
import { Container, Title } from '@/components';

import FinalShareLink from './FinalShareLink';

export default function FinalActions() {
	const { t } = useTranslation('final_screen');
	const { apiResponse } = useContext(AppContext);

	const size =
		apiResponse.file_size_mo > 1
			? `${apiResponse.file_size_mo.toFixed(2)} Mo`
			: `${apiResponse.file_size_ko.toFixed(2)} ko`;

	return (
		<Container>
			<p>{t('actions.introducer')}</p>
			<Download
				details={`PDF - ${size}`}
				label={t('actions.download')}
				linkProps={{
					href: apiResponse.pims_url,
					// target: '_blank',
					// rel: 'noopener noreferrer',
				}}
				data-fr-analytics-rating
				id="pims-step-6__download-file"
				className="fr-mb-6v"
			/>
			<Title text={t('actions.share')} />
			<FinalShareLink />
		</Container>
	);
}
