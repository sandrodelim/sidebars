
function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

const frame = document.getElementById('myFrame')
let itens = document.querySelectorAll('.dropdown-item');
itens.forEach(item =>{
    item.addEventListener('click', () => {        
        frame.style.height = '800px';       
    } );
}); 


// const frame = document.getElementById('myFrame');
// function reloadFrame(){
//     resizeIframe(frame);
// }

//let itens = document.querySelectorAll('.dropdown-item');

// itens.forEach(item =>{
//     //item.addEventListener('click', event => { event.preventDefault() });
//     item.addEventListener('click', () => {        
//         //alert(frame.title);
//         frame.style.height = frame.contentWindow.document.documentElement.scrollHeight + 'px';       
//     } );
// }); 






// let itens = document.querySelectorAll('.menuItem');
// itens.forEach(item =>{
//     item.addEventListener('click', event => { event.preventDefault() });
//     item.addEventListener('click', () => {
//         alert(item.href);        
//     } );
// }); 

