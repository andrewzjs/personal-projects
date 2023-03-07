const Pokemon = require("../models/pokemon")
const PokemonType = require("../models/pokemonType")

module.exports = {
    index,
    show,
    new: newPokemon,
    create,
    delete: deleteEntry,
}

async function index(req, res) {
    try {
        const pokemons = await Pokemon.find({})
        res.render("pokemons/index", {title: "EeveePedia", pokemons})
    } catch(err) {
        console.log(err)
    }
}

async function newPokemon(req, res) {
    try {
        const pokemonTypes = await PokemonType.find({})
        res.render("pokemons/new", {title: "EeveePedia", pokemonTypes})

    } catch(err) {
        console.log(err)
    }
}

async function show(req, res) {
    try {
        const pokemons = await Pokemon.findById(req.params.id).populate("pokemonTypes")
        res.render("pokemons/show", {title: "EeveePedia", pokemons})
    } catch(err) {
        console.log(err)
    }
}

async function create(req, res) {
    try {
        for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
        const pokemons = await Pokemon.create(req.body)
        console.log(req.body)
        res.redirect(`/pokemons/${pokemons._id}`)
    } catch(err) {
        console.log(err)
    }
}

async function deleteEntry(req,res) {
    try {
        await Pokemon.deleteOne({_id: req.params.id})
        res.redirect("/pokemons")
    } catch(err){
        console.log(err)
    }
}
