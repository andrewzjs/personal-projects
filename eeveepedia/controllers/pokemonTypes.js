const Pokemon = require("../models/pokemon")
const PokemonType = require("../models/pokemonType")

module.exports = {
    new: newPokemonType,
    create,
}

function newPokemonType(req, res) {
        res.render("pokemonTypes/new", {title: "EeeveePedia", typeId: req.params.id})
}

async function create(req, res) {
    try { 
        const pokemons = await PokemonType.create(req.body)
        res.redirect(`/pokemons/${pokemons.id}`)
    } catch(err) {
        console.log(err)
    }
}
// pokemons.pokemonTypes.push(req.body.typesId)