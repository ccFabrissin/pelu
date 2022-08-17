const express = require ('express');
const router = express.Router();

const mainController = require ('../controllers/mainController')

router.get('/', mainController.index);
router.post('/form1', mainController.form1);
router.post('/form2', mainController.form2);

module.exports = router;