const { Router } = require("express");
const router = Router();
const {Type} = require("../db.js");
const axios = require('axios');

router.get("", async (req, res) =>{
    let types
    try {
        if(await Type.count() > 0) {
            types = await Type.findAll({raw: true, attributes: ['name']})
            res.status(206).json(types)
        } else {
            axios.get('https://pokeapi.co/api/v2/type').then(response =>{
                types = response.data.results.map(tipo => ({
                    name: tipo.name
                }))
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
