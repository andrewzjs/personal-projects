var express = require('express');
var router = express.Router();
const pokemonTypesCtrl = require("../controllers/pokemonTypes")

router.get('/pokemons/:id/pokemonTypes/new', pokemonTypesCtrl.new);
router.post('/pokemonTypes', pokemonTypesCtrl.create); 
// router.post("/pokemonTypes", pokemonTypesCtrl.create)

module.exports = router;