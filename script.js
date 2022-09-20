const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Symbol {
    constructor(){

    }
    draw(){

    }
}

class Effect {
    constructor(canvasWidth, canvasHeight){
         this.canvasWidth = canvasWidth;
         this.canvasHeight = canvasHeight;
         this.fontSize = 25;
         this.column = this.canvasWidth/this.fontSize;
         this.symbols = [];
    }
    #initialize(){
         for (let i = 0; i < this.column.length; i++) {
            this.symbols[i] = new Symbol();
         }
    }
}

function animate() {

}