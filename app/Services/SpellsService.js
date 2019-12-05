import Spells from "../Models/Spells.js"
import store from "../store.js";

let _sandBox = axios.create({
    baseUrl: "http://bcw-sandbox.herokuapp.com/api/Devyn/spells",
    timeout: 3000
})
let _spellApi = axios.create({
    baseURL: "http://bcw-sandbox.herokuapp.com/api/spells",
    timeout: 3000
})

class SpellsService {

    async keepAsync(){
        let currentSpell = store.State.activeSpells;
        let res = await _sandBox.post("", currentSpell)
        debugger
        this.getMySpellsAsync()
    }
    async getMySpellsAsync(){
        let res = await _sandBox.get();
        store.commit("yourSpells", res.data.data.map(sData => new Spells(sData)))
    }

    async getMasterSpellsAsync(){
        let res = await _spellApi.get('')
        store.commit("spells", res.data)
    }
    async pickSpellAsync(id){
        let res = await _spellApi.get("/" + id)
        let pickedSpell = new Spells(res.data)
        store.commit("activeSpells", pickedSpell)
    }
}

const service = new SpellsService();
export default service;
