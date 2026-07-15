# Prototype web Kamitus

Ce dépôt publie le prototype interactif de l'application Kamitus. Il contient 43 écrans mobiles, 132 interactions et 14 parcours fonctionnels.

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

## Contribution

Les changements directs sur `main` ne sont pas autorisés. Toute modification doit utiliser une branche dédiée, une pull request et un commit conforme à `CONTRIBUTING.md`.
