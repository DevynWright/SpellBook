import Spells from "../Models/Spells.js"
import store from "../store.js";

let _sandBox = axios.create({
    baseURL: "http://bcw-sandbox.herokuapp.com/api/Devyn/spells",
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
        this.getMySpellsAsync()
    }
    async getMySpellsAsync(){
        let res = await _sandBox.get("");
        store.commit("yourSpells", res.data.data.map(s => new Spells(s)))
    }

    async getMasterSpellsAsync(){
        let res = await _spellApi.get('')
        store.commit("spells", res.data)
    }
    async pickSpellAsync(id){
        let res = await _spellApi.get(id)
        console.log('from pick spell service', res)
        let description ="";
        res.data.desc.forEach(text => description += text);
        res.data.desc = description
        let pickedSpell = new Spells(res.data)
        store.commit("activeSpells", pickedSpell)
        console.log("from store area", store.State.a)
    }
}

const service = new SpellsService();
export default service;
