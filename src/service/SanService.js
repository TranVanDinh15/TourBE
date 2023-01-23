const db = require('../../models/index');
const createSanService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data) {
                const result = await db.SANS.create({
                    maloaitour: data.maloaitour,
                    masan: data.masan,
                    dichvu: data.dichvu,
                    ghichu: data.ghichu,
                });
                resolve({
                    errCode: 0,
                    message: 'Tạo Thành Công ',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};
const getAllSanService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.SANS.findAll({
                raw: true,
                where: {
                    maloaitour: query.maloaitour,
                },
            });
            if (result) {
                resolve({
                    errCode: 0,
                    data: result,
                });
            } else {
                resolve({
                    errCode: 1,
                    message: 'Tour không tồn tại !!',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    createSanService,
    getAllSanService,
};
