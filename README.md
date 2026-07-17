# Prototype web Kamitus

Ce dépôt publie le prototype interactif de l'application Kamitus. Il contient 73 écrans mobiles, 245 interactions et 12 parcours fonctionnels.

## Test local

```bash
python3 -m http.server 8000
```

Ouvrir ensuite `http://localhost:8000`.

## Publication

Après fusion de la branche de fonctionnalité dans `main` :

1. ouvrir `Settings` > `Pages` dans GitHub ;
2. choisir `Deploy from a branch` ;
3. sélectionner `main` et `/(root)` ;
4. enregistrer la configuration.

Le site sera disponible sur `https://spi-m.github.io/Kamitus/`.

## Source

Les écrans et interactions sont exportés depuis le kit de marque Kamitus. Les zones cliquables utilisent le même référentiel que le plugin Figma.

La création du premier animal dispose d'un sous-parcours dédié : après l'enregistrement, l'onboarding reprend sur l'étape de localisation sans modifier le comportement de l'ajout depuis le profil.

La création d'une balade définit les tailles de chiens acceptées, l'âge maximum et la capacité totale avant de passer à la définition du parcours. Elle ne sélectionne pas l'animal de l'organisateur.

Le choix du parcours donne accès à l'historique personnel, au dessin d'un nouveau tracé, à l'import GPX et à une bibliothèque communautaire consultable par recherche. Chaque parcours validé est ajouté à `Mes parcours` et partagé ; une réutilisation conserve l'attribution de l'auteur d'origine.

Après validation de l'aperçu, l'action `Créer la balade` publie la sortie et ouvre une confirmation permettant d'accéder directement au détail organisateur ou de revenir au formulaire de modification.

Le sélecteur `Explorer / Mes balades` reste disponible dans les deux sections. `Mes balades` sépare ensuite les sorties organisées des inscriptions. Le détail organisateur donne accès à la modification, aux participants, à la conversation et à l'annulation avec confirmation.

La modification d'une balade utilise un écran dédié : la flèche de retour et l'enregistrement reviennent au détail organisateur, sans repasser par le retour du formulaire de création.

Depuis le profil, les cartes `Mes animaux` et `Paramètres` sont entièrement cliquables. L'état sans animal ouvre la liste vide adaptée, tandis que la carte et l'icône de réglages ouvrent les paramètres.

Les réglages donnent accès à des écrans dédiés pour les informations du compte, les préférences, le centre d'aide et les informations de version. Les notifications et permissions ouvrent la gestion des autorisations.

Le récapitulatif de fin de suivi sert uniquement à enregistrer une nouvelle sortie. Depuis l'historique, chaque activité ouvre un détail enregistré distinct, puis un formulaire permettant de modifier la sortie avant de revenir à ce détail.

Les douze points de départ correspondent à des objectifs utilisateur complets. Les confirmations, le choix du parcours, les participants, les conversations et les permissions restent dans leur parcours parent sans créer de doublon dans la liste latérale.

Lorsqu'une navigation atteint le point de départ d'un autre objectif, le lecteur met automatiquement à jour le parcours actif, la sélection latérale et l'URL.

## Contribution

Les changements directs sur `main` ne sont pas autorisés. Toute modification doit utiliser une branche dédiée, une pull request et un commit conforme à `CONTRIBUTING.md`.
