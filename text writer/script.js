var writter = document.querySelector('.text-to-write'); 
var textWords = ['code hard' , 'Play Games' , 'Run At Morning' , 'Beat People']; 
let f=0;
let j=0;
 
setInterval(() => {
var splittedTextWord = textWords[j].split("");
var splittedWritter = writter.textContent.split("");
let i = splittedWritter.length ; 
if (f <= splittedTextWord.length) {
f++
splittedTextWord.length = f ;
writter.textContent = splittedTextWord.join(''); 

}else{
    i--   
    splittedWritter.length = i ; 
    writter.textContent = splittedWritter.join('');
    if (writter.textContent == '') {
        j++
        f = 0 ;
    }
}

//restart writting
if (j >= textWords.length) {
    j = 0 ;
}
}, 200); 