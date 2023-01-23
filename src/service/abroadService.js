const db = require('../../models/index');
const createAbroadTour = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data);
            if (data) {
                await db.TRAVELABROADS.create({
                    matournuocngoai: data.matournuocngoai,
                    tencactournuocngoai: data.tencactournuocngoai,
                });
                resolve({
                    errCode: 0,
                    message: 'Tạo thành công !!',
                });
            } else {
                resolve({
                    errCode: -1,
                    message: 'Vui lòng điền thông tin !!',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};
const getAllAbroadTour = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.TRAVELABROADS.findAll({
                // attributes: ['foo', 'bar']
                raw: true,
            });
            resolve({
                errCode: 0,
                abroadTour: result,
            });
        } catch (error) {
            reject(error);
        }
    });
};
const getAbroadTourService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (query) {
                const result = await db.TRAVELABROADS.findOne({
                    where: {
                        matournuocngoai: query.matournuocngoai,
                    },
                });
                if (result) {
                    resolve({
                        errCode: 0,
                        data: result,
                    });
                } else {
                    resolve({
                        errCode: -1,
                        message: 'Tour không tồn tại !!',
                    });
                }
            }
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    createAbroadTour,
    getAllAbroadTour,
    getAbroadTourService,
};
