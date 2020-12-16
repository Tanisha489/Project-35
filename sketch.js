var dog,happyDog,database,foodS,foodStock
var dogImage,happyDogImage
function preload()
{
 dogImage = loadImage("images/dogImg.png")
 happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
  createCanvas(500,500);
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImage);
  dog.scale=0.15;
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
  textSize(20)
  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
dog.addImage(happyDogImage)
}
   drawSprites();
   fill (255,255,254)
   stroke ("black")
   text("Food remaining: "+foodS,170,200)
   textSize(13)
   text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  }

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}
