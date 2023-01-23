const db = require('../../models/index');
const userController = require('../controller/userController');
function userRouter(app) {
    app.post('/api/createUser', userController.createUserController);
    app.get('/api/getAllUser', userController.getAllUser);
    app.post('/api/Login', userController.loginUser);
    app.post('/api/Logout', userController.logoutUser);
}
module.exports = userRouter;
