const paxios = require("axios")
class PokemonCommand {
    program;
    constructor(program) {
        this.program = program
    }
    register() {
        this.program
            .command("pokemon")
            .action(async () => await this.addPokemon())
    }
    async addPokemon() {
        const res = await paxios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        console.log(`Pokemon: ${res.data.name}`)
        console.log(`Height: ${res.data.height}`)
        console.log(`Weight: ${res.data.weight}`)
    }
}



module.exports = PokemonCommand;
export {};
