//portfolio
var list = document.querySelectorAll('.list') ; 
var itemboxes = document.querySelectorAll('.item-box') ;
var modal = document.getElementById('img-modal') ;
var theX = document.getElementById('the-X') ;
var images = document.querySelectorAll('.item-box img') ;
var modalImage = document.getElementById('modal-img') ;

images.forEach( e => {
    e.onclick = function () {
    var attrib = e.getAttribute("src");
    modalImage.setAttribute("src" , attrib);
    } 
});


theX.onclick = function () {
    modal.style.display = "none" ;
}
itemboxes.forEach( e => {
    e.onclick = function () {
        modal.style.display = "flex" ;
    }
});



for (let i = 0; i < list.length; i++) {
    
    list[i].addEventListener('click' , function () {
        for (let j = 0; j < list.length; j++) {
        list[j].classList.remove('active')  ;       
        }   
        this.classList.add('active') ;
    
    datafilter = this.getAttribute("data-filter") ;

    for (let k = 0; k < itemboxes.length; k++) {
        itemboxes[k].classList.add('hide') ;

        if (itemboxes[k].getAttribute('data-item') == datafilter || datafilter == "all") {
            itemboxes[k].classList.remove('hide')
        }
    }

    
    })
} 

var important = document.getElementById('important');
window.onload = function () {   
    var widthString =important.clientWidth;
    console.log(widthString);
    itemboxes.forEach( e  => { 
        e.style.height = widthString+"px" ;
    }); 
} 
window.onresize = function () {   
    var widthString =important.clientWidth;
    console.log(widthString);
    itemboxes.forEach( e  => { 
        e.style.height = widthString+"px" ;
    }); 
} 


