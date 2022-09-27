const { Router } = require("express");
const router = Router();
const {Type} = require("../db.js");
const axios = require('axios');

router.get("", async (req, res) =>{
    let types
    let count = 0;
    try {
        if(await Type.count() > 0) {
            types = await Type.findAll({raw: true})
            res.status(206).json(types)
        } else {
            axios.get('https://pokeapi.co/api/v2/type').then(response =>{
                types = response.data.results.map(tipo => {
                    count++
                    return {
                        id: count,
                        name: tipo.name
                    }
                })
                const objeto = {types: types}
                axios.post('http://localhost:3001/types',objeto)
                res.status(206).json(types)
            })
        }
    } catch (error) {
        res.status(405).json({error: error.message})
    }    
})

router.post("", async (req, res) =>{
    const {types} = req.body 
    let i = 1;

    try {
        for(type of types) {
            type.id = i;
            i++;
        }
        Type.bulkCreate(types)

        res.status(210).json({types})
    } catch (error) {
        res.status(410).json({error: error.message})
    }
})

module.exports = router;
