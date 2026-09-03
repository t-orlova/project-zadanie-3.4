
let lookmore = document.querySelector('.look-more');
let spantwo = document.querySelector('.look-more__span');
let texts = document.querySelectorAll('.section-about__text');




lookmore.onclick = function () {

    for (let text of texts) {        
        
        if (text.classList.contains('openned')) {        
            text.classList.remove('openned');
            spantwo.textContent = 'Читать далее';

            console.log(text);                

        } else {
            text.classList.add('openned');
            spantwo.textContent = 'Скрыть';

            console.log(text);        
        }
    }    
}



console.log();






/*

readmore.onclick = function () {

    for (let item of items) {        
        
        if (item.classList.contains('openned')) {        
            item.classList.remove('openned');
            span.textContent = 'Показать все';

            console.log(item);                

        } else {
            item.classList.add('openned');
            span.textContent = 'Скрыть';

            console.log(item);        
        }
    }    
}


*/



