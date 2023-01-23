let jwt = require('jsonwebtoken');
const createJwt = (payload) => {
    let token = null;
    try {
        token = jwt.sign(payload, process.env.KEY);
        console.log(token);
    } catch (error) {
        console.log(error);
    }
    return token;
};
const verifyJwt = async (token) => {
    let data = null;
    await jwt.verify(token, process.env.KEY, function (err, decoded) {
        if (err) {
            console.log(err);
            return data;
        }
        console.log(decoded);
        return decoded;
    });
};
module.exports = {
    createJwt,
    verifyJwt,
};
