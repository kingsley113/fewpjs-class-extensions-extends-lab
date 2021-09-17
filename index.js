// Your code here
class Polygon {
  constructor(array) {
    this.sides = array;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((prev, val) => prev + val);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const valid1 = this.sides[0] + this.sides[1] > this.sides[2] ? true : false;
    const valid2 = this.sides[1] + this.sides[2] > this.sides[0] ? true : false;
    if (valid1 && valid2) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides.every((side) => side === this.sides[0]);
  }

  get area() {
    return this.sides[0] ** 2;
  }
}
