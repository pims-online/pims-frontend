// ----- DATA GEOPF API -----

export type DataGeopfResponseError = {
	code: number;
	detail: Array<string>;
	message: string;
};

export type DataGeopfResponse = {
	features: Array<DataGeopfFeature>;
	type: string; // FeatureCollection
};

export type DataGeopfFeature = {
	type: 'Feature';
	geometry: DataGeopfFeatureGeometry;
	properties: DataGeopfFeatureProperties;
};

type DataGeopfFeatureGeometry = {
	type: string; // Point
	coordinates: Array<number>; // Two elements : latitude, longitude
};

export type DataGeopfFeatureProperties = {
	city: string;
	citycode: string; // code Insee
	context: string;
	housenumber: string;
	id: string;
	importance: number;
	label: string;
	name: string;
	postcode: string;
	score: number;
	street: string;
	type: string;
	x: number;
	y: number;
	_type: string;
};

// ---- GEORISQUE API -----

type GeorisqueAPIResponseInput = {
	adresse: string;
	longitude: number;
	latitude: number;
	url: string;
};

type GeorisqueAPIResponseRiskItem = {
	present: boolean;
	libelle: string;
};

type GeorisqueAPIResponseRisks = {
	risquesNaturels: {
		inondation: GeorisqueAPIResponseRiskItem;
		risquesCotiers: GeorisqueAPIResponseRiskItem;
		seismes: GeorisqueAPIResponseRiskItem;
		mouvementTerrain: GeorisqueAPIResponseRiskItem;
		reculTraitCote: GeorisqueAPIResponseRiskItem;
		retraitGonflementArgiles: GeorisqueAPIResponseRiskItem;
		avalanche: GeorisqueAPIResponseRiskItem;
		feuForet: GeorisqueAPIResponseRiskItem;
		eruptionVolcanique: GeorisqueAPIResponseRiskItem;
		cyclones: GeorisqueAPIResponseRiskItem;
		radon: GeorisqueAPIResponseRiskItem;
	};
	risquesTechnologiques: {
		icpe: GeorisqueAPIResponseRiskItem;
		nucleaire: GeorisqueAPIResponseRiskItem;
		canalisationsMatièresDangereuses: GeorisqueAPIResponseRiskItem;
		pollutionSols: GeorisqueAPIResponseRiskItem;
		ruptureBarrage: GeorisqueAPIResponseRiskItem;
		risquesMiniers: GeorisqueAPIResponseRiskItem;
	};
};

export type GeorisqueAPIResponse = GeorisqueAPIResponseInput &
	GeorisqueAPIResponseRisks;
