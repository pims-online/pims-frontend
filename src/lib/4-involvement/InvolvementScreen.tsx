import InvolvementList from './InvolvementList';

export default function InvolvementScreen() {
	return (
		<div>
			<InvolvementList listLength={4} translationKeyPrefix="participation" />
			<InvolvementList listLength={2} translationKeyPrefix="information" />
		</div>
	);
}
