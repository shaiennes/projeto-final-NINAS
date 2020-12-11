const express = require('express');
const router = express.Router();
const ninasController = require('../controllers/ninasController');

router.get('/', ninasController.getNinas);
router.get('/categoria/:nome', ninasController.getCategoriaNinas)
router.post('/add', ninasController.addNinas)
router.patch('/atualizar/:id', ninasController.updateNinas)
router.delete('/deletar/:id', ninasController.deleteByIdNinas)


module.exports = router;