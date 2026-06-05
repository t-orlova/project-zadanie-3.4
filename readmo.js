
let readmore = document.querySelector('.read-more');
let spantwo = document.querySelector('.read-more__span');
let texts = document.querySelectorAll('.section-about__text');




readmore.onclick = function () {

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











/*  2 вариант условия c toggle

if (item.classList.contains('openned')) {        
        item.classList.toggle('openned');
        span.textContent = 'Показать все';

        console.log(item);         

    } else {
        item.classList.toggle('openned');
        span.textContent = 'Спрятать обратно';

        console.log(item);        
    }
*/


/*   2 вариант цикла с i (от 6 до 8)

readmore.onclick = function () {

    for (let i = 6; i < items.length; i++) {
        
        
        if (items[i].classList.contains('openned')) {        
            items[i].classList.remove('openned');
            span.textContent = 'Показать все';

            console.log(items);                

        } else {
            items[i].classList.add('openned');
            span.textContent = 'Скрыть';

            console.log(items);        
        }

    }    


    // console.log();
}
*/


