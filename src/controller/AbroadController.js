const AbroadSevice = require('../service/abroadService');
class AbroadController {
    async createAbroadController(req, res) {
        try {
            const result = await AbroadSevice.createAbroadTour(req.body);
            return res.status(200).json({
                ...result,
            });
        } catch (error) {
            console.log(error);
        }
    }
    async getAllAboadController(req, res) {
        try {
            const result = await AbroadSevice.getAllAbroadTour();
            return res.status(200).json({
                ...result,
            });
        } catch (error) {
            console.log(error);
        }
    }
    async getAboadController(req, res) {
        try {
            const result = await AbroadSevice.getAbroadTourService(req.query);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new AbroadController();
