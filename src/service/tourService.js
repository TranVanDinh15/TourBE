const db = require('../../models/index');
const createTour = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data.matournuocngoai);
            const abroadTour = await db.TRAVELABROADS.findOne({
                raw: true,
                where: {
                    matournuocngoai: data.matournuocngoai,
                },
            });
            console.log(abroadTour);
            if (abroadTour) {
                const result = await db.TOURS.create({
                    tentour: data.tentour,
                    songayditour: data.songayditour,
                    backGround: data.backGround,
                    hinhanh1: data.hinhanh1,
                    chiPhi: data.chiPhi,
                    video: data.video,
                    gioithieutour: data.gioithieutour,
                    maloaitour: data.maloaitour,
                    maloaimien: data.maloaimien,
                    matournuocngoai: abroadTour.tencactournuocngoai,
                    diemxuatphat: data.diemxuatphat,
                });
                console.log(result);
                resolve({
                    errCode: 0,
                    message: 'Tạo Tour Thành Công !!',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};
const getAllUser = (query) => {
    return new Promise(async (resovle, reject) => {
        try {
            const page = query.page;
            const result = await db.TOURS.findAll({
                raw: true,
                limit: 4,
                offset: (page - 1) * 4,
                subQuery: false,
            });
            resovle({
                errCode: 0,
                data: result,
            });
        } catch (error) {
            reject(error);
        }
    });
};
const getDetailTour = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (query) {
                console.log(query);
                const result = await db.TOURS.findOne({
                    where: {
                        maloaimien: '/' + query.maloaimien,
                    },
                    raw: true,
                });
                if (result) {
                    resolve({
                        errCode: 0,
                        tour: result,
                    });
                } else {
                    resolve({
                        errCode: 1,
                        message: 'Tour không tồn tại!!',
                    });
                }
            }
        } catch (error) {}
    });
};
const getTourPlaceService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.TOURS.findAll({
                raw: true,
                where: {
                    diemxuatphat: query.diemxuatphat,
                },
            });
            if (result) {
                resolve({
                    errCode: 0,
                    tour: result,
                });
            } else {
                resolve({
                    errCode: 1,
                    message: 'Không tìm thấy Tour!!',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    createTour,
    getAllUser,
    getDetailTour,
    getTourPlaceService,
};
