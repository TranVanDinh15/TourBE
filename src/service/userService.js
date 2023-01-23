const db = require('../../models/index');
let jwt = require('jsonwebtoken');
const createJWT = require('../middlewave/jwtConfig');
const bcrypt = require('bcrypt');
let salt = bcrypt.genSaltSync(10);
const isEmail = async (email) => {
    const findEmailDb = await db.USERS.findOne({ where: { email: email } });
    if (findEmailDb) {
        return true;
    } else {
        return false;
    }
};
const hashUserPassword = async (password) => {
    return new Promise((resolve, rejct) => {
        try {
            const hash = bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (error) {
            rejct(error);
        }
    });
};
const createUser = (data) => {
    return new Promise(async (resovle, reject) => {
        try {
            const email = await isEmail(data.email);
            console.log(email);
            if (email) {
                resovle({
                    errCode: -1,
                    message: 'Email đã tồn tại trong hệ thống !!',
                });
            }
            if (!email) {
                const password = await hashUserPassword(data.password);
                const result = await db.USERS.create({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: password,
                    gender: data.gender,
                    date: data.date,
                    address: data.address,
                    role: data.role,
                });
                resovle({
                    errCode: 0,
                    message: 'create user success!!',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};
const getALlUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.USERS.findAll({
                // attributes: ['foo', 'bar']
                raw: true,
            });
            const enCode = createJWT.createJwt({ result });
            console.log(enCode);
            resolve(enCode);
        } catch (error) {
            reject(error);
        }
    });
};
const loginService = (token) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = null;
            jwt.verify(token.enCode, process.env.KEY, function (err, decoded) {
                if (err) {
                    console.log(err);
                    return data;
                }
                console.log(decoded);
                data = decoded;
            });
            if (data) {
                const findMail = await db.USERS.findOne({
                    where: {
                        email: data.email,
                    },
                    raw: true,
                });
                console.log(findMail);
                if (!findMail) {
                    resolve({
                        errCode: -1,
                        message: 'Email không tồn tại trong hệ thống !!',
                    });
                } else {
                    const checkPassword = await bcrypt.compare(data.password, findMail.password);
                    console.log(checkPassword);
                    if (!checkPassword) {
                        resolve({
                            errCode: -1,
                            message: 'Mật khẩu không chính xác !!',
                        });
                    }
                    const token = createJWT.createJwt({
                        errCode: 0,
                        message: 'Đăng nhập thành công !!',
                        user: findMail,
                        status: 1,
                    });
                    resolve(token);
                }
            }
        } catch (error) {
            reject(error);
        }
    });
};
const logoutService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve({
                errCode: 0,
                message: 'Đăng xuất thành công',
                user: null,
                status: 0,
            });
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    createUser,
    getALlUser,
    loginService,
    logoutService,
};
