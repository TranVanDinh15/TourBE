const e = require('express');
const db = require('../../models/index');
const createSchedule = (data, query) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data);
            if (data && query) {
                const result = await db.SCHEDULES.create({
                    maloaitour: query.maloaitour,
                    manoidung: data.manoidung,
                    lichtrinhtheongay: data.lichtrinhtheongay,
                    noidung: data.noidung,
                });
                resolve({
                    errCode: 0,
                    message: 'Tạo thành công !!',
                });
            } else {
                resolve({
                    errCode: -1,
                    message: 'Vui lòng nhập thông tin !!',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};
const getAllScheduleTourService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.SCHEDULES.findAll({
                raw: true,
                where: {
                    maloaitour: query.maloaitour,
                },
            });
            console.log(result);
            if (result) {
                resolve({
                    errCode: 0,
                    lichtrinh: result,
                });
            } else {
                resolve({
                    errCode: 1,
                    message: 'Lịch trình không tồn tại !!',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    createSchedule,
    getAllScheduleTourService,
};
