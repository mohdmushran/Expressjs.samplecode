var jwt = require('jsonwebtoken');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.js')[env];

/**
 * Function to check request header authrosation code
 * @createdBy: Mushran
 */
exports.isJwt = function(req,res,next) {
    if (!req.headers.authorization) {
        return res.json({
            status: 'invalid',
            message: 'Your authorization is not valid!'
        });
    }
    var authHeader = req.headers.authorization.split(' ');

    jwt.verify(authHeader[1], config.secret_key, function(err, user) {
        if (user) {
            req.body.user_params = user;
            next();
        } else {
            return res.json({
                status: 'invalid',
                message: 'Your authorization is not valid!'
            });
        }
    });
}