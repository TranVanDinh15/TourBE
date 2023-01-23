const userSevice = require('../service/userService');
class UserController {
    async createUserController(req, res) {
        try {
            const result = await userSevice.createUser(req.body);
            return res.status(200).json({
                ...result,
            });
        } catch (error) {
            console.log(error);
        }
    }
    async getAllUser(req, res) {
        try {
            const result = await userSevice.getALlUser();
            return res.status(200).json({ enCode: result });
        } catch (error) {
            console.log(error);
        }
    }
    async loginUser(req, res) {
        try {
            const result = await userSevice.loginService(req.body);
            return res.status(200).json({ token: result });
        } catch (error) {
            console.log(error);
        }
    }
    async logoutUser(req, res) {
        try {
            const result = await userSevice.logoutService();
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new UserController();
