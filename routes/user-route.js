const { Router } = require('express');
const { Login } = require('../controllers/user-controller');

const router = Router();

router.get('/', Login);


// Exportar Modulo Router
module.exports = router;