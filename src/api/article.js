import request from '@/plugins/http'

const URL = '/article'

/**
 * 获取文章
 * @param id
 * @returns {AxiosPromise}
 */
export function getArticleById(id) {
    return request({
        url: URL+'/'+id,
        method:'get'
    })
}

/**
 * 获取所有
 * @returns {AxiosPromise}
 */
export function getAllArticle(num,size) {
    return request({
        url: URL,
        method: 'get',
        params: {
            pageNum:num,
            pageSize:size
        }
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
        method: 'GET',
        params:{
            num
        }
    })
}
export function getNewArticles(num) {
    return request({
        url: URL + '/newest',
        method: 'get',
        params:{
            num
        }
    })
}

export function getArticleByCategory(cid,num,size) {
    return request({
        url: URL+'/category/'+cid,
        method:'get',
        params:{
            pageNum:num,
            pageSize: size
        }
    })
}