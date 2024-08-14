import iconAvalanche from '@public/risk-icons/avalanche.svg';
import iconDamBreak from '@public/risk-icons/dam_break.svg';
import iconDangerousTransportationAccident from '@public/risk-icons/dangerous_transportation_accident.svg';
import iconEarthquake from '@public/risk-icons/earthquake.svg';
import iconFlooding from '@public/risk-icons/flooding.svg';
import iconForestFire from '@public/risk-icons/forest_fire.svg';
import iconIndustrialAccident from '@public/risk-icons/industrial_accident.svg';
import iconLandslide from '@public/risk-icons/landslide.svg';
import iconNuclearAccident from '@public/risk-icons/nuclear_accident.svg';
import iconStorm1 from '@public/risk-icons/storm_1.svg';
import iconStorm2 from '@public/risk-icons/storm_2.svg';
import iconTsunami from '@public/risk-icons/tsunami.svg';
import iconVolcanicEruption from '@public/risk-icons/volcanic_eruption.svg';

import type { RiskItem } from './types';

export const ITEM_INDUSTRIAL_ACCIDENT: RiskItem = {
	georisqueApiIdentifier: 'icpe',
	keyTranslation: 'industrial_accident',
	preventionListLength: 4,
	iconFileName: [iconIndustrialAccident],
};

export const ITEM_NUCLEAR_ACCIDENT: RiskItem = {
	georisqueApiIdentifier: 'nucleaire',
	keyTranslation: 'nuclear_accident',
	preventionListLength: 4,
	iconFileName: [iconNuclearAccident],
};

export const ITEM_DANGEROUS_TRANSPORTATION_ACCIDENT: RiskItem = {
	georisqueApiIdentifier: 'canalisationMatièresDangereuses',
	keyTranslation: 'dangerous_transportation_accident',
	preventionListLength: 4,
	iconFileName: [iconDangerousTransportationAccident],
};

export const ITEM_AVALANCHE: RiskItem = {
	georisqueApiIdentifier: 'avalanche',
	keyTranslation: 'avalanche',
	preventionListLength: 2,
	iconFileName: [iconAvalanche],
};

export const ITEM_VOLCANIC_ERUPTION: RiskItem = {
	georisqueApiIdentifier: 'eruptionVolcanique',
	keyTranslation: 'volcanic_eruption',
	preventionListLength: 3,
	iconFileName: [iconVolcanicEruption],
};

export const ITEM_FOREST_FIRE: RiskItem = {
	georisqueApiIdentifier: 'feuForet',
	keyTranslation: 'forest_fire',
	preventionListLength: 3,
	iconFileName: [iconForestFire],
};

export const ITEM_FLOODING: RiskItem = {
	georisqueApiIdentifier: 'inondation',
	keyTranslation: 'flooding',
	preventionListLength: 4,
	iconFileName: [iconFlooding],
};

export const ITEM_LANDSLIDE: RiskItem = {
	georisqueApiIdentifier: 'mouvementTerrain',
	keyTranslation: 'landslide',
	preventionListLength: 2,
	iconFileName: [iconLandslide],
};

export const ITEM_DAM_BREAK: RiskItem = {
	georisqueApiIdentifier: 'ruptureBarrage',
	keyTranslation: 'dam_break',
	preventionListLength: 2,
	iconFileName: [iconDamBreak],
};

export const ITEM_EARTHQUAKE: RiskItem = {
	georisqueApiIdentifier: 'seisme',
	keyTranslation: 'earthquake',
	preventionListLength: 3,
	iconFileName: [iconEarthquake],
};

export const ITEM_STORM: RiskItem = {
	georisqueApiIdentifier: 'cyclone',
	keyTranslation: 'storm',
	preventionListLength: 4,
	iconFileName: [iconStorm1, iconStorm2],
};

export const ITEM_TSUNAMI: RiskItem = {
	georisqueApiIdentifier: 'risqueCotier',
	keyTranslation: 'tsunami',
	preventionListLength: 2,
	iconFileName: [iconTsunami],
};

export const ITEM_COASTLINE_RETREAT: RiskItem = {
	georisqueApiIdentifier: 'reculTraitCote',
	keyTranslation: 'coastline_retreat',
	preventionListLength: 0,
	iconFileName: [],
};

export const ITEM_CLAY_SWELLING: RiskItem = {
	georisqueApiIdentifier: 'retraitGonflementArgile',
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
	georisqueApiIdentifier: 'risqueMinier',
	keyTranslation: 'mining_risks',
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
	// ITEM_COASTLINE_RETREAT,
	// ITEM_CLAY_SWELLING,
	// ITEM_RADON,
	// ITEM_SOIL_POLLUTION,
	// ITEM_MINING_RISKS,
];
