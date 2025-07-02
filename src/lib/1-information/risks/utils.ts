import type { RiskType } from './types';
import { RISK_MAP } from './constants';


/**
 * Given a list of identifier, return a list of RiskType in the same order
 */
export const getRiskItemList = (
	riskIdentifierList: Array<string>
): Array<RiskType> => {
	const riskList = new Array<RiskType>();

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
