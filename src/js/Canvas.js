import Circle from './Circle.js';

class Canvas {
  constructor (canvasSelector, parentSelector) {
    this.canvasSelector = canvasSelector;
    this.parentSelector = parentSelector;

    this.circles = [];
    this.numberOfCircles = 40

    this.getContext();
    this.setCanvasSize();
    this.animate();
    this.generateCircles()

  }

  generateCircles () {
    do {
      this.circles.push(new Circle(this.ctx))
      this.numberOfCircles -=1
    } while (this.numberOfCircles > 0)
  }

  // metoda odpowiedzialna za renderowanie każdej klatki naszej animacji
  animate() {
    //  ta funckja wbudowana jest w przeglądarke
    requestAnimationFrame(() => {
      this.animate();
    })
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.width);
    this.circles.map(circle => circle.update())
  }

  getContext() {
    this.canvas = document.querySelector(this.canvasSelector);
    this.ctx = this.canvas.getContext('2d')
  }

  setCanvasSize() {
    const box = document.querySelector(this.parentSelector);

    this.canvas.width = box.clientWidth;
    this.canvas.height = box.clientHeight;
  }
}


export default Canvas;
