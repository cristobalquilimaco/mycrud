const { getAll, create, updateUser, removeUser, getOneUser } = require('../controllers/user.controllers')
const express = require('express');

const crudRouter = express.Router();

nombreRouter.route("/")
		.get(getAll)
        .post(create)

        nombreRouter.route("/:id")
		.get(getOneUser)
        .delete(removeUser)
        .put(updateUser)

module.exports = crudRouter;