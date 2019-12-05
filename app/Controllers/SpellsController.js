import SpellsService from "../Services/SpellsService.js";
import store from "../store.js";

//Private
function _drawMaster() {
  let template = "";
  let spells = store.State.spells;
  spells.forEach(s => template += `<li onclick="app.spellsController.pickSpell('${s.id}')">${s.name}</li>`)
  document.getElementById("master-list").innerHTML = template;
}
function _drawYourSpells() {
  let template = "";
  let spells = store.State.yourSpells;
  spells.forEach(s => template += `<li onclick="app.spellsController.yourSpell('${s.id}')">${s.name}</li>`)
  document.getElementById("your-list").innerHTML = template;
}
function _drawSpell(){
  console.log("made it to draw card")
  let spells = store.State.activeSpells;
  document.getElementById("current-spell").innerHTML = spells.Template;

}

//Public
export default class SpellsController {
  constructor() {
    SpellsService.getMasterSpellsAsync();
    SpellsService.getMySpellsAsync();
    store.subscribe("spells", _drawMaster);
    store.subscribe("activeSpells", _drawSpell);
    store.subscribe("yourSpells", _drawYourSpells);

  }

  async keep(){
    try {
      await SpellsService.keepAsync()
    } catch (error) {
      console.error(error)
    }
  }

  async pickSpell(id){
    try {
      await SpellsService.pickSpellAsync(id)
    } catch (error) {
      console.error(error)
    }
  }

}
