const db = require('../../models/index');
const abroadController = require('../controller/AbroadController');
function abroadTourRouter(app) {
    app.post('/api/createAbroadTour', abroadController.createAbroadController);
    app.get('/api/getAllAbroadTour', abroadController.getAllAboadController);
    app.get('/api/getAbroadTour', abroadController.getAboadController);
}
module.exports = abroadTourRouter;
