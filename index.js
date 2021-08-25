for(var n=0; n<7; n++){
    document.querySelectorAll("button")[n].addEventListener("click",afterClick);

    function afterClick() {
        var buttonInnerHtml= this.innerHTML;
       
        makeSound(buttonInnerHtml);
        jadoo(buttonInnerHtml);
       }
}

document.addEventListener("keydown",afterKeyDown);
function afterKeyDown(event){
    makeSound(event.key);
    jadoo(event.key);}

function makeSound(key){
switch(key){
    case "w":
    var audio1= new Audio("sounds/crash.mp3");
    audio1.play();
    break;

    case "a":
    var audio2= new Audio("sounds/kick-bass.mp3");
    audio2.play();
    break;

    case "s":
    var audio3= new Audio("sounds/snare.mp3");
    audio3.play();
    break;

    case "d":
    var audio4= new Audio("sounds/tom-1.mp3");
    audio4.play();
    break;

    case "j":
    var audio5= new Audio("sounds/tom-2.mp3");
    audio5.play();
    break;

    case "k":
    var audio6= new Audio("sounds/tom-3.mp3");
    audio6.play();
    break;

    case "l":
    var audio7= new Audio("sounds/tom-4.mp3");
    audio7.play();
    break;
    
}

}
function jadoo(keyPressed){
    var activeBtn= document.querySelector("."+keyPressed);
    
    activeBtn.classList.add("pressed");

setTimeout(function(){
    activeBtn.classList.remove("pressed");
},100)    
    }