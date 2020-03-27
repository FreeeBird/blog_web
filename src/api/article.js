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

