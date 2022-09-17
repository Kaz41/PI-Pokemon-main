const { Router } = require("express");
const router = Router();
const {Pokemon, Type} = require("../db.js");
const axios = require('axios');

router.get("", async(req, res) => {
    let pokemonsAPI= {};
    let pokemonsDB;
    
    
    try {
        Pokemon.findAll({attributes: ['name'], include: {model: Type, attributes: ['name']}}).then(res =>{
            pokemonsDB = res.map(poke =>({
                name: poke.name,
                types: poke.types.map(tipo => tipo.name)
            }))
        });
    
        for(let i=1; i<=40; i++) {
            pokemonsAPI[i] = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`).then(res => {
                let array = []
                res.data.types.forEach(element => {
                    array.push(element.type.name)
                });
    
                return {
                    name: res.data.name,
                    types: array,
                    sprite: res.data.sprites.front_default
                }
            })
        }
    
        res.status(200).json({pokemon: [...Object.values(pokemonsAPI),...pokemonsDB]})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    /*
    Pokemon.findAll({attributes: ['name'], include: {model: Type, attributes: ['name']}}).then(res =>{
        pokemonsDB = res.map(poke =>({
            name: poke.name,
            types: poke.types.map(tipo => tipo.name)
        }))
    });
    
    axios.get("https://pokeapi.co/api/v2/pokemon").then(async (response) => {
        url = response.data.results.map((url) => ({
            url: url.url
        }))

        let i = 0;
        for(pokemon of url) {
            pokemonsAPI[i] = await axios.get(pokemon.url).then(res => {
                let array = []
                res.data.types.forEach(element => {
                    array.push(element.type.name)
                });

                return {
                    name: res.data.name,
                    types: array,
                    sprite: res.data.sprites.front_default
                }
            })
            delete pokemon.url;
            i++;
        }
        res.status(200).json({pokemon: [...Object.values(pokemonsAPI),...pokemonsDB]})
    })*/
})

router.get("/:idPokemon", async(req, res) => {
    const idPokemon = req.params.idPokemon

    if(idPokemon<=0) {
        res.status(400).json({error: "Error no id"})
    }

    let pokemon;

    try {
        if(idPokemon>39) {
            pokemon = await Pokemon.findByPk(idPokemon, {include: {model: Type, attributes: ['name']}}).then(res =>{
                pokemon = res.map(poke =>({
                    name: poke.name,
                    weight: poke.weight,
                    height: poke.height,
                    hp: poke.hp,
                    attack: poke.attack,
                    defense: poke.attack,
                    speed: poke.speed,
                    types: poke.types.map(tipo => tipo.name)
                }))
            })
        }
        else {
            pokemon= await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`).then(res => {
                let array = []
                res.data.types.forEach(element => {
                    array.push(element.type.name)
                });
        
                return {
                    name: res.data.name,
                    weight: res.data.weight,
                    height: res.data.height,
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    defense: res.data.stats[2].base_stat,
                    speed: res.data.stats[5].base_stat,
                    types: array,
                    sprite: res.data.sprites.front_default

                }
            })
        }
        res.status(201).json(pokemon)        
    } catch (error) {
        res.status(401).json({error: error.message})
    }    
})

module.exports = router;