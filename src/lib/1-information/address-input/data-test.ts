import type { GeorisqueAPIResponse } from './types';

export const dataTest1: GeorisqueAPIResponse = {
	adresse: '9 Rue Saint-Santin, 45750 Saint-Pryvé-Saint-Mesmin',
	longitude: 1.847517,
	latitude: 47.873298,
	url: 'https://www.georisques.gouv.fr/mes-risques/connaitre-les-risquespres-de-chez-moi/rapport2?%20city=Saint-Pryv%C3%A9-Saint-Mesmin%20&typeForm=adresse&codeInsee=45298&lon=1.847517&lat=47.873298&%20adresse=9+Rue+Saint-Santin%2C+45750+Saint-Pryv%C3%A9-Saint-Mesmin',
	risquesNaturels: {
		inondation: {
			present: true,
			libelle: 'Inondation',
		},
		risqueCotier: {
			present: false,
			libelle: 'Risques côtiers (submersion marine, tsunami)',
		},
		seisme: {
			present: true,
			libelle: 'Séismes',
		},
		mouvementTerrain: {
			present: true,
			libelle: 'Mouvements de terrain',
		},
		reculTraitCote: {
			present: false,
			libelle: 'Recul du trait de cote',
		},
		retraitGonflementArgile: {
			present: true,
			libelle: 'Retrait gonflement des argiles',
		},
		avalanche: {
			present: false,
			libelle: 'Avalanche',
		},
		feuForet: {
			present: false,
			libelle: 'Feu de forêt',
		},
		eruptionVolcanique: {
			present: false,
			libelle: 'Eruption volcanique',
		},
		cyclone: {
			present: false,
			libelle: 'Vents violents et risques cycloniques',
		},
		radon: {
			present: true,
			libelle: 'Radon',
		},
	},
	risquesTechnologiques: {
		icpe: {
			present: false,
			libelle: 'Installations industrielles classées (ICPE)',
		},
		nucleaire: {
			present: false,
			libelle: 'Nucléaire',
		},
		canalisationsMatieresDangereuses: {
			present: false,
			libelle: 'Canalisations de transport de matières dangereuses',
		},
		pollutionSols: {
			present: true,
			libelle: 'Pollution des sols',
		},
		ruptureBarrage: {
			present: false,
			libelle: 'Rupture de barrage',
		},
		risqueMinier: {
			present: false,
			libelle: 'Risques miniers',
		},
	},
};

export const dataTest2: GeorisqueAPIResponse = {
	adresse: '1 rue Louis Calmel, 92230 Gennevilliers',
	longitude: 2.29253,
	latitude: 48.92572,
	url: 'https://www.georisques.gouv.fr/mes-risques/connaitre-les-risquespres-de-chez-moi/rapport2?city=Gennevilliers&typeForm=adresse&codeInsee=92036&lon=2.29327&lat=48.925736&adresse=1+Rue+Louis+Calmel%2C+92230+Gennevilliers',
	risquesNaturels: {
		inondation: {
			present: true,
			libelle: 'Inondation',
		},
		risqueCotier: {
			present: false,
			libelle: 'Risques côtiers (submersion marine, tsunami)',
		},
		seisme: {
			present: true,
			libelle: 'Séismes',
		},
		mouvementTerrain: {
			present: false,
			libelle: 'Mouvements de terrain',
		},
		reculTraitCote: {
			present: false,
			libelle: 'Recul du trait de cote',
		},
		retraitGonflementArgile: {
			present: true,
			libelle: 'Retrait gonflement des argiles',
		},
		avalanche: {
			present: false,
			libelle: 'Avalanche',
		},
		feuForet: {
			present: false,
			libelle: 'Feu de forêt',
		},
		eruptionVolcanique: {
			present: false,
			libelle: 'Eruption volcanique',
		},
		cyclone: {
			present: false,
			libelle: 'Vents violents et risques cycloniques',
		},
		radon: {
			present: true,
			libelle: 'Radon',
		},
	},
	risquesTechnologiques: {
		icpe: {
			present: true,
			libelle: 'Installations industrielles classées (ICPE)',
		},
		nucleaire: {
			present: true,
			libelle: 'Nucléaire',
		},
		canalisationsMatieresDangereuses: {
			present: true,
			libelle: 'Canalisations de transport de matières dangereuses',
		},
		pollutionSols: {
			present: true,
			libelle: 'Pollution des sols',
		},
		ruptureBarrage: {
			present: false,
			libelle: 'Rupture de barrage',
		},
		risqueMinier: {
			present: false,
			libelle: 'Risques miniers',
		},
	},
};
