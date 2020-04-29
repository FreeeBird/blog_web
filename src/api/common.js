import request from "@/plugins/http";

const URL = ''

export function blogger() {
    return request({
        url: URL + '/blogger',
        method: 'get',
    })
}

export function getBlogInfo() {
    return request({
        url: URL + '/blogInfo',
        method: 'get',
    })
}

export function getLinks() {
    return request({
        url: URL + '/link',
        method: 'get',
    })
}

// export function getStatistics() {
//     return request({
//         url: '/statistics',
//         method: 'get'
//     })
// }

export function leaveMessage(nickname,email,content) {
    return request({
        url: '/message',
        method: 'POST',
        data:{
            nickname: nickname,
            email: email,
            content: content
        }
    })
}
