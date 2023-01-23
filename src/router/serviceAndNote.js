const db = require('../../models/index');
const sanController = require('../controller/serviceAndNoteController');
function serviceAndNoteRouter(app) {
    app.post('/api/createSan', sanController.createSancontroller);
    app.get('/api/getAllSan', sanController.getAllSanController);
}
module.exports = serviceAndNoteRouter;
