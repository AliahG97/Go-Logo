class Shape {
    constuctor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    // method to generate SVG content for the shape the base shape class
    generateSVGContent() {
        const svgContent = `
            <<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}>"${this.text}</text>
                <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                <rect width="200" height="200" fill="${this.shapeColor}" />
                <polygon points="150,20 250,180 50,180" fill="${this.shapeColor}" />
            </svg>
        `;
        return svgContent;
    }
    // Method added by subclass for shape specific SVG content
    generateSpecificSVGContent() {
        throw new Error(`generateSpecificSVGContent must be added by subclass`);
    }
}


// Subclasses for specific shapes (circle, triangle, square) to inherit from
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'circle', shapeColor);
    }
    //Add shape specific SVG content for circle
    generateSpecificSVGContent() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'triangle', shapeColor);
    }
    //Add shape specific SVG content for triangle
    generateSpecificSVGContent() {
        return `<polygon points="150,20 250,180 50,180" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'square', shapeColor);
    }
    //Add shape specific SVG content for square
    generateSpecificSVGContent() {
        return `<rect points="150,20 250,180 50,180" fill="${this.shapeColor}" />`;
    }
}


// exporting class shape  to be used in genereate svg file
module.exports = { Shape, Triangle, Square, Circle };
