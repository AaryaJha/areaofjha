let container=document.querySelector(".contain");
let card=document.querySelectorAll(".card")[1];
console.log(card);

container.addEventListener("mousemove", function(e) {
    
    let x=(window.innerWidth/2-e.clientX)/8;
    let y=(window.innerHeight/2-e.clientY)/8;
    card.style.transform='rotateX('+y+'deg) rotateY('+x+'deg)';
    let img=document.querySelector(".img");
    img.style.transform='rotateX('+y+'deg) rotateY('+x+'deg)';
    
    //console.log(img);
    
})
container.addEventListener("mouseenter",function(){
    card.style.transition= 'none';
    let img=document.querySelector(".img");
    img.style.transform='translateZ(100px)';

});
function Delay()
{
    console.log("hey");
    card.style.transform='rotateX(0deg) rotateY(0deg)';
    card.style.transition= 'all 0.5s ease';
    let img=document.querySelector(".img");
    img.style.transform='translateZ(0px)';
    img.style.transition= 'all 0.5s ease';
    //setTimeout(function(){card.style.transform='rotateX(0deg) rotateY(0deg)'},2000);
}

container.addEventListener("mouseleave",Delay);

