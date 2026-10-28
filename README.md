# Ionic / Angular — projets d'apprentissage

![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)
![Ionic](https://img.shields.io/badge/Ionic-3880FF?logo=ionic&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22%20%7C%2024-339933?logo=nodedotjs&logoColor=white)
![Projets](https://img.shields.io/badge/projets-3-blue)

Dépôt de trois petits projets qui suivent un parcours d'apprentissage d'Angular et d'Ionic, du plus simple
(un projet de départ) au plus ciblé (des composants Ionic). Chaque dossier est un projet **indépendant**, avec
son propre `package.json` : il faut lancer `npm install` dans chacun.

| # | Projet | Ce qu'il montre | Sécurité (`npm audit`) |
|---|--------|-----------------|------------------------|
| 01 | [`01-myApp`](01-myApp) | Le modèle Ionic « tabs », point de départ | ![audit](https://img.shields.io/badge/npm%20audit-0%20vuln%C3%A9rabilit%C3%A9s-brightgreen) |
| 02 | [`02-angularBases`](02-angularBases) | Les bases d'Angular : routage, services, `@Input`/`@Output` | ![audit](https://img.shields.io/badge/npm%20audit-0%20vuln%C3%A9rabilit%C3%A9s-brightgreen) |
| 03 | [`03-components`](03-components) | Composants Ionic : Alert et Action Sheet | ![audit](https://img.shields.io/badge/npm%20audit-0%20vuln%C3%A9rabilit%C3%A9s-brightgreen) |

---

## 01 — myApp

![Ionic](https://img.shields.io/badge/Ionic-3880FF?logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)
![Tabs](https://img.shields.io/badge/mod%C3%A8le-tabs-lightblue)
![Tests](https://img.shields.io/badge/tests-Karma%20%2B%20Jasmine-C21325?logo=jasmine&logoColor=white)

Application générée avec le modèle **Ionic « tabs »** : trois onglets (`tab1`, `tab2`, `tab3`) dans une page
`tabs`, chacun chargé à la demande (lazy loading), et un composant partagé `explore-container`. Il ne contient
presque pas de logique : c'est la base sur laquelle les autres projets s'appuient.

À retenir :
- navigation par onglets avec le routeur Angular (`tabs-routing.module.ts`) ;
- modules chargés à la demande avec `PreloadAllModules` ;
- `StatusBar` et `SplashScreen` d'`@ionic-native`.

## 02 — angularBases

![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?logo=reactivex&logoColor=white)
![Bootstrap](https://img.shields.io/badge/style-Bootstrap-7952B3?logo=bootstrap&logoColor=white)

Projet **Angular pur** (sans Ionic) pour pratiquer les fondamentaux :

- **Routage** : pages `home`, `contact`, `about`, avec une redirection par défaut vers `home` ;
- **Module chargé à la demande** : `posts` (`loadChildren`), avec son propre routage ;
- **Service** : `DataService` récupère des articles depuis l'API publique
  [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) via `HttpClient` ;
- **Communication entre composants** : `PostComponent` reçoit un article (`@Input`) et signale le clic
  au parent (`@Output`) ;
- **Composant de menu** réutilisable (`menu`) qui génère les liens avec `*ngFor` et `routerLink`.

Les articles circulent sous forme d'`Observable` et s'affichent avec le pipe `async` dans le template.
Le style vient de **Bootstrap 5**, installé via `npm` et intégré au build (`angular.json`).

## 03 — components

![Ionic](https://img.shields.io/badge/Ionic-3880FF?logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)
![Composants](https://img.shields.io/badge/composants-Alert%20%7C%20Action%20Sheet-3880FF)

Catalogue de **composants Ionic**, une page par composant :

- **`start`** : page d'accueil avec la liste des composants disponibles (`ion-list`, `ion-item`, `ion-icon`) ;
- **`alert`** : page dédiée au composant *Alert* ;
- **`action-sheet`** : démonstration d'une *Action Sheet* créée avec `ActionSheetController`
  (boutons Delete, Share, Play, Favorite, Cancel, avec icônes, rôles et style personnalisé) ;
- **`header`** : composant partagé qui reçoit un titre (`@Input`).

---

## Démarrage rapide

Chaque projet se lance de la même façon, depuis son dossier :

```bash
cd 01-myApp        # ou 02-angularBases, 03-components
npm install
npm start          # serveur de développement sur http://localhost:4200
npm test           # tests unitaires (Karma)
npm run build      # build de production dans dist/
```

> **Node.js** : les projets mis à jour (voir ci-dessous) demandent une version récente
> (`^22.22.3`, `^24.15.0` ou `>=26`). Les projets non encore mis à jour utilisent d'anciennes versions
> d'Angular qui ne compilent pas avec ce Node (voir `Mise à jour de sécurité`).

## Mise à jour de sécurité

Les dépendances de départ (Angular 8/9, Ionic 5) contenaient de nombreuses failles signalées par `npm audit`.
Elles sont corrigées **projet par projet**, en montant Angular **une version majeure à la fois**
(`ng update`), avec un build vérifié et un commit par étape.

| Projet | Avant | Après | État |
|--------|-------|-------|------|
| 01-myApp | 100 failles (4 en production) | **0** | ✅ terminé : Angular 22, Ionic 8 |
| 02-angularBases | 131 failles (4 en production) | **0** | ✅ terminé : Angular 22, Bootstrap 5 |
| 03-components | 179 failles (3 en production) | **0** | ✅ terminé : Angular 22, Ionic 8 |

Les mises à jour vivent sur des branches séparées (`security/<projet>-angular-upgrade`) pour pouvoir être
relues avant fusion.
