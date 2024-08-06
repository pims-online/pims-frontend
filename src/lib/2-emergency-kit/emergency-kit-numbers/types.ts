import type { UsefulNumbers } from '../../../AppContextProvider';

export type KitNumbers = UsefulNumbers;

// ----- ANNUAIRE API -----

export type PlageOuverture = {
	nom_jour_debut: string;
	nom_jour_fin: string;
	valeur_heure_debut_1: string;
	valeur_heure_fin_1: string;
	valeur_heure_debut_2: string;
	valeur_heure_fin_2: string;
	commentaire: string;
};

export type SiteInternet = {
	libelle: string;
	valeur: string;
};

export type Pivot = {
	type_service_local: string;
	code_insee_commune: string[];
};

export type Telephone = {
	valeur: string;
	description: string;
};

export type Adresse = {
	type_adresse: string;
	complement1: string;
	complement2: string;
	numero_voie: string;
	service_distribution: string;
	code_postal: string;
	nom_commune: string;
	pays: string;
	continent: string;
	longitude: string;
	latitude: string;
	accessibilite: string;
	note_accessibilite: string;
};

type Data = {
	plage_ouverture: string; // Can be parsed as PlageOuverture[];
	site_internet: string; // Can be parsed as SiteInternet[];
	copyright: string;
	siren: string | null;
	ancien_code_pivot: string;
	reseau_social: string | null;
	texte_reference: string | null;
	partenaire: string | null;
	telecopie: string;
	nom: string;
	siret: string;
	itm_identifiant: string;
	sigle: string | null;
	affectation_personne: string | null;
	date_modification: string;
	adresse_courriel: string;
	service_disponible: string | null;
	organigramme: string | null;
	pivot: string; // Can be parsed as Pivot[];
	partenaire_identifiant: string | null;
	ancien_identifiant: string | null;
	id: string;
	ancien_nom: string | null;
	commentaire_plage_ouverture: string | null;
	annuaire: string | null;
	tchat: string | null;
	hierarchie: string | null;
	categorie: string;
	sve: string | null;
	telephone_accessible: string | null;
	application_mobile: string | null;
	version_type: string;
	type_repertoire: string | null;
	telephone: string; // Can be parsed as Telephone[];
	version_etat_modification: string | null;
	date_creation: string;
	partenaire_date_modification: string | null;
	mission: string | null;
	formulaire_contact: string | null;
	version_source: string | null;
	type_organisme: string | null;
	code_insee_commune: string;
	statut_de_diffusion: string;
	adresse: string; // Can be parsed as Adresse[];
	url_service_public: string;
	information_complementaire: string | null;
	date_diffusion: string | null;
};

export type AnnuaireAPIResponse = { total_count: number; results: Array<Data> };
