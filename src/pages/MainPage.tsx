import PageLayout from '@/layouts/PageLayout';
import RootLayout from '@/layouts/RootLayout';

type Props = {
	widgetHeaderFooter?: boolean;
	applicationId?: string;
};

export default function MainPage(props: Props) {
	return (
		<PageLayout {...props}>
			<RootLayout />
		</PageLayout>
	);
}
