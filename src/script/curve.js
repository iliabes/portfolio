let about = document.getElementById('portfolio')
let loader = document.getElementById('loader')

// import * as PIXI from 'pixi.js'

// let app = new PIXI.Application({ 
//     width: window.innerWidth,         // default: 800
//     height: window.innerHeight - 50,        // default: 600
//     antialias: true,    // default: false
//     transparent: false, // default: false
//     resolution: 1       // default: 1
//   }
// );


// let rectangle = new PIXI.Graphics();
// rectangle.lineStyle(4, 0xFF3300, 1);
// rectangle.beginFill(0x66CCFF);
// rectangle.drawRect(0, 0, 64, 64);
// rectangle.endFill();
// rectangle.x = 170;
// rectangle.y = 170;
// app.stage.addChild(rectangle);

// document.body.appendChild(app.view);


//Attention! My english is bad...  :D
const config = {
    curvesNum    : 40,
    waveSpeed    : .5,
    wavesToBlend : 4,  //waves count to blend 
    framesToMove : 120 //frames count to change type placement
  }
  
  class WaveNoise {

    constructor() {
    this.wavesSet = [];
    }

    addWaves(requiredWaves) {
    for(let i = 0 ; i < requiredWaves ; ++i) {
        let randomAngle = Math.random() * 360; //generate random degree
        this.wavesSet.push(randomAngle);
    }
    }

    getWave() {
      let blendedWave = 0;
      for (let e of this.wavesSet) {
        blendedWave += Math.sin(e / 180 * Math.PI); //convert degree to radian and get sine
      }
      return (blendedWave / this.wavesSet.length + 1) / 2; 
    }

    update() {
      this.wavesSet.forEach((e, i) => {
        let r = Math.random() * (i + 1) * config.waveSpeed;
        this.wavesSet[i] = (e + r) % 360;
      });
    }
  }


  class Animation {
    constructor() {
    this.cnv = document.getElementById("canvas");
    //   this.cnv = null;
      this.ctx = null;
      this.size = {w: 0, h: 0, cx: 0, cy: 0};
      this.controls = [];
      this.controlsNum = 3;    //first for control x1 bezierCurve, second for control y1 (bc) and third for control x2 (bc)
      this.frameCounter = 0;
      this.type4Start = 0;
      this.type4End = 0;
    }
    init() {                    //point of entry
      this.createCanvas();
      this.createControls();
      this.updateAnimation();
    }
    createCanvas() {
    this.ctx = this.cnv.getContext('2d');
    this.setCanvasSize();
    window.addEventListener(`resize`, () => this.setCanvasSize());
    }

    setCanvasSize() {
      this.size.w  = this.cnv.width  = window.innerWidth;
      this.size.h  = this.cnv.height = window.innerHeight;
    //   this.size.w = this.cnv.width
    //   this.size.h = this.cnv.height
      this.size.cx = this.size.w / 2; 
      this.size.cy = this.size.h / 2;
    }
    createControls() {
      for (let i = 0 ; i < (this.controlsNum + config.curvesNum) ; ++i) {// 3 general controls x1, y1, x2 bezierCurve
        let control = new WaveNoise();                                   // and 1 personal control y2 for any bezierCurve
        control.addWaves(config.wavesToBlend);
        this.controls.push(control);
      }
    }
    updateControls() {
      this.controls.forEach( e => e.update() );
    }
    // get current type placement for Curve start and for Curve end 
    getYPlacementType(type, i) {  //type recorded in (this.type4Start, this.type4End) animation properties
      if (type > .6) {
        return this.size.h / config.curvesNum * i; 
      } else if (type > .4) {
        return this.size.cy;
      } else if (type > .2) {
        return this.size.h;
      } else {
        return 0;
      }
    }
    updateCurves() {
      let c = this.controls;
      let _controlX1 = c[0].getWave() * this.size.w; // general controls x1 for all curves
      let _controlY1 = c[1].getWave() * this.size.h; // general controls y1 for all curves
      let _controlX2 = c[2].getWave() * this.size.w; // general controls x2 for all curves

    for (let i = 0 ; i < config.curvesNum ; ++i) {
        let _controlY2 = c[3 + i].getWave(); // personal control y2 for current curve
        let curveParam = {
          startX     : 0,
          startY     : this.size.h - (10 * i),
          controlX1  : _controlX1, 
          controlY1  : _controlY1, 
          controlX2  : _controlX2, 
          controlY2  : _controlY2 * this.size.h, 
          endX       : this.size.w + 20, 
          endY       : 40,
          alpha      : _controlY2,
          hue        : 360 / config.curvesNum * i
        }
    
        this.drawCurve(curveParam);
      }
    }
    drawCurve({startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, alpha, hue}) {
    this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${alpha})`;
      this.ctx.beginPath();
      this.ctx.moveTo(startX, startY);
      this.ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
      this.ctx.stroke();
    }
    updateCanvas() {
      this.ctx.fillStyle = `rgb(22, 22, 25)`;
      this.ctx.fillRect(0, 0, this.size.w, this.size.h);
    }
    updateFrameCounter() {
      this.frameCounter = (this.frameCounter + 1) % config.framesToMove;
      if (this.frameCounter === 0) {
        this.type4Start = Math.random(); // change type for Curve Start
        this.type4End = Math.random();   // change type for Curve End
      }
    }
    updateAnimation() {
      this.updateFrameCounter();
      this.updateCanvas();  
      this.updateCurves();
      this.updateControls();
  
      window.requestAnimationFrame(() => this.updateAnimation());
    }
  }
  
  
  window.onload = () => {
    loader.style.display = 'none'
    new Animation().init();

  }

  