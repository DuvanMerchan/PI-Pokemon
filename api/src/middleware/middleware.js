const axios = require("axios");
const { Pokemon, Type } = require("../db.js");
const API_URL = "https://pokeapi.co/api/v2/pokemon";
const limit = 40

const getAllPokemon = async () => {
  const api = await axios.get(`${API_URL}?limit=${limit}`);
  const apiData = await api.data.results;

  const dbData = await Pokemon.findAll({ include: Type });
  let allPokeData = [];
  let pokemonApiInfo = [];
  let pokeApiData = [...apiData];
  let pokemonDBInfo = [];
  let pokeDbData = [...dbData];
  if (!pokeApiData.length) return pokemonApiInfo;
  else {
    await Promise.allSettled(
      pokeApiData.map(async (poke) => {
        let pokemon = await axios.get(poke.url);
        let dataPokemon = await pokemon.data;
        pokemonApiInfo.push({
          id: dataPokemon.id,
          name: dataPokemon.name,
          attack: dataPokemon.stats[1].base_stat,
          type: dataPokemon.types?.map((t) => t.type.name),
          img: dataPokemon.sprites.versions["generation-v"]["black-white"]
            .animated.front_default,
        });
      })
    );
  }
  allPokeData = allPokeData.concat(pokemonApiInfo);
  //console.log('pokeDbData',pokeDbData)
  console.log('allPokeData1',allPokeData.length)
  if (!pokeDbData.length) {
    return allPokeData;
  } else {
    await Promise.allSettled(
      pokeDbData.map(async (poke) => {
       // console.log('poke',poke.dataValues)
        pokemonDBInfo.push({
          id: poke.dataValues.id,
          name: poke.dataValues.name,
          attack: poke.dataValues.attack,
          type: poke.dataValues.types?.map((t) => t.dataValues.name),
          img: poke.dataValues.img,
        });
      })
    );
    allPokeData = allPokeData.concat(pokemonDBInfo);
    console.log('pokemonDBInfo',pokemonDBInfo)
    console.log('allPokeData2',allPokeData.length)
    return allPokeData;
  }
};

const getPokemonById = async (id) => {
  if(!id){
    return 'not found'
  }else{
    const db = await Pokemon.findByPk(id, { include: Type });
  if (!db) {

      const api = await axios.get(`${API_URL}/${id}`);
      const pokeApiData = api.data;

      const pokemonByID = {
        id: pokeApiData.id,
        name: pokeApiData.name,
        type: pokeApiData.types?.map((t) => t.type.name),
        img: pokeApiData.sprites.versions["generation-v"]["black-white"]
          .animated.front_default,
        hp: pokeApiData.stats[0].base_stat,
        attack: pokeApiData.stats[1].base_stat,
        defense: pokeApiData.stats[2].base_stat,
        sp_attack: pokeApiData.stats[3].base_stat,
        sp_defense: pokeApiData.stats[4].base_stat,
        speed: pokeApiData.stats[5].base_stat,
        height: pokeApiData.height,
        weight: pokeApiData.weight,
      };
      return pokemonByID;
    
  } else {
    const pokemonDb = {
      id: db.id,
      name: db.name,
      type: db.types?.map((t) => t.name),
      img: db.img,
      hp: db.hp,
      attack: db.attack,
      defense: db.defense,
      sp_attack: db.sp_attack,
      sp_defense: db.sp_defense,
      speed: db.speed,
      height: db.height,
      weight: db.weight,
    };

    return pokemonDb;
  }
  }
};

const getPokemonByName = async (name) => {
  const db = await Pokemon.findOne({
    where: {
      name: name,
    },
    include: Type,
  });
  if (!db) {
    const api = await axios.get(`${API_URL}/${name}`);
    const pokeApiData = api.data;
     const pokemonByName = {
      id: pokeApiData.id,
      name: pokeApiData.name,
      type: pokeApiData.types?.map((t) => t.type.name),
      img: pokeApiData.sprites.versions["generation-v"]["black-white"]
        .animated.front_default,
     };
    return pokemonByName;
  } else {
    const pokemonDb = {
      id: db.id,
      id: db.id,
      name: db.name,
      type: db.types?.map((t) => t.name),
      img: db.img,
    };
    return pokemonDb;
  }
};

const createPokemon = async (
  name,
  type,
  img,
  hp,
  attack,
  defense,
  sp_attack,
  sp_defense,
  speed,
  height,
  weight
) => {
  const dbFind = await Pokemon.findOne({ where: { name: name } });
    const dbFindAll = await Pokemon.findAll();
  const api = await axios.get(`${API_URL}/?limit=${limit}`);
  const pokeApiData = api.data.results;

  let idPoke = pokeApiData.length + dbFindAll.length +1;

  const findPokemon = pokeApiData.find((p) => p.name === name);
  if (dbFind || findPokemon) return ("El pokemon ya existe");
  else{
  const newPokemon = await Pokemon.create({
    id: idPoke,
    name: name.toLowerCase(),
    img: img,
    hp: Number(hp),
    attack: Number(attack),
    defense: Number(defense),
    sp_attack: Number(sp_attack),
    sp_defense: Number(sp_defense),
    speed: Number(speed),
    height: Number(height),
    weight: Number(weight),
  });
  console.log('tipos2', type)
  const db_temp = await Type.findAll({
    where: { name: type },
  });
  console.log('tipos3', db_temp)
  await newPokemon.addType(db_temp);
  return (`${newPokemon.name} fue creado`);
};}

module.exports = {
  getAllPokemon,
  getPokemonById,
  getPokemonByName,
  createPokemon,
};