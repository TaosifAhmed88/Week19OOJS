class Shape {
    calculateArea() {
      return 0;
    }
  
    calculatePerimeter() {
      return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
      super(); // Call the parent class constructor
      this.radius = radius;
    }
  
    // Override the area method
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    // Override the perimeter method (circumference)
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
      super(); // Call the parent class constructor
      this.length = length;
      this.width = width;
    }
  
    // Override the area method
    calculateArea() {
      return this.length * this.width;
    }
  
    // Override the perimeter method
    calculatePerimeter() {
      return 2 * (this.length + this.width);
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
      super(); // Call the parent class constructor
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    // Using Heron's formula for the area of a triangle
    calculateArea() {
      const s = (this.a + this.b + this.c) / 2;  // Semi-perimeter
      return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
  
    // Override the perimeter method
    calculatePerimeter() {
      return this.a + this.b + this.c;
    }
}  
  
const circle = new Circle(5);
console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);

const triangle = new Triangle(8, 6, 5);
console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);
 
  
  