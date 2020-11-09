import { reject } from "core-js/fn/promise";

// ES6语法
export default (params) => {
    // 加载中
    uni.showLoading({
        title: '加载中'
    });

    // 请求返回对象
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            success(res) {
                resolve(res);
            },
            fail(err) {
                reject(err);
            },
            complete() {
                uni.hideLoading();
            }
        })
    })
}