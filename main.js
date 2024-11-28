console.log('Hello World!');

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// 高亮偏移
// const highlightgrid = document.querySelector('.highlightgrid');
const body = document.querySelector('body');
const highlightcards = document.querySelectorAll('.highlightcard');

body.onmousemove = (e) => {
    for (const card of highlightcards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - card.offsetWidth / 2;
        const y = e.clientY - rect.top - card.offsetHeight / 2;
        card.style.setProperty('--x', x + "px");
        card.style.setProperty('--y', `${y}px`);
        // console.log(card.offsetWidth);
    }
    // console.log(e.clientX);
}


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