console.log('Hello World!');


/**
 * 复制单行内容到粘贴板
 * content : 需要复制的内容
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */
function copy(content) {
    var aux = document.createElement("input");
    aux.setAttribute("value", rmspace(content.innerHTML));
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    content.style.setProperty('animation', 'ani-bian 0.5s');
    setTimeout(function(){
        // alert("异步");
        content.style.setProperty('border', '2px solid green');
    },500);
}

function rmspace(str) {
    var reg = /[\t\r\f\n\s]*/g;
    if (typeof str === 'string') {
        var trimStr = str.replace(reg,'');
    }
    return trimStr;
}
function goto(where){
    console.log(where);
    if(window.location.href.match("zxionf.github.io/zxionf"))
        window.location.href = "/zxionf/"+where;
    else
        window.location.href = where;
}