const express = require ('express');
const router = express.Router();

const mathController = require ('../controllers/mathController')

router.get('/', mathController.report);

module.exports = router;