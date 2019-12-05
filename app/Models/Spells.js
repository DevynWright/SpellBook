export default class Spells {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}