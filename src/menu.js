
let menu = document.querySelector('.header-menu__item > button');
let sidebar = document.querySelector('.sidebar');
let buttonCloseMenu = document.querySelector('.sidebar-header__item');
let sidebarBlur = document.querySelector('.sidebar-blur');



menu.onclick = function () {

    if (!sidebar.classList.contains('openned')) {        
        sidebar.classList.add('openned');

        console.log('1',sidebar); 
    }
}

buttonCloseMenu.onclick = function () {

    if (sidebar.classList.contains('openned')) {        
        sidebar.classList.remove('openned');

        console.log('2',sidebar); 
    } 
}

sidebarBlur.onclick = function () {

    if (sidebar.classList.contains('openned')) {        
        sidebar.classList.remove('openned');

        console.log('3',sidebar); 
    } 
}




console.log();











/*  2 варинат - срабатывает при другом варианте nth-child(4)

let menu = document.querySelector('.header-menu__item:nth-child(4) > button');

menu.onclick = function () {

    sidebar.classList.toggle('openned');    
    

}

*/



















