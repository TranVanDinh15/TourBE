const scheduleService = require('../service/scheduleService');
class UserController {
    async createScheduleController(req, res) {
        try {
            const result = await scheduleService.createSchedule(req.body, req.query);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async getAllScheduleTourController(req, res) {
        try {
            const result = await scheduleService.getAllScheduleTourService(req.query);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new UserController();
