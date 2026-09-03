
let readmore = document.querySelector('#readmore');
let span = document.querySelector('#span');
let items = document.querySelectorAll('#brand');




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



console.log();






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




/*  вариант сразу на 2 кнопки, но он не совсем правильно работает, сразу обе кнопки открываются

let readmore = document.querySelector('.read-more');
let readmores = document.querySelectorAll('.read-more');
let spans = document.querySelectorAll('.read-more__span');
let items = document.querySelectorAll('.brand-section__item');



for (let readmore of readmores) {

readmore.onclick = function () {

    for (let item of items) {        
        
        if (item.classList.contains('openned')) {        
            item.classList.remove('openned');

            for (let span of spans) {
            span.textContent = 'Показать все';
            }

            console.log();                

        } else {
            item.classList.add('openned');
            
            for (let span of spans) {
            span.textContent = 'Скрыть';
            }

            console.log();        
        }
    }    
}
    
}
*/



