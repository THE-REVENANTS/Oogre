var imgBoxes = document.querySelectorAll('.img-box img') ;

imgBoxes.forEach(e => {
    var modal = document.querySelector('.selected-works .modal');
    e.onclick = ()=> {
        var modalImg = document.querySelector('.selected-works .modal img');
        modal.style.display = "flex";
        modalImg.setAttribute('src' , e.getAttribute("src") );
    }
        var quit = document.querySelector('.modal .quit');
        quit.onclick = ()=>{
            modal.style.display = "none" ;
        }
});