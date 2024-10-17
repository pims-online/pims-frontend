import { useTranslation } from 'react-i18next';

import { Title } from '@/components';

type Props = {
	children?: React.ReactNode;
	i18nKey: string;
};

export default function SectionTemplate(props: Props) {
	const { t } = useTranslation('home_screen');

	return (
		<>
			<Title text={t(`${props.i18nKey}.title`)} />
			<p>{t(`${props.i18nKey}.content`)}</p>
			{props?.children && props.children}
		</>
	);
}
