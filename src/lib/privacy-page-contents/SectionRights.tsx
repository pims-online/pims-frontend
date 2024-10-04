import { type TFunction } from 'i18next';
import { Highlight } from '@codegouvfr/react-dsfr/Highlight';

type Props = {
	t: TFunction;
};

export default function SectionRights(props: Props) {
	const { t } = props;

	return (
		<div>
			<h2>{t('rights.title')}</h2>
			<p>{t('rights.introduction')}</p>
			<Highlight>
				<p>
					<b>{t('rights.via_email')}</b>
					<br />
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:delegue-protection-donnees@interieur.gouv.fr"
					>
						delegue-protection-donnees@interieur.gouv.fr
					</a>
				</p>
				<p>
					<b>{t('rights.via_letter')}</b>
					<br />
					<span>Ministère de l’Intérieur</span>
					<br />
					<span>
						À l'attention du délégué à la protection des données (DPO)
					</span>
					<br />
					<span>Place Beauvau</span>
					<br />
					<span>75800 Paris CEDEX 08</span>
					<br />
				</p>
			</Highlight>
			<p>{t('rights.data_policy')}</p>
			<p>{t('rights.contact_cnil')}</p>
			<Highlight>
				<p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.cnil.fr/fr/plaintes"
					>
						Commission nationale de l’informatique et des libertés
					</a>
					<br />
					<span>3 place de Fontenoy</span>
					<br />
					<span>TSA 80715</span>
					<br />
					<span>75334 Paris Cedex 07</span>
				</p>
			</Highlight>
		</div>
	);
}
