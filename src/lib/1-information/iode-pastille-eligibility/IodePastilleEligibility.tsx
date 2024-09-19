import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppContext } from '@/providers';

import { Container, CircularProgress } from '@/components';

import { getIodePastilleEligibility } from './utils';

export default function IodePastilleEligibility() {
	const { iodePastilleEligibility, setIodePastilleEligibility, inseeCode } =
		useContext(AppContext);
	const [isFetchingAPI, setIsFetchingAPI] = useState(false);
	const { t } = useTranslation('information_screen');

	useEffect(() => {
		// Once an insee code has been detected (after the address was set), make
		// a call to the backend to know if this city is eligible to iode pastille
		if (inseeCode) {
			getIodePastilleEligibility(
				inseeCode,
				setIodePastilleEligibility,
				setIsFetchingAPI
			);
		}
	}, [inseeCode, setIodePastilleEligibility]);

	// If fetching has ended and user is not eligible, then we return nothing
	if (!iodePastilleEligibility && !isFetchingAPI) return null;

	return (
		<Container
			flexboxAlignment={isFetchingAPI ? 'center' : 'start'}
			flexboxDirection="column"
		>
			{isFetchingAPI ? (
				<CircularProgress color="blue" size="medium" />
			) : (
				<Alert
					severity="warning"
					title={t('iode_pastille.title')}
					description={t('iode_pastille.description', {
						inb: iodePastilleEligibility,
					})}
				/>
			)}
		</Container>
	);
}
