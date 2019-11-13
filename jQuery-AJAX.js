window.jQuery = () => {
    let nodes = {}
    return nodes
}
window.$ = window.jQuery

window.jQuery.ajax = function ({ url, method, body, sucess, fail }) { //ESS6解构赋值
    let request = new XMLHttpRequest()
    request.open(method, url)  //配置request
    request.send(body)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                sucess.call(undefined, request.responseText)
            } else if (request.status >= 300) {
                fail.call(undefined, request)
            }
        }
    }
}

button.addEventListener('click', () => {
    window.jQuery.ajax({
        url: '/ajax',
        method: 'POST',
        body: 'Set the fourth section.',
        sucess: () => { },
        fail: () => { }
    })
})