
let lookmore = document.querySelector('.look-more');
let span = document.querySelector('.look-more__span');
let items = document.querySelectorAll('.brand-section__item');




lookmore.onclick = function () {

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


