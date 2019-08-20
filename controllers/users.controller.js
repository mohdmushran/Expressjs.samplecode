var models = require('../models');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.js')[env];

/**
 * Function to register user on website
 * @createdBy: Mushran
 */
exports.registration = function (req, res) {
    console.log(req.body);
    var salt = bcrypt.genSaltSync(saltRounds = 10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    models.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user == null) {
            models.User.create({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            }).then(jane => {
                console.log("Jane's auto-generated ID:", jane.id);
                res.json({
                    status: 'success',
                    message: 'You have been successfully registered, please login.'
                });
            }).catch(error => {
                res.json({
                    status: 'error',
                    message: 'Something went wrong, please try again!'
                });
            });
        } else {
            res.json({
                status: 'error',
                message: 'Email address already exist!'
            });
        }
    });

}


/**
 * Function to login user into the application
 * @createdBy: Mushran
 */
exports.login = function (req, res) {
    models.User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (user != null) {
                bcrypt.compare(req.body.password, user.password).then(function (result) {
                    if (result == true) {
                        var token = jwt.sign({ id: user.id, email: user.email }, config.secret_key);
                        var userData = { id: user.id, email: user.email, name: user.name, token: token };
                        res.json({
                            status: 'success',
                            user: userData
                        });
                    } else {
                        res.json({
                            status: 'invalid',
                            message: 'Invalid credentials!'
                        });
                    }
                });

            } else {
                res.json({
                    status: 'invalid',
                    message: 'Invalid credentials!'
                });
            }
        });
}