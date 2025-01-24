class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        throw new Error("Method 'area()' must be implemented.");
    }

    toString() {
        return `${this.name} with area ${this.area()}`;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle');
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const shapes = [
    new Circle(10),
    new Rectangle(10, 50)
];

shapes.forEach(shape => {
    console.log(shape.toString());
});

// export default Shape;
// export { Circle, Rectangle };