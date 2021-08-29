import * as PIXI from 'pixi.js'

let app = new PIXI.Application({ 
    width: window.innerWidth,         // default: 800
    height: window.innerHeight - 50,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
  }
);


let rectangle = new PIXI.Graphics();
rectangle.lineStyle(4, 0xFF3300, 1);
rectangle.beginFill(0x66CCFF);
rectangle.drawRect(0, 0, 64, 64);
rectangle.endFill();
rectangle.x = 170;
rectangle.y = 170;
app.stage.addChild(rectangle);

document.body.appendChild(app.view);