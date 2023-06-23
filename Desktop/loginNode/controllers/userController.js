const user = require("../models/user");

const findAll = (req, res, next) => {
    user
        .find()
        .then((response) => {
            res.status(200).json({
                response,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: `An error has occurred ${error}`,
            });
        });
};

const findUser = (req, res, next) => {
    let userID = req.body.userID;
    user
        .findById(userID)
        .then((response) => {
            res.status(200).json({
                response,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: `An error occurred ${error}`,
            });
        });
};

const addUser = (req, res, next) => {
    let newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        adresse: req.body.adresse,
        age: req.body.age,
        genre: req.body.genre,
        role: req.body.roleid
    });
    newUser
        .save()
        .then((response) => {
            res.status(201).json({
                message: 'User added successfully',
            });
        })
        .catch((error) => {
            res.status(409).json({
                message: `Error occurred ${error}`,
            });
        });
};

const editUser = (req, res, next) => {
    let userId = req.body.userID;
    let userData = {
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
        adresse: req.body.adresse,
        age: req.body.age,
        phone: req.body.phone,
        genre: req.body.genre,
    };
    user
        .findByIdAndUpdate(userId, { $set: userData })
        .then((response) => {
            res.status(200).json({
                message: 'Updated successfully',
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: `Error occurred ${error}`,
            });
        });
};

const deleteUser = (req, res, next) => {
    let userID = req.body.userID;
    user
        .findOneAndRemove(userID)
        .then((response) => {
            res.status(200).json({
                message: 'Deleted successfully',
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: `An error occurred ${error}`,
            });
        });
};

module.exports = {
    findAll,
    findUser,
    addUser,
    deleteUser,
    editUser,
};
