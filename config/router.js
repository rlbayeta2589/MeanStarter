var admin = require('../controllers/admin.js');

module.exports = function (router) {
    /* sample
    router.route('/api/admin')
        .get(admin.find)
        .post(admin.add)
        .put(admin.update)
        .delete(admin.delete);
    */
    
    router.route('*')
        .all(function (req, res) {
            return res.status(404).send({ message: 'Nothing to do here.' });
        });

    return router;
};

