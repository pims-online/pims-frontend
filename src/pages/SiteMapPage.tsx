import PageLayout from '@/layouts/PageLayout';

type Props = {
	widgetHeaderFooter?: boolean;
	applicationId?: string;
};

export default function SiteMapPage(props: Props) {
	return (
		<PageLayout {...props}>
			<h1>This is site map page</h1>
		</PageLayout>
	);
}
