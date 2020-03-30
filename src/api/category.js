import request from '@/plugins/http'

const URL = '/category'

/**
 * 获取所有分类
 * @returns {AxiosPromise}
 */
export function getAllCategory() {
    return request({
        url: URL,
        method: 'get',
    })
}

/**
 * 获取所含文章数量最多的num个分类
 * @param num
 * @returns {AxiosPromise}
 */
export function getTop(num) {
    return request({
        url: URL,
        method: 'post',
        data:{
            num
        }
    })
}
