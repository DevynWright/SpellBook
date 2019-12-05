import SpellsService from "../Services/SpellsService.js";
import store from "../store.js";

//Private
function _drawMaster() {
  let template = "";
  let spells = store.State.spells;
  spells.forEach(s => template += `<li>${s.name}</li>`)
  document.getElementById("master-list").innerHTML = template;
}

//Public
export default class SpellsController {
  constructor() {
    SpellsService.getMasterSpellsAsync();
    store.subscribe("spells", _drawMaster);
  }
}
