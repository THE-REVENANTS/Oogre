var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var container = document.querySelector('.slide-shower'); 
let sizeWidth = container.firstElementChild.clientWidth;



let counter = 0 ; 


next.addEventListener('click' , ()=>{ 
    container.style.transition = ".3s ease-in-out"
    counter-- ;  
    container.style.transform = 'translateX('+(sizeWidth * counter ) +'px)'; 
    if (counter <= -4) {
        container.style.transform = 'translateX(0px)'; 
        counter = 0 ;
    } 
});     

prev.addEventListener('click' , ()=>{ 
    container.style.transition = ".3s ease-in-out" ;
    if (counter >= 0) { 
        container.style.transform = 'translateX(-2700px)';  
        counter = -4 ;
    }
    container.style.transform = 'translateX(' +(sizeWidth * counter + sizeWidth) +'px)'  ; 
    counter++ 
});     

// last task : count the children of container ! 
// important one ! |||||||||||||||||||||||||||||
