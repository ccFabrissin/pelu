const express = require ('express');
const router = express.Router();

const mathController = require ('../controllers/mathController')

router.get('/', mathController.report);
router.post("/fechas", mathController.filtrado)

module.exports = router;