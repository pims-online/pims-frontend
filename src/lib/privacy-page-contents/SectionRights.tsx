import { type TFunction } from 'i18next';
import { Highlight } from '@codegouvfr/react-dsfr/Highlight';
import HighlightRaw from '@/components/HighlightRaw';

type Props = {
	t: TFunction;
};

export default function SectionRights(props: Props) {
	const { t } = props;

	return (
		<div>
			<h2>{t('rights.title')}</h2>
			<p>{t('rights.introduction')}</p>
			<HighlightRaw>
				<p>
					<b>{t('rights.via_email')}</b><br />
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:delegue-protection-donnees@interieur.gouv.fr"
					>
						delegue-protection-donnees@interieur.gouv.fr
					</a>
				</p>
				<p>
					<b>{t('rights.via_letter')}</b><br/>
					Ministère de l’Intérieur<br/>
					À l'attention du délégué à la protection des données (DPO)<br/>
					Place Beauvau<br/>
					75800 Paris CEDEX 08<br/>
				</p>
			</HighlightRaw>
			<p>{t('rights.data_policy')}</p>
			<p>{t('rights.contact_cnil')}</p>
			<Highlight>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.cnil.fr/fr/plaintes"
				>
					Commission nationale de l’informatique et des libertés
				</a>
				<br />
				3 place de Fontenoy <br />
				TSA 80715 <br />
				75334 Paris Cedex 07
			</Highlight>
		</div>
	);
}
