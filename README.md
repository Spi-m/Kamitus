# Prototype web Kamitus

Ce dépôt publie le prototype interactif de l'application Kamitus. Il contient 66 écrans mobiles, 225 interactions et 18 parcours fonctionnels.

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

Lorsqu'une navigation atteint le point de départ d'un autre parcours, le lecteur met automatiquement à jour le parcours actif, la sélection latérale et l'URL.

## Contribution

Les changements directs sur `main` ne sont pas autorisés. Toute modification doit utiliser une branche dédiée, une pull request et un commit conforme à `CONTRIBUTING.md`.
