import type { RiskItem } from './types';

export const ITEM_INDUSTRIAL_ACCIDENT: RiskItem = {
	georisqueApiIdentifier: 'inondation',
	keyTranslation: 'industrial_accident',
	preventionListLength: 4,
	iconFileName: ['/risk-icons/1- Accident industriel.svg'],
};

export const ITEM_NUCLEAR_ACCIDENT: RiskItem = {
	georisqueApiIdentifier: 'nucleaire',
	keyTranslation: 'nuclear_accident',
	preventionListLength: 4,
	iconFileName: ['/risk-icons/2- Accident nucléaire.svg'],
};

export const ITEM_DANGEROUS_TRANSPORTATION_ACCIDENT: RiskItem = {
	georisqueApiIdentifier: 'canalisationMatièresDangereuses',
	keyTranslation: 'dangerous_transportation_accident',
	preventionListLength: 4,
	iconFileName: [
		'/risk-icons/3- Accident transport de matières dangereuses.svg',
	],
};

export const ITEM_AVALANCHE: RiskItem = {
	georisqueApiIdentifier: 'avalanche',
	keyTranslation: 'avalanche',
	preventionListLength: 2,
	iconFileName: ['/risk-icons/4- Avalanche.svg'],
};

export const ITEM_VOLCANIC_ERUPTION: RiskItem = {
	georisqueApiIdentifier: 'eruptionVolcanique',
	keyTranslation: 'volcanic_eruption',
	preventionListLength: 3,
	iconFileName: ['/risk-icons/5- Eruption volcanique.svg'],
};

export const ITEM_FOREST_FIRE: RiskItem = {
	georisqueApiIdentifier: 'feuForet',
	keyTranslation: 'forest_fire',
	preventionListLength: 3,
	iconFileName: ['/risk-icons/6- Feu de forêt.svg'],
};

export const ITEM_FLOODING: RiskItem = {
	georisqueApiIdentifier: 'inondation',
	keyTranslation: 'flooding',
	preventionListLength: 4,
	iconFileName: ['/risk-icons/7- Inondation.svg'],
};

export const ITEM_LANDSLIDE: RiskItem = {
	georisqueApiIdentifier: 'mouvementTerrain',
	keyTranslation: 'landslide',
	preventionListLength: 2,
	iconFileName: ['/risk-icons/8- Mouvement de terrain.svg'],
};

export const ITEM_DAM_BREAK: RiskItem = {
	georisqueApiIdentifier: 'ruptureBarrage',
	keyTranslation: 'dam_break',
	preventionListLength: 2,
	iconFileName: ['/risk-icons/9- Rupture de barrage.svg'],
};

export const ITEM_EARTHQUAKE: RiskItem = {
	georisqueApiIdentifier: 'seismes',
	keyTranslation: 'earthquake',
	preventionListLength: 3,
	iconFileName: ['/risk-icons/10- Séisme.svg'],
};

export const ITEM_STORM: RiskItem = {
	georisqueApiIdentifier: 'cyclones',
	keyTranslation: 'storm',
	preventionListLength: 4,
	iconFileName: [
		'/risk-icons/11-1- Tempête-Cyclone.svg',
		'/risk-icons/11-2- Tempête-Cyclone.svg',
	],
};

export const ITEM_TSUNAMI: RiskItem = {
	georisqueApiIdentifier: 'risquesCotiers',
	keyTranslation: 'tsunami',
	preventionListLength: 2,
	iconFileName: ['/risk-icons/12- Tsunami.svg'],
};

export const ITEM_COASTLINE_RETREAT: RiskItem = {
	georisqueApiIdentifier: 'reculTraitCote',
	keyTranslation: 'coastline_retreat',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_CLAY_SWELLING: RiskItem = {
	georisqueApiIdentifier: 'retraitGonflementArgiles',
	keyTranslation: 'clay_swelling',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_RADON: RiskItem = {
	georisqueApiIdentifier: 'radon',
	keyTranslation: 'radon',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_SOIL_POLLUTION: RiskItem = {
	georisqueApiIdentifier: 'pollutionSols',
	keyTranslation: 'soil_pollution',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_MINING_RISKS: RiskItem = {
	georisqueApiIdentifier: 'risquesMiniers',
	keyTranslation: 'mining_risks',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_ICPE: RiskItem = {
	georisqueApiIdentifier: 'icpe',
	keyTranslation: 'icpe',
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
	ITEM_COASTLINE_RETREAT,
	ITEM_CLAY_SWELLING,
	ITEM_RADON,
	ITEM_SOIL_POLLUTION,
	ITEM_MINING_RISKS,
	ITEM_ICPE,
];
