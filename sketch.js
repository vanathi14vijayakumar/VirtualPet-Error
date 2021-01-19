//Create variables here
var dogImage,dogImage2
var dog,happyDog,foodS,foodStock
var  db 
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  dogImage2 = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500,500);
   db = firebase.database();
 
  dog = createSprite(250,250)
  dog.addImage("dog",dogImage)
  dog.scale = 0.2
 
  
}


function draw() {  
  background(46,139,87)

  

  drawSprites();
  

}
