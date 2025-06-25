import type { RiskItem } from './types';
import { RISK_MAP } from './constants';


/**
 * Given a list of identifier, return a list of RiskItem in the same order
 */
export const getRiskItemList = (
	riskIdentifierList: Array<string>
): Array<RiskItem> => {
	const riskList = new Array<RiskItem>();

	riskIdentifierList.forEach(identifier => {
		const risk = RISK_MAP.get(identifier);

		if (risk === undefined) {
			console.warn(`Unknown risk identifier: ${identifier}`);
			return;
		}

		riskList.push(risk);
	});

	return riskList;
};
