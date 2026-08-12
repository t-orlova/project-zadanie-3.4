
let readmoreThird = document.querySelector('#readmorethree');
let spanThird = document.querySelector('#spanthree');
/*let technicList = document.querySelector('#technicList');
let technics = technicList.children;*/
let technics = document.querySelectorAll('#technic');



readmoreThird.onclick = function () {

    for (let technic of technics) {        
        
        if (technic.classList.contains('openned')) {        
            technic.classList.remove('openned');
            spanThird.textContent = 'Показать все';

            console.log(technic);                

        } else {
            technic.classList.add('openned');
            spanThird.textContent = 'Скрыть';

            console.log(technic);        
        }
    }    
}



console.log(readmoreThird);
console.log(spanThird);
console.log(technicList);
console.log(technics);




/* let technics = technicList.querySelectorAll('.brand-section__item');  */

