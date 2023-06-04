const catchError = require('../utils/catchError');
const crud = require('../models/crud');

const getAll = catchError(async (req, res) => {
    const user = await crud.findAll();
    return res.json(user);
});

const create = catchError(async (req, res) => {
    const myCrud = req.body;
    const createUser = await crud.create(myCrud);
    return res.status(201).json(createUser);
});

const getOneUser = catchError(async (req, res) => {
    const { id } = req.params
    const user = await crud.findByPk(id)
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.json(user);
});

const removeUser = catchError(async (req, res) => {
    const { id } = req.params;
    const deleteCrud = await crud.destroy({ where: { id } });
    if (deleteCrud === 0) return res.status(404).json({ message: 'User does not exist' });
    return res.sendStatus(204);
});

const updateUser = catchError(async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    const updateCrud = await crud.update(user, { where: { id }, returning: true });
    if (updateCrud[0] === 0) return res.status(404).json({ message: 'User does not exist' });
    return res.json(updateCrud[1][0]);
});

module.exports = {
    getAll,
    create,
    getOneUser,
    removeUser,
    updateUser,
};