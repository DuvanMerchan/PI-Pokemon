const axios = require("axios");
const { Router } = require('express');
const { Type } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.get('/', async (req, res) =>{
    const api = await axios.get('https://pokeapi.co/api/v2/type')
    const types = await api.data.results   
    for ( t of types) { 
        const existe = await Type.findOne({where:{name: t.name}})
        if (!existe){ 
        await Type.create(
            {name: t.name},
            {id: t.url.id})}
        else{
            return res.json(await Type.findAll())
        }
    }
     res.json(await Type.findAll()
     )
})



module.exports = router;