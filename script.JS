let colors = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// console.log(colors.length);
const btn = document.getElementById('btn');
var colorName = document.getElementById('color-name');

btn.addEventListener("click",function(){
  var hexColor = "#";
  // var randomNumber = genrateRandomNumber();
  
  for(var i = 0; i < 6; i++){
    hexColor += colors[genrateRandomNumber()];
  }
  
  document.body.style.backgroundColor = hexColor;
  colorName.textContent = `Color Name : ${hexColor}`;
})

function genrateRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
