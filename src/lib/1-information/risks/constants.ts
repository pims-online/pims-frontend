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

import { RiskType } from '@/providers/AppContextConfig';

export const ITEM_INDUSTRIAL_ACCIDENT: RiskType = {
	identifier: 'industrial_accident',
	georisqueApiIdentifier: 'icpe',
	preventionListLength: 4,
	iconFileName: [iconIndustrialAccident],
};

export const ITEM_NUCLEAR_ACCIDENT: RiskType = {
	identifier: 'nuclear_accident',
	georisqueApiIdentifier: 'nucleaire',
	preventionListLength: 4,
	iconFileName: [iconNuclearAccident],
};

export const ITEM_DANGEROUS_TRANSPORTATION_ACCIDENT: RiskType = {
	identifier: 'dangerous_transportation_accident',
	georisqueApiIdentifier: 'canalisationMatièresDangereuses',
	preventionListLength: 4,
	iconFileName: [iconDangerousTransportationAccident],
};

export const ITEM_AVALANCHE: RiskType = {
	identifier: 'avalanche',
	georisqueApiIdentifier: 'avalanche',
	preventionListLength: 2,
	iconFileName: [iconAvalanche],
};

export const ITEM_VOLCANIC_ERUPTION: RiskType = {
	identifier: 'volcanic_eruption',
	georisqueApiIdentifier: 'eruptionVolcanique',
	preventionListLength: 3,
	iconFileName: [iconVolcanicEruption],
};

export const ITEM_FOREST_FIRE: RiskType = {
	identifier: 'forest_fire',
	georisqueApiIdentifier: 'feuForet',
	preventionListLength: 3,
	iconFileName: [iconForestFire],
};

export const ITEM_FLOODING: RiskType = {
	identifier: 'flooding',
	georisqueApiIdentifier: 'inondation',
	preventionListLength: 4,
	iconFileName: [iconFlooding],
};

export const ITEM_LANDSLIDE: RiskType = {
	identifier: 'landslide',
	georisqueApiIdentifier: 'mouvementTerrain',
	preventionListLength: 2,
	iconFileName: [iconLandslide],
};

export const ITEM_DAM_BREAK: RiskType = {
	identifier: 'dam_break',
	georisqueApiIdentifier: 'ruptureBarrage',
	preventionListLength: 2,
	iconFileName: [iconDamBreak],
};

export const ITEM_EARTHQUAKE: RiskType = {
	identifier: 'earthquake',
	georisqueApiIdentifier: 'seisme',
	preventionListLength: 3,
	iconFileName: [iconEarthquake],
};

export const ITEM_STORM: RiskType = {
	identifier: 'storm',
	georisqueApiIdentifier: 'cyclone',
	preventionListLength: 4,
	iconFileName: [iconStorm1, iconStorm2],
};

export const ITEM_TSUNAMI: RiskType = {
	identifier: 'tsunami',
	georisqueApiIdentifier: 'risqueCotier',		// Note : same Géorisque identifier as coastal flooding.
	preventionListLength: 2,
	iconFileName: [iconTsunami],
};

export const ITEM_COASTAL_FLOODING: RiskType = {
	identifier: "coastal_flooding",
	georisqueApiIdentifier: 'risqueCotier',		// Note : same Géorisque identifier as tsunami.
	preventionListLength: 4,
	iconFileName: [iconTsunami],
}

export const ITEM_COASTLINE_RETREAT: RiskType = {
	identifier: 'coastline_retreat',
	georisqueApiIdentifier: 'reculTraitCote',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_CLAY_SWELLING: RiskType = {
	identifier: 'clay_swelling',
	georisqueApiIdentifier: 'retraitGonflementArgile',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_RADON: RiskType = {
	identifier: 'radon',
	georisqueApiIdentifier: 'radon',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_SOIL_POLLUTION: RiskType = {
	identifier: 'soil_pollution',
	georisqueApiIdentifier: 'pollutionSols',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_MINING_RISKS: RiskType = {
	identifier: 'mining_risks',
	georisqueApiIdentifier: 'risqueMinier',
	preventionListLength: 0,
	iconFileName: [],
};

// A list of ignored Géorisque identifiers
export const IGNORED_RISKS_IDENTIFIERS: string[] = [
	"canalisationsMatieresDangereuses",
	"pollutionSols",
	"risqueMinier",
	"remonteeNappe",
	"reculTraitCote",
	"retraitGonflementArgile",
	"radon",
]

// A list of all risk types
export const RISK_TYPES: RiskType[] = [
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

// A mapping of georisque identifier to internal risk types
export const RISK_TYPE_MAP: Map<string, RiskType[]> = new Map<string, RiskType[]>();
IGNORED_RISKS_IDENTIFIERS.forEach(ignoredIdentifier => {
	RISK_TYPE_MAP.set(ignoredIdentifier, []);
});
RISK_TYPES.forEach(risk => {
	const previousRisks = RISK_TYPE_MAP.get(risk.georisqueApiIdentifier);
	const risks = (previousRisks !== undefined) ? previousRisks : [];
	risks.push(risk);
	RISK_TYPE_MAP.set(risk.georisqueApiIdentifier, risks);
});

// A mapping of Géorisque intensity identifier to internal intensity identifier
export const RISK_INTENSITY_MAP: Map<string, string> = new Map<string, string>();
RISK_INTENSITY_MAP.set("Risque Existant", "intensity_present");
RISK_INTENSITY_MAP.set("Risque Existant - faible", "intensity_low");
RISK_INTENSITY_MAP.set("Risque Existant - modéré", "intensity_mid");
RISK_INTENSITY_MAP.set("Risque Existant - important", "intensity_high");
RISK_INTENSITY_MAP.set("Risque Inconnu", "intensity_unknown");
RISK_INTENSITY_MAP.set("Risque Concerne", "intensity_relevant");