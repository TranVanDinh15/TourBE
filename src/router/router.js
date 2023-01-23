const userRouter = require('./userRouter');
const abroadRouter = require('./abroadTourRouter');
const tourRouter = require('./tourRouter');
const scheduleRouter = require('./schedule');
const serviceAndNoteRouter = require('./serviceAndNote');
function router(app) {
    userRouter(app);
    abroadRouter(app);
    tourRouter(app);
    scheduleRouter(app);
    serviceAndNoteRouter(app);
}
module.exports = router;
