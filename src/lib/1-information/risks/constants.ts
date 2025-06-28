import iconAvalanche from '@/assets/risk-icons/avalanche.svg';
import iconDamBreak from '@/assets/risk-icons/dam_break.svg';
import iconDangerousTransportationAccident from '@/assets/risk-icons/dangerous_transportation_accident.svg';
import iconEarthquake from '@/assets/risk-icons/earthquake.svg';
import iconFlooding from '@/assets/risk-icons/flooding.svg';
import iconForestFire from '@/assets/risk-icons/forest_fire.svg';
import iconIndustrialAccident from '@/assets/risk-icons/industrial_accident.svg';
import iconLandslide from '@/assets/risk-icons/landslide.svg';
import iconNuclearAccident from '@/assets/risk-icons/nuclear_accident.svg';
import iconStorm1 from '@/assets/risk-icons/storm_1.svg';
import iconStorm2 from '@/assets/risk-icons/storm_2.svg';
import iconTsunami from '@/assets/risk-icons/tsunami.svg';
import iconVolcanicEruption from '@/assets/risk-icons/volcanic_eruption.svg';

import type { RiskItem } from './types';

export const ITEM_INDUSTRIAL_ACCIDENT: RiskItem = {
	identifier: 'industrial_accident',
	georisqueApiIdentifier: 'icpe',
	preventionListLength: 4,
	iconFileName: [iconIndustrialAccident],
};

export const ITEM_NUCLEAR_ACCIDENT: RiskItem = {
	identifier: 'nuclear_accident',
	georisqueApiIdentifier: 'nucleaire',
	preventionListLength: 4,
	iconFileName: [iconNuclearAccident],
};

export const ITEM_DANGEROUS_TRANSPORTATION_ACCIDENT: RiskItem = {
	identifier: 'dangerous_transportation_accident',
	georisqueApiIdentifier: 'canalisationMatièresDangereuses',
	preventionListLength: 4,
	iconFileName: [iconDangerousTransportationAccident],
};

export const ITEM_AVALANCHE: RiskItem = {
	identifier: 'avalanche',
	georisqueApiIdentifier: 'avalanche',
	preventionListLength: 2,
	iconFileName: [iconAvalanche],
};

export const ITEM_VOLCANIC_ERUPTION: RiskItem = {
	identifier: 'volcanic_eruption',
	georisqueApiIdentifier: 'eruptionVolcanique',
	preventionListLength: 3,
	iconFileName: [iconVolcanicEruption],
};

export const ITEM_FOREST_FIRE: RiskItem = {
	identifier: 'forest_fire',
	georisqueApiIdentifier: 'feuForet',
	preventionListLength: 3,
	iconFileName: [iconForestFire],
};

export const ITEM_FLOODING: RiskItem = {
	identifier: 'flooding',
	georisqueApiIdentifier: 'inondation',
	preventionListLength: 4,
	iconFileName: [iconFlooding],
};

export const ITEM_LANDSLIDE: RiskItem = {
	identifier: 'landslide',
	georisqueApiIdentifier: 'mouvementTerrain',
	preventionListLength: 2,
	iconFileName: [iconLandslide],
};

export const ITEM_DAM_BREAK: RiskItem = {
	identifier: 'dam_break',
	georisqueApiIdentifier: 'ruptureBarrage',
	preventionListLength: 2,
	iconFileName: [iconDamBreak],
};

export const ITEM_EARTHQUAKE: RiskItem = {
	identifier: 'earthquake',
	georisqueApiIdentifier: 'seisme',
	preventionListLength: 3,
	iconFileName: [iconEarthquake],
};

export const ITEM_STORM: RiskItem = {
	identifier: 'storm',
	georisqueApiIdentifier: 'cyclone',
	preventionListLength: 4,
	iconFileName: [iconStorm1, iconStorm2],
};

export const ITEM_TSUNAMI: RiskItem = {
	identifier: 'tsunami',
	georisqueApiIdentifier: 'risqueCotier',		// Note : same Géorisque identifier as coastal flooding.
	preventionListLength: 2,
	iconFileName: [iconTsunami],
};

export const ITEM_COASTAL_FLOODING: RiskItem = {
	identifier: "coastal_flooding",
	georisqueApiIdentifier: 'risqueCotier',		// Note : same Géorisque identifier as tsunami.
	preventionListLength: 4,
	iconFileName: [iconTsunami],
}

export const ITEM_COASTLINE_RETREAT: RiskItem = {
	identifier: 'coastline_retreat',
	georisqueApiIdentifier: 'reculTraitCote',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_CLAY_SWELLING: RiskItem = {
	identifier: 'clay_swelling',
	georisqueApiIdentifier: 'retraitGonflementArgile',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_RADON: RiskItem = {
	identifier: 'radon',
	georisqueApiIdentifier: 'radon',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_SOIL_POLLUTION: RiskItem = {
	identifier: 'soil_pollution',
	georisqueApiIdentifier: 'pollutionSols',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_MINING_RISKS: RiskItem = {
	identifier: 'mining_risks',
	georisqueApiIdentifier: 'risqueMinier',
	preventionListLength: 0,
	iconFileName: [],
};

export const RISK_LIST: RiskItem[] = [
	ITEM_INDUSTRIAL_ACCIDENT,
	ITEM_NUCLEAR_ACCIDENT,
	ITEM_DANGEROUS_TRANSPORTATION_ACCIDENT,
	ITEM_AVALANCHE,
	ITEM_VOLCANIC_ERUPTION,
	ITEM_FOREST_FIRE,
	ITEM_FLOODING,
	ITEM_LANDSLIDE,
	ITEM_DAM_BREAK,
	ITEM_EARTHQUAKE,
	ITEM_STORM,
	ITEM_TSUNAMI,
	ITEM_COASTAL_FLOODING,
	// ITEM_COASTLINE_RETREAT,
	// ITEM_CLAY_SWELLING,
	// ITEM_RADON,
	// ITEM_SOIL_POLLUTION,
	// ITEM_MINING_RISKS,
];

// A mapping of georisque identifier to internal risk identifier
export const RISK_IDENTIFIER_MAP: Map<string, string[]> = new Map<string, string[]>();
RISK_LIST.forEach(risk => {
	const previousRisks = RISK_IDENTIFIER_MAP.get(risk.georisqueApiIdentifier);
	const risks = (previousRisks !== undefined) ? previousRisks : [];
	risks.push(risk.identifier);
	RISK_IDENTIFIER_MAP.set(risk.georisqueApiIdentifier, risks);
});

// A mapping of internal risk identifier to risk item
export const RISK_MAP: Map<string, RiskItem> = new Map<string, RiskItem>();
RISK_LIST.forEach(risk => {
	RISK_MAP.set(risk.identifier, risk);
});


export const RISK_INTENSITY_MAP: Map<string, string> = new Map<string, string>();
RISK_INTENSITY_MAP.set("Risque Existant", "intensity_present");
RISK_INTENSITY_MAP.set("Risque Existant - faible", "intensity_low");
RISK_INTENSITY_MAP.set("Risque Existant - modéré", "intensity_mid");
RISK_INTENSITY_MAP.set("Risque Existant - important", "intensity_high");
RISK_INTENSITY_MAP.set("Risque Inconnu", "intensity_unknown");
RISK_INTENSITY_MAP.set("Risque Concerne", "intensity_relevant");