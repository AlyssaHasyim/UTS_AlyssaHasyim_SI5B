var express = require('express');
var router = express.Router();

const PariwisataController = require("..controller/pariwisata");

//create
router.post('/', PariwisataController.createPariwisata);



module.exports = router;