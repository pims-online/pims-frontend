# pims-frontend

## :mount_fuji: PIMS Frontend

### :crystal_ball: Installation en local

#### 1 - Cloner le repository Github

Il y a besoin d'installer le frontend et le backend pour profiter de l'expérience complète de développement. Voir le readme du backend pour le faire tourner.

```bash
git clone git@github.com:david-bretaud-dev/pims-frontend.git
```

#### 2 - Installer les nodes packages

Le gestionnaire de package utilisé dans ce readme sera `npm`.
Installer les packages avec la commande suivante :

```bash
npm install
```

Le script `"postinstall": "copy-dsfr-to-public"` (cf `package.json`) fait une copie de dsfr dans le dossier public. Il ne faut pas y toucher, car c'est là que tout le css du DSFR est stocké.

Ce css est chargé dans le composant `DSFRWrapper`, avec la balise suivante : `<link rel="stylesheet" href="/dsfr/dsfr.min.css" />`.

#### 3 - Déployer l'application en local

Pour faire tourner l'application en local :

```bash
npm run dev
```

L'application tournera sur l'url `localhost:5173`.

#### 4 - Build l'application

Pour créer un build de l'application, et vérifier que le code est fonctionnel :

```bash
npm run build
```

Le bundle est généré dans le dossier `./dist`.
Pour utiliser le build pour faire tourner l'application en local :

```bash
npm run preview
```

#### 5 - Tester le widget

Plus de détails sur la partie Widget peuvent être trouvées dans la suite de ce README. Pour faire bref, l'application peut être importée comme un Web Component dans n'importe quelle page html.

Un exemple est disponible à [cet url](https://pims-widget-integration.s3.eu-west-3.amazonaws.com/pims-integration-tutoriel.html).

Cette intégration Widget peut être testée avec le build local (port 4173). Pour ce faire, il suffit d'utiliser de créer un fichier html comme suit :

```html
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Client website</title>
		<script
			src="http://localhost:4173/assets/js/widget.js"
			type="module"
		></script>
	</head>
	<body>
		<pims-dematerialized-widget></pims-dematerialized-widget>
		<h1>Hello</h1>
	</body>
</html>
```

### :lock: Contexte juridique

Le PIMS dématérialisé a pour objectif d'être une télé-procédure d'Etat. A cet effet, elle doit respecter différentes contraintes.

#### Respect du DSFR

##### Vue d'ensemble du DSFR

Le DSFR est le [Design System de l'État français](https://www.systeme-de-design.gouv.fr/composants-et-modeles). C'est un ensemble de règles à respecter, de composants à utiliser, de typographies à utiliser (Marianne, Spectral), de couleurs à utiliser selon des règles strictes.

Le DSFR existe donc sous la forme d'une librairie javascript, permettant d'avoir facilement ces différentes règles d'implémenter (typographies, thème de couleur, composants réutilisables). Pour construire l'application, il "suffit" de respecter les règles d'utilisations du DSFR.

##### Exemple de règles

[Règles d'utilisation du Stepper du DSFR](https://www.systeme-de-design.gouv.fr/composants-et-modeles/indicateur-d-etapes)

> L’indicateur d'étapes ne sert pas à naviguer d’une étape à l’autre, pour cela utiliser des boutons en bas des champs de l'étape.
> Il est conseillé de finir par une étape de confirmation. Il est aussi conseillé de créer une page d’introduction à la démarche, avant de commencer cette dernière pour présenter les différentes étapes, sur laquelle ne figure pas cet indicateur d’étapes.

A cet effet :

- le composant `./src/layouts/components/stepper/Stepper.tsx` ne permet pas de naviguer ;
- le composant `./src/layouts/components/Navigator.tsx` permet de faire cette navigation ;
- la navigation est précédée d'une page d'introduction `./src/lib/0-home/HomeScreen.tsx` présentant les différentes étapes.

##### La version React du DSFR

Pour développer une application React, on utilise à la place la librairie [React DSFR](https://react-dsfr.codegouv.studio/), qui reprend (quasiment) tous les composants du DSFR original.

Lorsque cette librairie est installée, de nombreux fichiers sont créés dans le dossier `./public/dsfr` (ils ne sont donc pas traités par le Build de Vite). Parmi ces fichiers se trouvent tous les composants nécessaires, le css et les polices (Marianne, Spectral) du DSFR, il n'y a donc pas besoin de les gérer de notre côté.

#### Autres sujets à traiter

- RGPD
- [Checklist Pidila](https://design.numerique.gouv.fr/outils/checklist-pidila/)

### :ship: Développement de l'application

#### Internationalization (i18n)

L'application est pour le moment disponible en français (`fr`) et en anglais (`en`). L'internationalization est gérée avec [react-i18next](https://react.i18next.com/), et dans le dossier `./src/i18n`.

Le fichier `i18n` génère l'object `i18n` utilisé ensuite dans `App.tsx` pour générer le `I18nProvider`.

Le dossier `translations` contient les fichiers de traduction, 1 par language, nommés avec la forme `[locale].json`.

Comme l'application est 100% côté Client, la méthode est toujours la même pour utiliser des traductions. Elle repose sur le hook `useTranslation`. Les clés de traductions sont toutes écrites en `snake_case`.

```tsx
import { useTranslation } from 'react-i18next';

export default function MyFunctionalComponent() {
	const { t } = useTranslation('namespace');

	const myTranslation = t('key_translation.to_my.sentence');
}
```

#### API utilisées

Plusieurs APIs sont utilisées pour récupérer automatiquement différentes données.

##### API Geoplateforme

Cette API nous permet de :

- Autocompléter le nom de l'adresse entré dans l'Input d'adresse
- Récupérer des informations complètes sur la position de l'utilisateur : adresse, coordonnées latitude & longitude, code Insee.

Liens utiles :

- [Site internet et simulateur de l'API](https://geoservices.ign.fr/documentation/services/services-geoplateforme/geocodage)

##### API Géorisque

Cette API nous permet de récupérer les risques autour d'une position donnée (par adresse ou par coordonnées).

Liens utiles :

- [Informations sur l'API](https://api.gouv.fr/les-api/api-georisques)
- [Site internet et simulateur de l'API](https://www.georisques.gouv.fr/doc-api)
- [Site de géorisque](https://www.georisques.gouv.fr/)

##### API Annuaire admistratif du service public

Cette API nous permet de récupérer le numéro de téléphone de la mairie de la ville où se trouve l'utilisateur, à partir du code Insee celle-ci.

Liens utiles :

- [Informations sur l'API](https://api.gouv.fr/les-api/api-annuaire-administration-services-publics)
- [Site internet et simulateur de l'API](https://api-lannuaire.service-public.fr/explore/dataset/api-lannuaire-administration/api/)
- [Document pdf à destination des développeurs pour comprendre comment utiliser l'API](https://api-lannuaire.service-public.fr/explore/dataset/api-lannuaire-administration/information/)
- [Tutoriel plus technique pour utiliser l'API](<https://help.opendatasoft.com/apis/ods-explore-v2/#section/Opendatasoft-Query-Language-(ODSQL)/Language-elements>)

#### API de fréquences radio

Le backend de PIMS met à disposition une API qui donne la fréquence des stations de Radio-France pour chaque ville de France. 

### :tada: Widget as Web Component

Une des ambitions du PIMS dématérialisé est de le généraliser dans la vie professionnelle et associative. Un levier pour cela est d'avoir l'application qui génère le PIMS intégrée dans le site des associations ou entreprises, afin que celles-ci offrent un référentiel à leurs employés sur où aller chercher la ressource.

L'application `pims-frontend` a donc été pensée et conçue pour être un site mais aussi un Web component intégrable dans n'importe quel autre site (cf [Tester le widget](#5---tester-le-widget)).

Pour ce faire :

- le fichier `./src/widget.tsx` utilise `r2wc` pour transformer l'application React en Web Component.
- pour des évolutions potentielles, où le widget devrait se distinguer du site gouvernemental, un exemple est fait avec le `Header`.
- le composant `DSFRWrapper` permet d'injecter dans le head du site hébergeur les scripts nécessaires pour utiliser le DSFR.
- le build de l'application par Vite, dont la stratégie se retrouve dans `vite.config.ts`, permet de générer dans le bundle un script `widget.js` qui exporte le Web component de `./src/widget.tsx` après y avoir injecté le css. C'est ce script qui est récupéré lors de l'incorporation Widget sur un site externe (cf [Tester le widget](#5---tester-le-widget))

### :tokyo_tower: Build de l'application

Le build de l'application par Vite suit la configuration du fichier `vite.config.ts`. Celle-ci a été faite de sorte à avoir un build simple, où le css est injecté dans une page js principale, et où les assets sont bien hashés et ordonnés.

#### Injection du css

La librairie `cssInjectedByJsPlugin` permet de récupérer tous les fichiers css, de les agréger ensemble, et d'injecter le css final dans les fichiers javascripts "spécifiés". Ces fichiers sont ceux qui vérifient la condition de sortie de la fonction `jsAssetsFilterFunction`. Dans notre cas, le css doit être injecté à la fois dans le fichier unique js qui fait tourner le site (`assets/main.js`), mais aussi dans le fichier qui contient le widget (le Web component a besoin du css aussi!)(`assets/js/widget.js`).

Plusieurs sources de css :

- le css de react-dsfr, copié dans dist/dsfr
- le css custom de notre repo

| Env            | CSS custom                        | CSS DSFR                    |
| -------------- | --------------------------------- | --------------------------- |
| localhost:5173 | Imported in `main.tsx`            |                             |
| build          | Injected in `assets/main.js`      | Injected from the build cdn |
| widget         | Injected in `assets/js/widget.js` | Injected from the build cdn |

#### Rollup options du build

Une documentation explicite les différents items : <https://rollupjs.org/configuration-options/>.

`input` : En spécifiant une map, qui relie un nom à un entry point / fichier, les entry points seront séparés dans plusieurs chunks. En spécifiant à la fois `main` et `widget`, on s'assure d'avoir deux chunks séparés pour les deux applications.

`output.entryFileNames` : pour le chunk qui porte le nom `widget`, nous le plaçons dans le dossier `assets/js`, et tous les autres iront dans le dossier `assets`.

`output.assetFileNames`: on organise de même les fichiers considérés comme assets statiques par Vite : ce sont des images, des svg, à partir d'une certaille, et qui ont besoin d'être optimisées. En bref, les images sont mis dans le dossier `assets/images`, les medias dans le dossier `assets/medias`, et le reste sera placé dans `assets`. Leurs URLs sont gérés par Vite.

Les très petites images (<=4kb / 4096 bytes) sont encodées en base64 data URIs. Cela permet d'améliorer les performances en évitant des requêtes HTTP supplémentaires.

Le script de build fait automatiquement une copie de public/dsfr vers dist/dsfr.

## :rainbow: Liens utiles

- [DSFR](https://www.systeme-de-design.gouv.fr/composants-et-modeles)
- [DSFR - Prise en main pour les développeurs](https://www.systeme-de-design.gouv.fr/prise-en-main-et-perimetre/developpeurs/prise-en-main)
- [DSFR - Icônes](https://www.systeme-de-design.gouv.fr/fondamentaux/icone)
- [React DSFR](https://react-dsfr.codegouv.studio/)
- [React DSFR - Components documentation](https://components.react-dsfr.codegouv.studio)
- [React DSFR - Github](https://github.com/codegouvfr/react-dsfr/blob/main/README.fr.md)
- [Exemple de projets utilisant React DSFR](https://github.com/codegouvfr/react-dsfr?tab=readme-ov-file#use-cases)
- [react-i18next](https://react.i18next.com/)
- [Le tutoriel qui a inspiré la configuration du Widget en Web component](https://www.linkedin.com/pulse/converting-react-app-appendable-widget-using-web-mike-rahimi-wssnf/)
- [API Annuaire administration](https://api-lannuaire.service-public.fr/explore/dataset/api-lannuaire-administration/api/)
- [Vite React](https://vitejs.dev/)
- [Vite Build rollup options](https://rollupjs.org/configuration-options/)
