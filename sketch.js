var hr, mn, sc;
var mech,mechimg
function preload(){
mechimg=loadImage("./istockphoto-475605680-1024x1024.jpg")
}

function setup() {
  createcanvas = createCanvas(1000,630);
  mech=createSprite(400,310)
  mech.addImage(mechimg)
  mech.scale=0.3
}

function draw() {
  background("black"); 
  drawSprites();
  fill("white");
  textSize(30)
  text("Hours : "+hr,730,390)
  text("Minutes : "+mn,730,340)
  text("Seconds : "+sc,730,290)

  push();
  translate(400,300)

  hr = hour();
  mn = minute();
  sc = second();

scAngle = map(sc, 0, 60, 0, 360)
mnAngle = map(mn, 0, 60, 0, 360)
hrAngle = map(hr%12,0, 12, 0, 360)

angleMode(DEGREES) ;
rotate(-90);

push();
rotate(scAngle);
stroke("red");
strokeWeight(7);
line(0, 0, 100, 0);
pop();

push();
rotate(mnAngle);
stroke("blue");
strokeWeight(7);
line(0, 0, 70, 0);
pop();

push();
rotate(hrAngle);
stroke("green");
strokeWeight(7);
line(0, 0, 40, 0);
pop();

strokeWeight(7);
noFill();

stroke("white");
point(0,0);

stroke("red");
arc(0,0, 330,330, 0, scAngle);

stroke("green");
arc(0,0, 290,290,0,hrAngle);

stroke("blue");
arc(0,0,310,310,0,mnAngle);

pop();

}