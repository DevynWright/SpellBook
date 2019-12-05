export default class Spells {
    constructor(data) {
        this.index = data.index
        this.id = data._id
        this.name = data.name
        this.description = data.description || data.desc
        this.range = data.range
        this.level = data.level
        this.duration = data.duration
    }

    get Template() {
        let template = `
        <h3 style="font-family:fantasy">Selected Spell</h1>
                  <div class="card text-center" style="width: 18rem;">
                      <div class="card-body bg-dark">
                        <h5 class="card-title">${this.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Level:${this.level}</h6>
                        <p class="card-text">${this.description}</p>
                        <p class="card-text">Range:${this.range}</p>
                        <button onclick="app.spellsController.keep()" class="btn btn-success">Add to Spellbook</button>
                      </div>
                    </div> `
                    return template;
    }
}