const express = require('express');
const _ = require('lodash');
const User = require('./model.js');

const router = express.Router();

router.get('/getAllUsers', (req, res) => {
    User.UserModel.find({}, (err, users) => {
        if (err) {
            res.status(400).send(err.message);
        } else {
            if (users) {
                res.status(200).send({
                    users
                });
            }
        }
    });
});

module.exports = router;
