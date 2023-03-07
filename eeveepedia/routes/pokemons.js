var express = require('express');
var router = express.Router();
const pokemonsCtrl = require("../controllers/pokemons")

/* GET users listing. */
router.get('/', pokemonsCtrl.index)
router.get("/new", pokemonsCtrl.new);
router.get('/:id', pokemonsCtrl.show)
router.post("/", pokemonsCtrl.create)
router.delete("/:id", pokemonsCtrl.delete)
// router.update("/", pokemonsCtrl.create)


module.exports = router;
