import request from '@/plugins/http'

const URL = '/article'

/**
 * 获取所有
 * @returns {AxiosPromise}
 */
export function getAllArticle() {
    return request({
        url: URL,
        method: 'get',
    })
}

/**
 * 获取点击数最多的num篇文章
 * @param num
 * @returns {AxiosPromise}
 */
export function getHitArticles(num) {
    return request({
        url: URL + '/hits',
        method: 'post',
        data:{
            num
        }
    })
}
