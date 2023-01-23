const tourSevice = require('../service/tourService');
class TourController {
    async createTourController(req, res) {
        try {
            const result = await tourSevice.createTour(req.body);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async getAllTourController(req, res) {
        try {
            const result = await tourSevice.getAllUser(req.query, req.params.limit);
            console.log(req.params);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async getDetailTourController(req, res) {
        try {
            const result = await tourSevice.getDetailTour(req.query);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async getTourPlaceController(req, res) {
        try {
            const result = await tourSevice.getTourPlaceService(req.query);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new TourController();
