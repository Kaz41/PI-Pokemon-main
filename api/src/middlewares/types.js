const { Router } = require("express");
const router = Router();
const {Pokemon, Type} = require("../db.js");
const axios = require('axios');
let DB = false;

router.get("", async (req, res) =>{
    let types
        
    if(!DB) {
        try {
            if(await Type.count() > 0) {
                types = await Type.findAll({raw: true, attributes: ['name']})
                DB = true;
                res.status(205).json(types)
            } else {
                axios.get('https://pokeapi.co/api/v2/type').then(response =>{
                    types = response.data.results.map(tipo => ({
                        name: tipo.name
                    }))
                    res.status(205).json(types)
                })
            }
        } catch (error) {
            res.status(405).json({error: error.message})
        }
    }
})

router.post("", async (req, res) =>{
    let types
        
    if(!DB) {
        try {
            if(await Type.count() > 0) {
                types = await Type.findAll({raw: true, attributes: ['name']})
                DB = true;
                res.status(205).json(types)
            } else {
                axios.get('https://pokeapi.co/api/v2/type').then(response =>{
                    types = response.data.results.map(tipo => ({
                        name: tipo.name
                    }))
                    res.status(205).json(types)
                })
            }
        } catch (error) {
            res.status(405).json({error: error.message})
        }
    }
})

module.exports = router;
