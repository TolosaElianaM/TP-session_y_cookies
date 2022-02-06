const express = require('express');
const router = express.Router();
const {index, storage, user,destroy} = require('../controller/mainController')
const validate = require('../middlewares/validate')

/* GET home page. */
router.get('/', index);
router.post('/', validate, storage)
router.get('/user', user);
router.get('/destroy',destroy);
module.exports = router;
