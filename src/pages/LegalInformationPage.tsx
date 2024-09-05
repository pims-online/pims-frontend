import PageLayout from '@/layouts/PageLayout';

type Props = {
	widgetHeaderFooter?: boolean;
	applicationId?: string;
};

export default function LegalInformationPage(props: Props) {
	return (
		<PageLayout {...props}>
			<h1>This is mentions légales page</h1>
		</PageLayout>
	);
}
