import type { RiskItem } from './types';
import { RISK_LIST } from './constants';

/**
 * Return a Map where keys are georisque identifiers and values are RismItem
 */
const getRiskMap = () => {
	const riskMap = new Map<string, RiskItem>();

	RISK_LIST.forEach((item) => riskMap.set(item.georisqueApiIdentifier, item));
	return riskMap;
};

/**
 * Given a list of identifier, return a list of RiskItem in the same order
 */
export const getRiskItemList = (
	riskIdentifierList: Array<string>
): Array<RiskItem> => {
	const riskMap = getRiskMap();
	return (riskIdentifierList || [])
		.map((identifier: string) => riskMap.get(identifier))
		.filter((item) => !!item);
};
