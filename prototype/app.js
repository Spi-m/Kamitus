(() => {
  "use strict";

  const data = globalThis.KAMITUS_PROTOTYPE;
  if (!data) {
    throw new Error("Configuration du prototype introuvable.");
  }

  const BASE_WIDTH = 390;
  const BASE_HEIGHT = 844;
  const SCREEN_PATH = "app-screens/screens/";
  const ASSET_VERSION = "20260716.3";
  const shell = document.querySelector(".prototype-shell");
  const device = document.querySelector("#device");
  const screenImage = document.querySelector("#screen-image");
  const hotspotLayer = document.querySelector("#hotspot-layer");
  const flowList = document.querySelector("#flow-list");
  const flowTitle = document.querySelector("#flow-title");
  const screenTitle = document.querySelector("#screen-title");
  const flowCount = document.querySelector("#flow-count");
  const zonesToggle = document.querySelector("#zones-toggle");
  const backButton = document.querySelector("#back-button");
  const resetButton = document.querySelector("#reset-button");
  const panelOpen = document.querySelector("#panel-open");
  const panelClose = document.querySelector("#panel-close");
  const panelScrim = document.querySelector("#panel-scrim");
  const errorState = document.querySelector("#error-state");

  const actionsByScreen = new Map();
  for (const action of data.actions) {
    const actions = actionsByScreen.get(action.source) || [];
    actions.push(action);
    actionsByScreen.set(action.source, actions);
  }

  const automaticByScreen = new Map(
    data.automaticTransitions.map(([source, timeout, target]) => [source, { timeout, target }])
  );
  const flows = data.flowStarts.map(([screen, name], index) => ({
    id: `flow-${index + 1}`,
    screen,
    name
  }));
  const screens = new Set(
    data.actions
      .flatMap(({ source, target }) => [source, target])
      .concat(data.automaticTransitions.flatMap(([source, , target]) => [source, target]))
      .concat(flows.map(({ screen }) => screen))
  );

  let activeFlow = flows[0];
  let currentScreen = activeFlow.screen;
  let automaticTimer = 0;

  function getLocationFromHash() {
    const parts = decodeURIComponent(window.location.hash.replace(/^#\/?/, ""))
      .split("/")
      .filter(Boolean);
    const screen = parts.at(-1);
    const flow = flows.find(({ id }) => id === parts.at(-2));
    return {
      screen: screens.has(screen) ? screen : null,
      flow: flow || null
    };
  }

  function formatScreenName(screen) {
    const match = screen.match(/^SCR-([A-Z-]+)-(\d+)-(.+)$/);
    if (!match) {
      return screen;
    }

    const family = match[1].replaceAll("-", " · ");
    const label = match[3]
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return `${family} ${match[2]} · ${label}`;
  }

  function imagePath(screen) {
    return `${SCREEN_PATH}${screen}.png?v=${ASSET_VERSION}`;
  }

  function setPanelVisible(visible) {
    shell.classList.toggle("panel-visible", visible);
    panelOpen.setAttribute("aria-expanded", String(visible));
  }

  function preloadTargets(actions) {
    const targets = new Set(actions.map(({ target }) => target));
    const automatic = automaticByScreen.get(currentScreen);
    if (automatic) {
      targets.add(automatic.target);
    }

    for (const target of targets) {
      const image = new Image();
      image.src = imagePath(target);
    }
  }

  function renderHotspots(screen) {
    hotspotLayer.replaceChildren();
    const actions = actionsByScreen.get(screen) || [];

    for (const action of actions) {
      const [x, y, width, height] = action.box;
      const hotspot = document.createElement("button");
      hotspot.type = "button";
      hotspot.className = "hotspot";
      hotspot.setAttribute("aria-label", action.label);
      hotspot.title = action.label;
      hotspot.style.left = `${(x / BASE_WIDTH) * 100}%`;
      hotspot.style.top = `${(y / BASE_HEIGHT) * 100}%`;
      hotspot.style.width = `${(width / BASE_WIDTH) * 100}%`;
      hotspot.style.height = `${(height / BASE_HEIGHT) * 100}%`;
      hotspot.addEventListener("click", () => navigate(action.target));
      hotspotLayer.append(hotspot);
    }

    preloadTargets(actions);
  }

  function updateFlowList() {
    for (const button of flowList.querySelectorAll(".flow-button")) {
      button.setAttribute("aria-current", String(button.dataset.flowId === activeFlow.id));
    }
  }

  function render(screen) {
    window.clearTimeout(automaticTimer);
    currentScreen = screen;
    flowTitle.textContent = activeFlow.name;
    screenTitle.textContent = formatScreenName(screen);
    document.title = `${formatScreenName(screen)} | Kamitus`;
    backButton.disabled = !(window.history.state && window.history.state.depth > 0);
    updateFlowList();
    renderHotspots(screen);

    device.classList.remove("is-ready");
    errorState.hidden = true;
    screenImage.onload = () => device.classList.add("is-ready");
    screenImage.onerror = () => {
      device.classList.add("is-ready");
      errorState.hidden = false;
    };
    screenImage.alt = `Écran ${formatScreenName(screen)}`;
    screenImage.src = imagePath(screen);

    const automatic = automaticByScreen.get(screen);
    if (automatic) {
      automaticTimer = window.setTimeout(() => navigate(automatic.target), automatic.timeout * 1000);
    }
  }

  function navigate(screen, options = {}) {
    if (!screens.has(screen)) {
      return;
    }

    const currentDepth = window.history.state?.depth || 0;
    const depth = options.depth ?? currentDepth + 1;
    const state = {
      kamitus: true,
      screen,
      flowId: activeFlow.id,
      depth
    };
    const url = `#/${activeFlow.id}/${encodeURIComponent(screen)}`;

    if (options.replace) {
      window.history.replaceState(state, "", url);
    } else {
      window.history.pushState(state, "", url);
    }
    render(screen);
  }

  function selectFlow(flow) {
    activeFlow = flow;
    navigate(flow.screen, { replace: true, depth: 0 });
    setPanelVisible(false);
  }

  function buildFlowList() {
    flowCount.textContent = `${flows.length} parcours`;
    for (const flow of flows) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "flow-button";
      button.dataset.flowId = flow.id;
      button.textContent = flow.name;
      button.addEventListener("click", () => selectFlow(flow));
      flowList.append(button);
    }
  }

  function initialise() {
    buildFlowList();
    const location = getLocationFromHash();
    const initialScreen = location.screen || activeFlow.screen;
    activeFlow = location.flow || flows.find(({ screen }) => screen === initialScreen) || activeFlow;
    navigate(initialScreen, { replace: true, depth: 0 });

    zonesToggle.addEventListener("change", () => {
      device.classList.toggle("show-zones", zonesToggle.checked);
    });
    backButton.addEventListener("click", () => {
      if (window.history.state?.depth > 0) {
        window.history.back();
      }
    });
    resetButton.addEventListener("click", () => navigate(activeFlow.screen, { replace: true, depth: 0 }));
    panelOpen.addEventListener("click", () => setPanelVisible(true));
    panelClose.addEventListener("click", () => setPanelVisible(false));
    panelScrim.addEventListener("click", () => setPanelVisible(false));

    window.addEventListener("popstate", (event) => {
      const location = getLocationFromHash();
      const screen = event.state?.screen || location.screen || activeFlow.screen;
      activeFlow = flows.find(({ id }) => id === event.state?.flowId) || location.flow || activeFlow;
      render(screen);
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setPanelVisible(false);
      }
    });
  }

  initialise();
})();
