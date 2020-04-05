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

export function getComments(id,num,size) {
    return request({
        url:URL+'/'+ id+'/comment',
        method:'GET',
        params:{
            pageNum: num,
            pageSize:size
        }

    })
}

export function postComment(aid,nickname,email,content) {
    return request({
        url:URL+'/'+ aid+'/comment',
        method:'POST',
        data:{
            nickname: nickname,
            email: email,
            content: content
        }

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


export function getArchiveMonths() {
    return request({
        url: URL + '/archive',
        method: 'GET',
    })
}

export function getArticleByMonth(year,month,pageNum,pageSize) {
    return request({
        url: URL + '/archive/' + year + '/' + month,
        method: 'GET',
        params:{
            pageNum: pageNum,
            pageSize: pageSize
        }
    })
}


export function searchArticle(keyword,num,size) {
    return request({
        url: URL + '/search',
        method: 'GET',
        params:{
            keyword: keyword,
            pageNum: num,
            pageSize: size
        }
    })
}
