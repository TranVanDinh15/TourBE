const sanSevice = require('../service/SanService');
class TourController {
    async createSancontroller(req, res) {
        try {
            const result = await sanSevice.createSanService(req.body);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async getAllSanController(req, res) {
        try {
            const result = await sanSevice.getAllSanService(req.query);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new TourController();
