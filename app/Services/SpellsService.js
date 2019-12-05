import Store from "../store.js";
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
    async getMasterSpellsAsync(){
        let res = await _spellApi.get('')
        store.commit("spells", res.data)
    }
}

const service = new SpellsService();
export default service;
