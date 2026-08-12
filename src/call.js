
let call = document.querySelector('.header-menu__item:nth-child(4) > button');
let callSidebar = document.querySelector('.sidebar-footer__item:nth-child(1) > button');
let sidebarCall = document.querySelector('.sidebar-call');
let buttonCloseSidebarCall = document.querySelector('.sidebar-call .button-close');
let sidebarCallBlur = document.querySelector('.sidebar-call__blur');



call.addEventListener('click', function () {

    if (!sidebarCall.classList.contains('openned')) {        
        sidebarCall.classList.add('openned');

        console.log('1',sidebarCall); 
    }
});

callSidebar.addEventListener('click', function () {

    if (!sidebarCall.classList.contains('openned')) {        
        sidebarCall.classList.add('openned');

        console.log('1',sidebarCall); 
    }
});

buttonCloseSidebarCall.onclick = function () {

    if (sidebarCall.classList.contains('openned')) {        
        sidebarCall.classList.remove('openned');

        console.log('2',sidebarCall); 
    } 
};

sidebarCallBlur.onclick = function () {

    if (sidebarCall.classList.contains('openned')) {        
        sidebarCall.classList.remove('openned');

        console.log('3',sidebarCall); 
    } 
};






console.log();


















