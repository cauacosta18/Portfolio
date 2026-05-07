import setupAge from "./age.js";
import setupMainToggle from "./mainToggle.js";
import {setupMenuEvents} from "./menu.js";
import {addEventListeners} from "./slider.js";
import { setupAlert } from "./alert.js";
import { setupTabs } from "./tabs.js";
import { setupCollumnItens } from "./collumnItens.js";

let state = {
    main_div_active: false
}

setupAge();
setupMenuEvents(state);
addEventListeners();
setupAlert();
setupTabs();
setupCollumnItens();
state.main_div_active = setupMainToggle(state);
























