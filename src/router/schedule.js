const db = require('../../models/index');
const scheduleController = require('../controller/scheduleController');
function schedule(app) {
    app.post('/api/createSchedule', scheduleController.createScheduleController);
    app.get('/api/getAllScheduleTour', scheduleController.getAllScheduleTourController);
}
module.exports = schedule;
