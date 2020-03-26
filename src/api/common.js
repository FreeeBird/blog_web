import request from "@/plugins/http";

const URL = ''

export function blogger() {
    return request({
        url: URL + '/blogger',
        method: 'get',
    })
}
