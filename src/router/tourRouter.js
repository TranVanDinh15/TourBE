const db = require('../../models/index');
const tourController = require('../controller/tourController');
function tourRouter(app) {
    app.post('/api/createTour', tourController.createTourController);
    app.get('/api/getAllTour', tourController.getAllTourController);
    app.get('/api/getDetailTour', tourController.getDetailTourController);
    app.get('/api/getTourPlace', tourController.getTourPlaceController);
}
module.exports = tourRouter;
