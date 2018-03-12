function Ele(id) {
    this.element = document.getElementById(id)
}

Ele.prototype.html = function(ctn) {
    var ele = this.element
    if(ctn) {
        ele.innerHTML = ctn
        return this  // 链式调用
    } else {
        return ele.innerHTML
    }
}

Ele.prototype.on = function(type,fn) {
    var ele = this.element
    ele.addEventListener(type,fn)
    return this
}

var ele =new Ele('w_content')

ele.html('hello chinabyte')
ele.on('click',function(){
    alert('checked')
})

// 链式调用
ele.html('first').on('click',function(){
    alert(1)
})
