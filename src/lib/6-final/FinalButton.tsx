import { Button } from '@codegouvfr/react-dsfr/Button';

import { Container } from '../../components';

type Props = {
	navigateToHomeScreen: () => void;
	buttonTitle: string;
};

export default function FinalButton(props: Props) {
	return (
		<Container
			withoutMarginBottom
			flexboxAlignment="center"
			flexboxDirection="column"
		>
			<Button
				onClick={props.navigateToHomeScreen}
				size="medium"
				priority="secondary"
			>
				{props.buttonTitle}
			</Button>
		</Container>
	);
}
