// setInterval( function(){var squares=document.querySelectorAll(".square");

// for(var i=0;i<squares.length;i++)
// {
//     var num1=Math.floor(Math.random()*255+1);
//     var num2=Math.floor(Math.random()*255+1);
//     var num3=Math.floor(Math.random()*255+1);
    
//     squares[i].style.background = "rgb("+num1+", "+ num2+", "+ num3+")";
// }},1000);

var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
var numSquare=6;
var h1=document.querySelector("h1");
var colors=generateRandomColor(numSquare);
var picked=pickedColor();
var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=picked;
var hardbtn=document.querySelector("#hardBtn");
var easybtn=document.querySelector("#easyBtn");
var resetbtn=document.querySelector("#reset");

hardbtn.addEventListener("click",function(){
   this.classList.add("selected");
   resetbtn.textContent="new colors";
   easybtn.classList.remove("selected");
   h1.style.background="steelblue";
   numSquare=6;
   messageDisplay.style.color="white";
   messageDisplay.style.textShadow="none";
   messageDisplay.style.boxShadow="none";
   colors=generateRandomColor(numSquare);
   picked=pickedColor();
   colorDisplay.textContent=picked;
   for(var i=0;i<squares.length;i++)
   {
       squares[i].style.display="block";
       squares[i].classList.toggle("boxclass");
       squares[i].style.background=colors[i];
   };
});
easybtn.addEventListener("click",function(){
   this.classList.add("selected");
   resetbtn.textContent="new colors";
   h1.style.background="steelblue";
   hardbtn.classList.remove("selected");
   messageDisplay.style.color="white";
   messageDisplay.style.textShadow="none";
   messageDisplay.style.boxShadow="none";
    numSquare=3;
   colors=generateRandomColor(numSquare);
     picked=pickedColor();
     colorDisplay.textContent=picked;
     for(var i=0;i<squares.length;i++)
     {
         if(colors[i])
         {
             squares[i].style.background=colors[i];
             squares[i].classList.toggle("boxclass");
         }
         else
         {
            squares[i].style.display="none"; 
         }
     }
})
resetbtn.addEventListener("click",function(){
    colors=generateRandomColor(numSquare);
    resetbtn.textContent="new colors";
    h1.style.background="steelblue";
    picked=pickedColor();
    colorDisplay.textContent=picked;
    messageDisplay.style.color="white";
    messageDisplay.style.textShadow="none";
    messageDisplay.style.boxShadow="none";
    for(var i=0;i<squares.length;i++)
     {
         if(colors[i])
         {
             squares[i].style.background=colors[i];
             squares[i].classList.toggle("boxclass");
         }
         else
         {
            squares[i].style.display="none"; 
         }
     }
})

for(var i=0;i<squares.length;i++)
{
    squares[i].style.background=colors[i];
   squares[i].addEventListener("click",function(){
        var clickedColor=this.style.background;
        if(clickedColor===picked){
             changeColors(clickedColor);
             messageDisplay.textContent="correct";
             messageDisplay.classList.add("messageDisplay");
             messageDisplay.style.color="steelblue";
             messageDisplay.style.boxShadow="0px 5px 6px rgba(0, 0, 0, 0.5)";
             messageDisplay.style.textShadow="0px 1px 2px rgba(0, 0, 0, 0.4)";
             h1.style.background=clickedColor;
             resetbtn.textContent="Play Again";
             messageDisplay.style.color="green";

        }else
        {
            this.style.background="#232323";
            this.classList.add("boxclass");
            messageDisplay.textContent="wrong";
            messageDisplay.style.boxShadow="0px 5px 6px rgba(0, 0, 0, 0.5)";
            messageDisplay.style.textShadow="0px 1px 2px rgba(0, 0, 0, 0.4)";
            messageDisplay.classList.add("messageDisplay");
            messageDisplay.style.color="red";
        }
    }); 
}

 function changeColors(color){
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
        squares[i].classList.toggle("boxclass");
    }
}
function pickedColor(){
  var random= Math.floor(Math.random()*colors.length);
  return colors[random];
}
function generateRandomColor(num)
{
     var array=[];
     for (var i=0;i<num;i++){
         array.push(randomColor());
     }
     return array;
}

function randomColor(){
   var r = Math.floor(Math.random()*256);    
   var g = Math.floor(Math.random()*256);    
   var b = Math.floor(Math.random()*256);    
   return "rgb("+r+", "+g+", "+b+")";
}
