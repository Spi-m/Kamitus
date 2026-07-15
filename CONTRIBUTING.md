# Contribution

Les termes normatifs de ce document sont interprétés conformément à la [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

## Workflow

1. Mettre à jour la branche locale `main` depuis `origin/main`.
2. Créer une branche dédiée au format `<type>/<description-courte>`.
3. Effectuer et vérifier les changements concernés.
4. Créer un commit conforme à Conventional Commits.
5. Publier la branche et ouvrir une pull request vers `main`.

Les contributeurs MUST NOT committer ou pousser directement sur `main`.

## Commits

Chaque commit MUST respecter la structure suivante :

```text
<type>[scope optionnel][! optionnel]: <description>

[corps optionnel]

[footer optionnel]
```

`feat` MUST être utilisé pour une fonctionnalité et `fix` MUST être utilisé pour une correction. Les autres types MAY être utilisés lorsqu'ils décrivent précisément le changement.

Exemples :

```text
feat(prototype): add activity flow
fix(screens): align walk participation hotspots
docs: update deployment instructions
```

Les changements incompatibles MUST être indiqués avec `!` ou un footer `BREAKING CHANGE: `.

## Validation

Avant une pull request, les contributeurs MUST :

- vérifier les scripts JavaScript avec `node --check` ;
- contrôler le rendu sur desktop et mobile ;
- vérifier que chaque écran et asset référencé existe ;
- exécuter `git diff --check`.
