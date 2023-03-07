const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movesSchema = new Schema({
    moveName: {
        type: String,
    },
    power: {
        type: Number,
    }, accuracy: {
        type: Number,
    }, moveType: {
        type: String,
    }
})

const pokemonsSchema = new Schema({
    pokemonName: {
        type: String,
        enum: [
            "Bulbasaur",
            "Ivysaur",
            "Venusaur"
        ]
    }, height: {
        type: Number,
    }, weight: {
        type: Number,
    }, dateCaught: {
            type: Date,
            default: Date.now()  + 365*24*60*60000,
    }, gender: {
        type: String,
    }, isShiny: {
        type: Boolean,
        default: false 
    }, moves: [movesSchema],
    specialAbility: {
        type: String,
    }, description: {
        type: String,
    }, moves: [movesSchema]


}, {timestamps: true})



module.exports = mongoose.model("Pokemon", pokemonsSchema)