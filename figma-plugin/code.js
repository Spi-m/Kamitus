const PAGE_NAME = "99 · Références PNG";
const SCREEN_PREFIX = "SCR-";
const ACTION_PREFIX = "Action · ";

const actions = [];

function add(source, label, box, target) {
  actions.push({ source, label, box, target });
}

function addBack(source, target) {
  add(source, "Retour", [12, 42, 68, 54], target);
}

function addBottomNavigation(source) {
  add(source, "Navigation · Balades", [0, 780, 98, 64], "SCR-WALK-001-liste");
  add(source, "Navigation · Créer", [98, 780, 97, 64], "SCR-WALK-004-creation");
  add(source, "Navigation · Activité", [195, 780, 97, 64], "SCR-ACTIVITY-002-historique");
  add(source, "Navigation · Profil", [292, 780, 98, 64], "SCR-USER-002-profil");
}

// Authentification
add("SCR-AUTH-001-bienvenue", "Créer un compte", [24, 700, 342, 48], "SCR-AUTH-002-inscription");
add("SCR-AUTH-001-bienvenue", "Se connecter", [24, 758, 342, 48], "SCR-AUTH-004-connexion");
addBack("SCR-AUTH-002-inscription", "SCR-AUTH-001-bienvenue");
add("SCR-AUTH-002-inscription", "S'inscrire avec Google", [24, 342, 342, 52], "SCR-ONBOARD-001-onboarding");
add("SCR-AUTH-002-inscription", "S'inscrire avec Apple", [24, 404, 342, 52], "SCR-ONBOARD-001-onboarding");
add("SCR-AUTH-002-inscription", "S'inscrire avec Meta", [24, 466, 342, 52], "SCR-ONBOARD-001-onboarding");
add("SCR-AUTH-002-inscription", "S'inscrire par e-mail", [24, 528, 342, 52], "SCR-AUTH-003-inscription-email");
add("SCR-AUTH-002-inscription", "Déjà membre", [90, 288, 276, 40], "SCR-AUTH-004-connexion");
addBack("SCR-AUTH-003-inscription-email", "SCR-AUTH-002-inscription");
add("SCR-AUTH-003-inscription-email", "Créer mon compte", [24, 580, 342, 48], "SCR-ONBOARD-001-onboarding");
add("SCR-AUTH-003-inscription-email", "Déjà membre", [90, 632, 276, 44], "SCR-AUTH-004-connexion");
addBack("SCR-AUTH-004-connexion", "SCR-AUTH-001-bienvenue");
add("SCR-AUTH-004-connexion", "Se connecter avec Google", [24, 342, 342, 52], "SCR-WALK-001-liste");
add("SCR-AUTH-004-connexion", "Se connecter avec Apple", [24, 404, 342, 52], "SCR-WALK-001-liste");
add("SCR-AUTH-004-connexion", "Se connecter avec Meta", [24, 466, 342, 52], "SCR-WALK-001-liste");
add("SCR-AUTH-004-connexion", "Se connecter par e-mail", [24, 528, 342, 52], "SCR-AUTH-005-connexion-email");
add("SCR-AUTH-004-connexion", "Créer un compte", [74, 288, 292, 40], "SCR-AUTH-002-inscription");
addBack("SCR-AUTH-005-connexion-email", "SCR-AUTH-004-connexion");
add("SCR-AUTH-005-connexion-email", "Mot de passe oublié", [194, 470, 172, 40], "SCR-AUTH-006-recuperation");
add("SCR-AUTH-005-connexion-email", "Se connecter", [24, 520, 342, 48], "SCR-WALK-001-liste");
add("SCR-AUTH-005-connexion-email", "Créer un compte", [74, 578, 292, 44], "SCR-AUTH-002-inscription");
addBack("SCR-AUTH-006-recuperation", "SCR-AUTH-005-connexion-email");
add("SCR-AUTH-006-recuperation", "Envoyer le lien", [24, 470, 342, 48], "SCR-AUTH-005-connexion-email");

// Onboarding
add("SCR-ONBOARD-001-onboarding", "Commencer", [24, 590, 342, 48], "SCR-ONBOARD-002-profil");
addBack("SCR-ONBOARD-002-profil", "SCR-ONBOARD-001-onboarding");
add("SCR-ONBOARD-002-profil", "Enregistrer le profil", [24, 690, 342, 48], "SCR-ONBOARD-003-premier-animal");
addBack("SCR-ONBOARD-003-premier-animal", "SCR-ONBOARD-002-profil");
add("SCR-ONBOARD-003-premier-animal", "Ajouter un animal", [24, 590, 342, 48], "SCR-ANIMAL-003-creation");
add("SCR-ONBOARD-003-premier-animal", "Continuer sans animal", [24, 652, 342, 42], "SCR-ONBOARD-004-localisation");
addBack("SCR-ONBOARD-004-localisation", "SCR-ONBOARD-003-premier-animal");
add("SCR-ONBOARD-004-localisation", "Autoriser la localisation", [24, 590, 342, 48], "SCR-ONBOARD-005-termine");
add("SCR-ONBOARD-004-localisation", "Plus tard", [24, 652, 342, 42], "SCR-ONBOARD-005-termine");
add("SCR-ONBOARD-005-termine", "Découvrir les balades", [24, 680, 342, 48], "SCR-WALK-001-liste");

// Profil animal
addBack("SCR-ANIMAL-001-liste-vide", "SCR-USER-002-profil");
add("SCR-ANIMAL-001-liste-vide", "Ajouter mon animal", [24, 524, 342, 48], "SCR-ANIMAL-003-creation");
addBack("SCR-ANIMAL-002-liste", "SCR-USER-002-profil");
add("SCR-ANIMAL-002-liste", "Ouvrir Nala", [24, 150, 342, 136], "SCR-ANIMAL-008-fiche");
add("SCR-ANIMAL-002-liste", "Ajouter un animal", [24, 316, 342, 48], "SCR-ANIMAL-003-creation");
addBack("SCR-ANIMAL-003-creation", "SCR-ANIMAL-002-liste");
add("SCR-ANIMAL-003-creation", "Modifier la photo", [198, 176, 64, 60], "SCR-ANIMAL-005-photo");
add("SCR-ANIMAL-003-creation", "Sélectionner les races", [24, 332, 342, 88], "SCR-ANIMAL-004-selection-races");
add("SCR-ANIMAL-003-creation", "Continuer vers les traits", [24, 690, 342, 48], "SCR-ANIMAL-006-traits");
addBack("SCR-ANIMAL-004-selection-races", "SCR-ANIMAL-003-creation");
add("SCR-ANIMAL-004-selection-races", "Valider les races", [24, 660, 342, 48], "SCR-ANIMAL-003-creation");
addBack("SCR-ANIMAL-005-photo", "SCR-ANIMAL-003-creation");
add("SCR-ANIMAL-005-photo", "Enregistrer la photo", [24, 692, 342, 48], "SCR-ANIMAL-003-creation");
addBack("SCR-ANIMAL-006-traits", "SCR-ANIMAL-003-creation");
add("SCR-ANIMAL-006-traits", "Continuer vers la santé", [24, 676, 342, 48], "SCR-ANIMAL-007-sante-vaccins");
addBack("SCR-ANIMAL-007-sante-vaccins", "SCR-ANIMAL-006-traits");
add("SCR-ANIMAL-007-sante-vaccins", "Enregistrer le profil", [24, 700, 342, 48], "SCR-ANIMAL-008-fiche");
addBack("SCR-ANIMAL-008-fiche", "SCR-ANIMAL-002-liste");
add("SCR-ANIMAL-008-fiche", "Modifier le profil", [316, 42, 58, 54], "SCR-ANIMAL-003-creation");
add("SCR-ANIMAL-008-fiche", "Modifier la photo", [222, 174, 54, 54], "SCR-ANIMAL-005-photo");
add("SCR-ANIMAL-008-fiche", "Voir les sorties", [24, 704, 342, 42], "SCR-ACTIVITY-002-historique");

// Balades
add("SCR-WALK-001-liste", "Voir la carte", [16, 226, 358, 44], "SCR-WALK-002-carte");
add("SCR-WALK-001-liste", "Tour du lac", [16, 326, 358, 102], "SCR-WALK-003-detail");
add("SCR-WALK-001-liste", "Créer une balade", [306, 680, 68, 74], "SCR-WALK-004-creation");
addBottomNavigation("SCR-WALK-001-liste");
add("SCR-WALK-002-carte", "Afficher la liste", [316, 56, 62, 58], "SCR-WALK-001-liste");
add("SCR-WALK-002-carte", "Voir le détail", [88, 688, 266, 46], "SCR-WALK-003-detail");
addBottomNavigation("SCR-WALK-002-carte");
addBack("SCR-WALK-003-detail", "SCR-WALK-001-liste");
add("SCR-WALK-003-detail", "S'inscrire à la balade", [20, 684, 350, 46], "SCR-WALK-005-participation");
add("SCR-WALK-003-detail", "Lieu de rendez-vous", [20, 740, 170, 42], "SCR-WALK-009-lieu-rendez-vous");
add("SCR-WALK-003-detail", "Parcours", [200, 740, 170, 42], "SCR-WALK-010-parcours");
addBack("SCR-WALK-004-creation", "SCR-WALK-001-liste");
add("SCR-WALK-004-creation", "Définir le parcours", [24, 596, 342, 60], "SCR-NAV-ROUTE-001-definition");
add("SCR-WALK-004-creation", "Animal participant", [24, 664, 342, 60], "SCR-ANIMAL-002-liste");
add("SCR-WALK-004-creation", "Continuer vers le parcours", [24, 736, 342, 48], "SCR-NAV-ROUTE-001-definition");
addBack("SCR-WALK-005-participation", "SCR-WALK-003-detail");
add("SCR-WALK-005-participation", "Modifier les animaux", [270, 326, 100, 74], "SCR-ANIMAL-002-liste");
add("SCR-WALK-005-participation", "Confirmer l'inscription", [20, 690, 350, 48], "SCR-WALK-008-detail-inscrit");
addBottomNavigation("SCR-WALK-005-participation");
addBack("SCR-WALK-006-participants", "SCR-WALK-008-detail-inscrit");
add("SCR-WALK-006-participants", "Écrire au groupe", [20, 688, 350, 46], "SCR-WALK-007-coordination");
addBottomNavigation("SCR-WALK-006-participants");
addBack("SCR-WALK-007-coordination", "SCR-WALK-008-detail-inscrit");
addBottomNavigation("SCR-WALK-007-coordination");
addBack("SCR-WALK-008-detail-inscrit", "SCR-WALK-001-liste");
add("SCR-WALK-008-detail-inscrit", "Participants", [20, 730, 170, 42], "SCR-WALK-006-participants");
add("SCR-WALK-008-detail-inscrit", "Conversation", [200, 730, 170, 42], "SCR-WALK-007-coordination");
add("SCR-WALK-008-detail-inscrit", "Lieu de rendez-vous", [20, 780, 170, 42], "SCR-NAV-001-navigation-depart");
add("SCR-WALK-008-detail-inscrit", "Parcours", [200, 780, 170, 42], "SCR-WALK-011-parcours-inscrit");
addBack("SCR-WALK-009-lieu-rendez-vous", "SCR-WALK-003-detail");
add("SCR-WALK-009-lieu-rendez-vous", "S'inscrire à la balade", [16, 668, 358, 48], "SCR-WALK-005-participation");
addBack("SCR-WALK-010-parcours", "SCR-WALK-003-detail");
addBack("SCR-WALK-011-parcours-inscrit", "SCR-WALK-008-detail-inscrit");

// Création, import et export d'un parcours
addBack("SCR-NAV-ROUTE-001-definition", "SCR-WALK-004-creation");
add("SCR-NAV-ROUTE-001-definition", "Voir l'aperçu", [16, 690, 358, 48], "SCR-NAV-ROUTE-002-apercu");
add("SCR-NAV-ROUTE-001-definition", "Importer un GPX", [16, 752, 358, 42], "SCR-NAV-ROUTE-003-import-gpx");
addBack("SCR-NAV-ROUTE-002-apercu", "SCR-NAV-ROUTE-001-definition");
add("SCR-NAV-ROUTE-002-apercu", "Options d'export", [316, 42, 58, 54], "SCR-NAV-ROUTE-004-export");
add("SCR-NAV-ROUTE-002-apercu", "Confirmer le parcours", [16, 744, 358, 48], "SCR-WALK-004-creation");
addBack("SCR-NAV-ROUTE-003-import-gpx", "SCR-NAV-ROUTE-001-definition");
add("SCR-NAV-ROUTE-003-import-gpx", "Choisir un fichier GPX", [62, 372, 266, 48], "SCR-NAV-ROUTE-002-apercu");
add("SCR-NAV-ROUTE-003-import-gpx", "Annuler l'import", [24, 746, 342, 42], "SCR-NAV-ROUTE-001-definition");
addBack("SCR-NAV-ROUTE-004-export", "SCR-NAV-ROUTE-002-apercu");
add("SCR-NAV-ROUTE-004-export", "Ouvrir dans une application", [16, 556, 358, 64], "SCR-NAV-ROUTE-002-apercu");
add("SCR-NAV-ROUTE-004-export", "Exporter le GPX", [16, 630, 358, 64], "SCR-NAV-ROUTE-002-apercu");
add("SCR-NAV-ROUTE-004-export", "Partager le lien", [16, 704, 358, 64], "SCR-NAV-ROUTE-002-apercu");

// Navigation jusqu'au point de départ
addBack("SCR-NAV-001-navigation-depart", "SCR-WALK-008-detail-inscrit");
add("SCR-NAV-001-navigation-depart", "Démarrer le guidage", [16, 668, 358, 48], "SCR-NAV-002-guidage-actif");
add("SCR-NAV-002-guidage-actif", "Recalculer l'itinéraire", [16, 58, 358, 96], "SCR-NAV-003-recalcul-itineraire");
add("SCR-NAV-002-guidage-actif", "Simuler l'arrivée", [0, 620, 390, 96], "SCR-NAV-004-arrivee");
add("SCR-NAV-002-guidage-actif", "Arrêter le guidage", [194, 740, 166, 76], "SCR-WALK-008-detail-inscrit");
addBack("SCR-NAV-004-arrivee", "SCR-NAV-002-guidage-actif");
add("SCR-NAV-004-arrivee", "Ouvrir la balade", [24, 646, 342, 48], "SCR-NAV-TRACK-001-demarrage");
add("SCR-NAV-004-arrivee", "Voir les participants", [24, 708, 342, 42], "SCR-WALK-006-participants");
add("SCR-NAV-005-signal-gps", "Reprendre le guidage", [16, 568, 358, 40], "SCR-NAV-002-guidage-actif");

// Suivi pendant la promenade
addBack("SCR-NAV-TRACK-001-demarrage", "SCR-NAV-004-arrivee");
add("SCR-NAV-TRACK-001-demarrage", "Choisir l'animal", [16, 486, 358, 64], "SCR-ANIMAL-002-liste");
add("SCR-NAV-TRACK-001-demarrage", "Démarrer la balade", [16, 676, 358, 48], "SCR-NAV-TRACK-002-enregistrement");
add("SCR-NAV-TRACK-002-enregistrement", "Ouvrir le guidage", [16, 400, 358, 72], "SCR-NAV-TRACK-003-guidage-parcours");
add("SCR-NAV-TRACK-002-enregistrement", "Terminer", [146, 668, 98, 116], "SCR-NAV-TRACK-005-fin-parcours");
add("SCR-NAV-TRACK-002-enregistrement", "Fiche de Nala", [256, 684, 86, 106], "SCR-ANIMAL-008-fiche");
add("SCR-NAV-TRACK-003-guidage-parcours", "Simuler une sortie du parcours", [16, 58, 358, 96], "SCR-NAV-TRACK-004-hors-parcours");
add("SCR-NAV-TRACK-003-guidage-parcours", "Voir les statistiques", [194, 750, 166, 60], "SCR-NAV-TRACK-002-enregistrement");
add("SCR-NAV-TRACK-004-hors-parcours", "Rejoindre le parcours", [16, 58, 358, 96], "SCR-NAV-TRACK-003-guidage-parcours");
add("SCR-NAV-TRACK-004-hors-parcours", "Voir les statistiques", [194, 750, 166, 60], "SCR-NAV-TRACK-002-enregistrement");
add("SCR-NAV-TRACK-005-fin-parcours", "Terminer et enregistrer", [24, 646, 342, 48], "SCR-ACTIVITY-001-recapitulatif");
add("SCR-NAV-TRACK-005-fin-parcours", "Continuer l'enregistrement", [24, 708, 342, 42], "SCR-NAV-TRACK-002-enregistrement");

// Activité, profil et paramètres
add("SCR-ACTIVITY-001-recapitulatif", "Enregistrer la sortie", [16, 686, 358, 48], "SCR-ACTIVITY-002-historique");
add("SCR-ACTIVITY-001-recapitulatif", "Voir l'historique", [16, 746, 358, 42], "SCR-ACTIVITY-002-historique");
add("SCR-ACTIVITY-002-historique", "Ouvrir la dernière sortie", [16, 154, 358, 108], "SCR-ACTIVITY-001-recapitulatif");
addBottomNavigation("SCR-ACTIVITY-002-historique");
addBack("SCR-USER-001-creation-profil", "SCR-USER-002-profil");
add("SCR-USER-001-creation-profil", "Enregistrer mon profil", [24, 670, 342, 48], "SCR-USER-002-profil");
add("SCR-USER-002-profil", "Modifier le profil", [24, 382, 342, 48], "SCR-USER-001-creation-profil");
add("SCR-USER-002-profil", "Ouvrir les paramètres", [316, 42, 58, 54], "SCR-SETTINGS-001-parametres");
add("SCR-USER-002-profil", "Mes animaux", [24, 282, 342, 78], "SCR-ANIMAL-002-liste");
addBottomNavigation("SCR-USER-002-profil");
addBack("SCR-SETTINGS-001-parametres", "SCR-USER-002-profil");
add("SCR-SETTINGS-001-parametres", "Permissions", [16, 336, 358, 64], "SCR-PERM-001-permissions");
add("SCR-SETTINGS-001-parametres", "Se déconnecter", [16, 700, 358, 48], "SCR-AUTH-001-bienvenue");
addBack("SCR-PERM-001-permissions", "SCR-SETTINGS-001-parametres");
add("SCR-PERM-001-permissions", "Réglages de localisation", [98, 282, 248, 36], "SCR-SETTINGS-001-parametres");
add("SCR-PERM-001-permissions", "Réglages de notifications", [98, 446, 248, 36], "SCR-SETTINGS-001-parametres");

const automaticTransitions = [
  ["SCR-NAV-003-recalcul-itineraire", 1.2, "SCR-NAV-002-guidage-actif"],
  ["SCR-NAV-005-signal-gps", 2.0, "SCR-NAV-002-guidage-actif"]
];

const flowStarts = [
  ["SCR-AUTH-001-bienvenue", "Authentification"],
  ["SCR-ONBOARD-001-onboarding", "Onboarding"],
  ["SCR-ANIMAL-001-liste-vide", "Ajouter un animal"],
  ["SCR-ANIMAL-002-liste", "Gérer les animaux"],
  ["SCR-WALK-001-liste", "Explorer les balades"],
  ["SCR-WALK-004-creation", "Créer une balade"],
  ["SCR-WALK-003-detail", "S'inscrire à une balade"],
  ["SCR-WALK-008-detail-inscrit", "Inscription confirmée"],
  ["SCR-WALK-006-participants", "Participants et conversation"],
  ["SCR-NAV-ROUTE-001-definition", "Créer un parcours"],
  ["SCR-NAV-001-navigation-depart", "Navigation vers le départ"],
  ["SCR-NAV-TRACK-001-demarrage", "Suivi de promenade"],
  ["SCR-ACTIVITY-002-historique", "Activité"],
  ["SCR-USER-002-profil", "Profil et réglages"],
  ["SCR-PERM-001-permissions", "Permissions"]
];

function nodeAction(destinationId, transitionType = "DISSOLVE") {
  return {
    type: "NODE",
    destinationId,
    navigation: "NAVIGATE",
    transition: {
      type: transitionType,
      easing: { type: "EASE_OUT" },
      duration: 0.15
    },
    resetScrollPosition: true
  };
}

async function main() {
  const page = figma.root.children.find((candidate) => candidate.name === PAGE_NAME);
  if (!page) {
    throw new Error(`Page introuvable : ${PAGE_NAME}`);
  }

  await figma.setCurrentPageAsync(page);

  const screenNodes = page
    .findAllWithCriteria({ types: ["FRAME"] })
    .filter((node) => node.name.startsWith(SCREEN_PREFIX));
  const screens = Object.fromEntries(screenNodes.map((node) => [node.name, node]));

  const missingScreens = actions
    .flatMap(({ source, target }) => [source, target])
    .concat(automaticTransitions.flatMap(([source, , target]) => [source, target]))
    .filter((name, index, list) => !screens[name] && list.indexOf(name) === index);

  if (missingScreens.length > 0) {
    throw new Error(`Écrans manquants : ${missingScreens.join(", ")}`);
  }

  // Replace the old prototype entry points before adding interactions. This
  // prevents Figma from keeping an automatically generated "Flow 1".
  page.flowStartingPoints = [];
  page.flowStartingPoints = flowStarts.map(([screen, name]) => ({
    nodeId: screens[screen].id,
    name
  }));

  let removed = 0;
  for (const screen of screenNodes) {
    for (const child of [...screen.children]) {
      if (child.name.startsWith(ACTION_PREFIX)) {
        child.remove();
        removed += 1;
      }
    }
  }

  const failures = [];
  for (const { source, label, box, target } of actions) {
    let hotspot;
    try {
      hotspot = figma.createRectangle();
      hotspot.name = `${ACTION_PREFIX}${label} → ${target}`;
      hotspot.resize(box[2], box[3]);
      hotspot.fills = [
        {
          type: "SOLID",
          color: { r: 1, g: 1, b: 1 },
          opacity: 0.001
        }
      ];
      hotspot.strokes = [];
      hotspot.cornerRadius = Math.min(8, box[3] / 2);
      hotspot.setSharedPluginData("kamitus", "prototype-action", label);
      screens[source].appendChild(hotspot);
      hotspot.x = box[0];
      hotspot.y = box[1];
      await hotspot.setReactionsAsync([
        {
          trigger: { type: "ON_CLICK" },
          actions: [nodeAction(screens[target].id)]
        }
      ]);
    } catch (error) {
      if (hotspot && !hotspot.removed) {
        hotspot.remove();
      }
      failures.push(`${source} · ${label}`);
    }
  }

  for (const [source, timeout, target] of automaticTransitions) {
    try {
      await screens[source].setReactionsAsync([
        {
          trigger: { type: "AFTER_TIMEOUT", timeout },
          actions: [nodeAction(screens[target].id)]
        }
      ]);
    } catch (error) {
      failures.push(`${source} · transition automatique`);
    }
  }

  // Reapply the complete list after Figma has created every connection.
  page.flowStartingPoints = [];
  page.flowStartingPoints = flowStarts.map(([screen, name]) => ({
    nodeId: screens[screen].id,
    name
  }));

  const start = screens["SCR-AUTH-001-bienvenue"];
  page.selection = [start];
  figma.viewport.scrollAndZoomIntoView([start]);

  figma.closePlugin(
    `Kamitus : ${actions.length - failures.length} interactions ajoutées, ${removed} anciennes remplacées, ${flowStarts.length} flows prêts${failures.length ? `, ${failures.length} interaction(s) ignorée(s)` : ""}.`
  );
}

if (typeof globalThis !== "undefined") {
  globalThis.KAMITUS_PROTOTYPE = {
    actions,
    automaticTransitions,
    flowStarts
  };
}

if (typeof figma !== "undefined") {
  main().catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    figma.closePlugin(`Kamitus : ${message}`);
  });
}
