const express = require('express');
const crudRouter = require('./crud.router');
const router = express.Router();

router.use('/users', crudRouter)


module.exports = router;