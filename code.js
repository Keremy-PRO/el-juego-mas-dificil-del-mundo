var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0bb1c32c-2933-4c40-a68d-758e3c67f81a","ba051183-684e-45e3-99eb-cdd4d5975da6","6c5347a0-07a1-4c5b-853c-b43e2001a523","4731b1c8-bc16-4b7b-887f-df8a6c277587","d4b799d5-fc71-4df4-ac91-a8112e6d145a"],"propsByKey":{"0bb1c32c-2933-4c40-a68d-758e3c67f81a":{"name":"nave","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"T7Nl3uwkjyR8OU83KKCxlK3IpBb9pf4r","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/0bb1c32c-2933-4c40-a68d-758e3c67f81a.png"},"ba051183-684e-45e3-99eb-cdd4d5975da6":{"name":"otro","sourceUrl":null,"frameSize":{"x":20,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"HbKB77DavILdFN4etiGdkUO.mrodTRw_","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":22},"rootRelativePath":"assets/ba051183-684e-45e3-99eb-cdd4d5975da6.png"},"6c5347a0-07a1-4c5b-853c-b43e2001a523":{"name":"otro2","sourceUrl":null,"frameSize":{"x":20,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"hdG1376UaIhTsl2_y0DpBw42RKbfI.Dx","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":24},"rootRelativePath":"assets/6c5347a0-07a1-4c5b-853c-b43e2001a523.png"},"4731b1c8-bc16-4b7b-887f-df8a6c277587":{"name":"otro3","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"xyYOupqQ8IeMGD.Q0RT_7y3GcR9GUB_q","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/4731b1c8-bc16-4b7b-887f-df8a6c277587.png"},"d4b799d5-fc71-4df4-ac91-a8112e6d145a":{"name":"otro4","sourceUrl":null,"frameSize":{"x":20,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"YmCwQCnDjCQn_Hkq1Ama8NFSrOfFzZqL","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":22},"rootRelativePath":"assets/d4b799d5-fc71-4df4-ac91-a8112e6d145a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var pared1 = createSprite(190, 120,250,3);
var pared3 = createSprite(67, 145,3,50);
var pared2 = createSprite(190, 260,250,3);
var pared4 = createSprite(67, 235,3,50);
var pared5 = createSprite(313, 145,3,50);
var pared6 = createSprite(313, 235,3,50);
var pared7 = createSprite(41, 170,50,3);
var pared8 = createSprite(41, 210,50,3);
var pared9 = createSprite(337, 210,50,3);
var pared10 = createSprite(337, 170,50,3);
var pared11 = createSprite(18, 190,3,40);
var pared12 = createSprite(361, 190,3,40);
var jugador = createSprite(40, 190,13,13);
jugador.shapeColor="pink"
jugador.setAnimation("nave")
var obstaculo1 = createSprite(100, 130,10,10);
var obstaculo2 = createSprite(215, 130,10,10);
var obstaculo3 = createSprite(165, 250,10,10);
var obstaculo4 = createSprite(270, 250,10,10);
obstaculo1.setAnimation("otro");
obstaculo2.setAnimation("otro2");
obstaculo3.setAnimation("otro3");
obstaculo4.setAnimation("otro4");
obstaculo1.shapeColor="red";
obstaculo2.shapeColor="red";
obstaculo3.shapeColor="red";
obstaculo4.shapeColor="red";
obstaculo1.velocityY=8;
obstaculo2.velocityY=8;
obstaculo3.velocityY=-8;
obstaculo4.velocityY=-8;
var Marcador = 0;
//playSound("assets/category_background/progression.mp3", false);


function draw() {
background("white");
text("Muertes "+Marcador, 200, 100);

if (keyDown("left")) {
  jugador.x=jugador.x-2;
}
if (keyDown("right")) {
  jugador.x=jugador.x+2;
}
if (keyDown("up")) {
  jugador.y=jugador.y-2;
}
if (keyDown("down")) {
  jugador.y=jugador.y+2;
}

obstaculo1.bounceOff(pared1);
obstaculo1.bounceOff(pared2);
obstaculo2.bounceOff(pared1);
obstaculo2.bounceOff(pared2);
obstaculo3.bounceOff(pared1);
obstaculo3.bounceOff(pared2);
obstaculo4.bounceOff(pared1);
obstaculo4.bounceOff(pared2);
if (jugador.isTouching(obstaculo1)||
  jugador.isTouching (obstaculo2)||
  jugador.isTouching (obstaculo3)||
  jugador.isTouching(pared11)||jugador.isTouching(pared12)||
   jugador.isTouching(pared10)||jugador.isTouching(pared9)||
    jugador.isTouching(pared8)||jugador.isTouching(pared7)||
     jugador.isTouching(pared6)||jugador.isTouching(pared5)||
      jugador.isTouching(pared4)||jugador.isTouching(pared3)||
       jugador.isTouching(pared2)||jugador.isTouching(pared1)||
  jugador.isTouching(obstaculo4)) {
  playSound("assets/category_collect/retro_game_classic_power_up_4.mp3", false);
  
  jugador.x=40;
  jugador.y=190;
Marcador=Marcador+1;
}


drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
