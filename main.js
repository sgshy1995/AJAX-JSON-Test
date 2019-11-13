button.addEventListener('click', () => {
    let request = new XMLHttpRequest()
    request.open('GET', '/ajax')  //配置request
    request.send()
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('响应完毕')
            if (request.status >= 200 && request.status < 300) {
                console.log('请求成功')
                let response = request.responseText //获取符合JSON语法的相应内容文本
                let jsobj = window.JSON.parse(response)  //转换为对应的JS的值
                console.log(jsobj)
            } else if (request.status >= 300) {
                console.log('请求失败')
            }
        }
    }
})