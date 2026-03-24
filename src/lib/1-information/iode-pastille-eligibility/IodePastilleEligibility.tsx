import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@codegouvfr/react-dsfr/Alert';

import { AppContext } from '@/providers';

import { Container, CircularProgress } from '@/components';

import { getIodePastilleEligibility } from './utils';

export default function IodePastilleEligibility() {
	const { iodePastilleEligibility, setIodePastilleEligibility, position } =
		useContext(AppContext);
	const [isFetchingAPI, setIsFetchingAPI] = useState(false);
	const { t } = useTranslation('information_screen');

	useEffect(() => {
		setIodePastilleEligibility(undefined);

		// Once an insee code has been detected (after the address was set), make
		// a call to the backend to know if this city is eligible to iode pastille
		if (position !== undefined) {
			getIodePastilleEligibility(
				position.inseeCode,
				setIodePastilleEligibility,
				setIsFetchingAPI
			);
		}
	}, [position, setIodePastilleEligibility]);

	if (isFetchingAPI) {
		return (
			<Container
				flexboxAlignment='center'
				flexboxDirection="column"
			>
				<CircularProgress color="blue" size="medium" />
			</Container>
		);
	}

	if (iodePastilleEligibility) {
		return (
			<Container
				flexboxAlignment='start'
				flexboxDirection="column"
			>
				<Alert
					severity="warning"
					title={t('iode_pastille.title')}
					description={t('iode_pastille.description', {
						inb: iodePastilleEligibility,
					})}
				/>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.sante.fr/campagne-distribution-iode"
					className="fr-mt-2v"
				>
					{t('iode_pastille.pharmacy_map')}
				</a>
			</Container>
		);
	}

	return null;
}
