const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.post('/', mainController.new);

router.get('/edit/:id', mainController.detail);
router.post('/edit/:id/', mainController.edit);

router.delete('/delete/:id', mainController.delete);

module.exports = router;