/*╔════════════               ════════════╗
    
// -
// Donnine Nude 0.1 by Irene Carlino [10print, Generative art]
// 2021 © Irene.Crln @irenecrln, Daniele @Fupete and the course DS-2021 at DESIGN.unirsm 
// github.com/ds-2021-unirsm — github.com/fupete - github.com/irenecrln
// Educational purposes, MIT License, 2021, San Marino
// —
//
// Help:
// Click to generate a new poster
// Press 's' to save the poster
//
// —
     
//╚════════════               ════════════╝*/

x = 0;
y = 0;
var sizer = 30;
let b;
var playboy;
var sixty;
var seventy;
var eighty;
var foto;
let c;



function preload() {

  //creo il mio array di foto
  playboy = ['img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg','donnine nude60s.png','donnine nude60ss.png','donnine nude60.png','70s.png','donnine nude70s.png','donnine nude70ss.png','donnine nude80sss.png'];

  

  //prendo dall'array una foto a caso
  var pos = floor(random(playboy.length));
 
  

  //carico la foto che ho preso
  foto = loadImage(playboy[pos]);

}



function setup() {
  randomSeed(millis());//il randomseed mi da una serie di numeri casuali sempre diversa perchè sennò ci sarebbe un alta probabilità che esca lo stesso seed, così invece lo prende ogni millisecondo 
  let c= createCanvas(572.4, 769.5);
  c.parent('sketch-holder');
  
}

function draw() {
  
  //background(foto);
  image(foto, 0, 0, 572.4, 769.5);
  rectMode(CENTER);
  for (var i = 0; i < 572.4; i += sizer) {
    for (var j = 0; j < 769.5; j += sizer) {
      r = random(4);
      if (r < 1) {
        //se esce un numero minore di 1 stampa una stella  
        noStroke();
        fill(0);
        
        //let punte_stelle=[4,9] //da sistemare 
        //star (x + i, y + j, 8, 14, floor(random (punte_stelle)));
        
        star (x + i, y + j, 5, 14, 4);

      } else if (r < 2) {
        //se esce un numero minire di 2 stampa un rettangolo
        stroke(0);
        fill(0);
        rect(x + i, y + j, 30, 30);
      }
      noLoop();
    }
  }
  

  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  
/////////////////////////////
//NUOVO POSTER AL CLICK/////
///////////////////////////
}
function mousePressed() {
  clear();
  redraw();
  preload();
}


////////////////////
//SALVA POSTER/////
//////////////////

function keyPressed(){
  if(key == 's'){
    save('poster_DonninaNuda_irene_crln.png');
  }
  
}