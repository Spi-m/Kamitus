# Prototype web Kamitus

Ce dépôt publie le prototype interactif de l'application Kamitus. Il contient 56 écrans mobiles, 170 interactions et 16 parcours fonctionnels.

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

Après validation de l'aperçu, l'action `Créer la balade` publie la sortie et ouvre une confirmation permettant de consulter les balades ou de revenir au formulaire de modification.

Lorsqu'une navigation atteint le point de départ d'un autre parcours, le lecteur met automatiquement à jour le parcours actif, la sélection latérale et l'URL.

## Contribution

Les changements directs sur `main` ne sont pas autorisés. Toute modification doit utiliser une branche dédiée, une pull request et un commit conforme à `CONTRIBUTING.md`.
