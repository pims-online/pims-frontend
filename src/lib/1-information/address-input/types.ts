// ----- HANDLERS -----

export type Handler = () => Promise<GeoplateformeApiFeature>;

export type HandlerWrapper = (handler: Handler) => () => Promise<void>;

// ----- GEOPLATEFORME API -----

export type GeoplateformeApiResponseError = {
	code: number;
	detail: Array<string>;
	message: string;
};

export type GeoplateformeApiResponse = {
	features: Array<GeoplateformeApiFeature>;
	type: string; // FeatureCollection
};

export type GeoplateformeApiFeature = {
	type: 'Feature';
	geometry: GeoplateformeApiFeatureGeometry;
	properties: GeoplateformeApiFeatureProperties;
};

type GeoplateformeApiFeatureGeometry = {
	type: string; // Point
	coordinates: Array<number>; // Two elements : latitude, longitude
};

export type GeoplateformeApiFeatureProperties = {
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

type GeorisqueApiRiskIntensity =
	"Risque Existant" |
	"Risque Existant - faible" |
	"Risque Existant - modéré" |
	"Risque Existant - important" |
	"Risque Inconnu" |
	"Concerné";

type GeorisqueApiResponseInput = {
	adresse: string;
	longitude: number;
	latitude: number;
	url: string;
};

type GeorisqueApiResponseRiskItem = {
	present: boolean;
	libelle: string;
	libelleStatutCommune: GeorisqueApiRiskIntensity | undefined;
	libelleStatutAdresse: GeorisqueApiRiskIntensity | undefined;
};

type GeorisqueApiResponseRisks = {
	risquesNaturels: {
		avalanche: GeorisqueApiResponseRiskItem;
		cyclone: GeorisqueApiResponseRiskItem;
		eruptionVolcanique: GeorisqueApiResponseRiskItem;
		feuForet: GeorisqueApiResponseRiskItem;
		inondation: GeorisqueApiResponseRiskItem;
		mouvementTerrain: GeorisqueApiResponseRiskItem;
		radon: GeorisqueApiResponseRiskItem;
		reculTraitCote: GeorisqueApiResponseRiskItem;
		retraitGonflementArgile: GeorisqueApiResponseRiskItem;
		risqueCotier: GeorisqueApiResponseRiskItem;
		seisme: GeorisqueApiResponseRiskItem;
	};
	risquesTechnologiques: {
		canalisationsMatieresDangereuses: GeorisqueApiResponseRiskItem;
		icpe: GeorisqueApiResponseRiskItem;
		nucleaire: GeorisqueApiResponseRiskItem;
		pollutionSols: GeorisqueApiResponseRiskItem;
		risqueMinier: GeorisqueApiResponseRiskItem;
		ruptureBarrage: GeorisqueApiResponseRiskItem;
	};
};

export type GeorisqueApiResponse = GeorisqueApiResponseInput &
	GeorisqueApiResponseRisks;

// ----- GEOLOCATION API -----

export type GeolocationCoordinates = {
	latitude: number;
	longitude: number;
} | null;
