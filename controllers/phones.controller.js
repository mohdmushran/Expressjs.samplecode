
var models = require('../models');

/**
 * Function to return phones listing with pagination info
 * @createdBy: Mushran
 */
exports.phoneListing = async function (req, res) {
    var page = req.body.page;
    var itemsPerPage = 5;
    var offset = (page - 1) * itemsPerPage;

    models.MobilePhone.findAndCountAll({ offset: offset, limit: itemsPerPage, where: {user_id: req.body.user_params.id} }).then(phones => {
        return res.json({
            data: {
                data: phones.rows,
                current_page: page,
                per_page: itemsPerPage,
                total: phones.count
            }
        });
    });

}

/**
 * Function to save new phone info
 * @createdBy: Mushran
 */
exports.phoneDetails = function(req,res) {

    models.MobilePhone.create({
        user_id: req.body.user_params.id,
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        description: req.body.description
    }).then(data => {
        res.json({
            status: 'success',
            message: 'You have successfully added'
        });
    })
    .catch(error => {
        res.json({
            status: 'error',
            message: 'Something went wrong'
        });
    });

}

