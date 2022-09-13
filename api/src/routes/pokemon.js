const { Router } = require("express");
const {
  getPokemonByName,
  getAllPokemon,
  getPokemonById,
  createPokemon,
} = require("../middleware/middleware");
const { Pokemon, Type } = require("../db.js");

const router = Router();

// Configurar los routers
router.get("/", async (req, res) => {
  let { name } = req.query;
  let pokemonInfo = [];
  if(!name){
  pokemonInfo = await getAllPokemon();
  pokemonInfo.sort((a,b)=>{
    if(a.id<b.id) return -1
    if(a.id>b.id) return 1
    return 0
  })
  if (!pokemonInfo) {
    return res.json({ info: "No hay mas registros" });
  } else {
    return res.json(pokemonInfo);
  }}else{
    name = name.toLowerCase();
  pokemonInfo = await getPokemonByName(name);
  if (!pokemonInfo) {
    return res.json;
  } else {
    return res.json(pokemonInfo);
  }
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pokemonInfo = await getPokemonById(id);
    if (!pokemonInfo) return res.json({ info: "No se encontro el pokemon" });
    else {
      res.json(pokemonInfo);
    }} catch (e) {
      console.log('este es el error',e)
      res.json({ info: "No se encontro el pokemon" });
  }
});
router.post("/", async (req, res) => {
  const {   name,type,img,hp,attack,defense,sp_attack,
            sp_defense,speed,height,weight,
  } = req.body;
  if (
    isNaN(hp) || isNaN(attack) || isNaN(defense) ||
    isNaN(sp_attack) || isNaN(sp_defense) || isNaN(speed) ||
    isNaN(height) || isNaN(weight)
   )
    return res.json({ info: "Alguno de los argumentos no es un numero" });

  if (!name) return res.json({ info: "El nombre es obligatorio" });
  if(!type) return res.json({ info: "El tipo es obligatorio" }); 

  const newPokemon = await createPokemon(name,type,img,hp,attack,defense,sp_attack,
    sp_defense,speed,height,weight)

    console.log('newPokemon',newPokemon)

  res.json({ msg: newPokemon });
  
});

module.exports = router;
