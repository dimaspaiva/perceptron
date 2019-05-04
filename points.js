class Point {
  constructor() {
    this.x = Math.round(Math.random() * 200);
    this.y = Math.round(Math.random() * 100);
    this.b = 1;
    if (this.x < this.y) {
      this.label = 1;
    } else {
      this.label = -1;
    }
  }
}

module.exports = Point;
