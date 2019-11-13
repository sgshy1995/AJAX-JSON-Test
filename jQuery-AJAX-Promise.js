window.jQuery = () => {
    let nodes = {}
    return nodes
}
window.$ = window.jQuery

//Promise的原理
window.Promise = function () {
    // ...
    return {
        then: function () { }
    }
}

window.jQuery.ajax = function ({ url, method, body }) { //ESS6解构赋值
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        request.open(method, url)  //配置request
        request.send(body)
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 300) {
                    reject.call(undefined, request)
                }
            }
        }
    })
}

button.addEventListener('click', () => {
    window.jQuery.ajax({
        url: '/ajax',
        method: 'POST',
        body: 'Set the fourth section.',
    }).then(
        () => { }, //success resolve
        () => { } //fail reject
    )
})