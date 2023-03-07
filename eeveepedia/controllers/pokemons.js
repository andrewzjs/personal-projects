const Pokemon = require("../models/pokemon")

module.exports = {
    index,
    show,
    new: newPokemon,
    create,
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
        res.render("pokemons/new", {title: "EeveePedia"})

    } catch(err) {
        console.log(err)
    }
}

async function show(req, res) {
    try {
        const pokemons = await Pokemon.findById(req.params.id)
        res.render("pokemons/show", {title: "EeveePedia", pokemons})
    } catch(err) {
        console.log(err)
    }
}

async function create(req, res) {
    try {
        const pokemons = new Pokemon(req.body)
        await pokemons.save()
        console.log(req.body)
        res.redirect("/pokemons")
    } catch(err) {
        console.log(err)
    }
}