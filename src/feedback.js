
let feedback = document.querySelector('.header-menu__item:nth-child(5) > button');
let feedbackSidebar = document.querySelector('.sidebar-footer__item:nth-child(2) > button');
let sidebarFeedback = document.querySelector('.sidebar-feedback');
let buttonCloseSidebarFeedback = document.querySelector('.button-close');
let sidebarFeedbackBlur = document.querySelector('.sidebar-feedback__blur');


console.log(feedbackSidebar);


feedback.onclick = function () {

    if (!sidebarFeedback.classList.contains('openned')) {        
        sidebarFeedback.classList.add('openned');

        console.log('1',sidebarFeedback); 
    }
}

feedbackSidebar.onclick = function () {

    if (!sidebarFeedback.classList.contains('openned')) {        
        sidebarFeedback.classList.add('openned');

        console.log('1',sidebarFeedback); 
    }
}

buttonCloseSidebarFeedback.onclick = function () {

    if (sidebarFeedback.classList.contains('openned')) {        
        sidebarFeedback.classList.remove('openned');

        console.log('2',sidebarFeedback); 
    } 
}

sidebarFeedbackBlur.onclick = function () {

    if (sidebarFeedback.classList.contains('openned')) {        
        sidebarFeedback.classList.remove('openned');

        console.log('3',sidebarFeedback); 
    } 
}








console.log();












