console.log('Hello World!');

function openNav(){
    document.getElementById("myNav").style.height = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.height = "0%";
}

// 高亮偏移
// const highlightgrid = document.querySelector('.highlightgrid');
const body = document.querySelector('body');
const highlightcards = document.querySelectorAll('.highlightcard');

body.onmousemove = (e) => {
    for (const card of highlightcards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - card.offsetWidth /2 ;
        const y = e.clientY - rect.top - card.offsetHeight /2 ;
        card.style.setProperty('--x',x+"px");
        card.style.setProperty('--y',`${y}px`);
        // console.log(card.offsetWidth);
    }
    // console.log(e.clientX);
}