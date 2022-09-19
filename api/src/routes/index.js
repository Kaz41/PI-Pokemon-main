const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonMiddle = require('../middlewares/pokemons.js')
const typeMiddle = require('../middlewares/types.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokemonMiddle);
router.use('/types', typeMiddle);

module.exports = router;
