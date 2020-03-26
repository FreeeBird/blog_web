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
        url: URL + '/info',
        method: 'get',
    })
}
