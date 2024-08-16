import { useTranslation } from 'react-i18next';

import HeaderGovernment from './HeaderGovernment';
import HeaderWidget from './HeaderWidget';

type Props = {
	isWidget?: boolean;
};

export default function Header(props: Props) {
	const { t } = useTranslation('header');
	return props.isWidget ? <HeaderWidget t={t} /> : <HeaderGovernment t={t} />;
}
