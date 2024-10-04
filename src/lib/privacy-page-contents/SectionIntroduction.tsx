import { type TFunction } from 'i18next';
import { Trans } from 'react-i18next';

type Props = {
	t: TFunction;
};

export default function SectionIntroduction(props: Props) {
	const { t } = props;

	return (
		<div>
			<p>
				<Trans
					t={t}
					i18nKey="introduction.data_analysis"
					components={{
						k1: (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https:/pims-frontend.vercel.app"
							/>
						),
					}}
					values={{ domain: 'pims-frontend.vercel.app' }}
				/>
			</p>
			<p>
				<Trans
					t={t}
					i18nKey="introduction.law"
					components={{
						k1: (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000886460#:~:text=L%27informatique%20doit%20%C3%AAtre%20au,aux%20libert%C3%A9s%20individuelles%20ou%20publiques."
							/>
						),
					}}
				/>
			</p>
		</div>
	);
}
