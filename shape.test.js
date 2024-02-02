const { Circle, Triangle, Square } = require('./shape.js');

describe("Circle", () => {
    it("Should render svg for circle", () => {
        // TODO:
        const uut = new Circle('unittest', 'red', 'blue');
        const svg = uut.generateSVGContent()
        // expect(svg).
        expect(svg).toMatch(/circle/);
    });

    it("should be an instance of the circle class...", () => {
        const instance = new Circle('test circle', 'pink', 'circle', 'purple')
        expect(instance).toBeInstanceOf(Circle)
    });

    it("should...", () => {
        // For any additional code added in the future
    });
});


describe("Triangle", () => {
    it("should be an instance of triangle class...", () => {
        const instance = new Triangle('test triangle', 'pink', 'triangle', 'purple')
        expect(instance).toBeInstanceOf(Triangle)

    });

    it("should render an svg for trinagle...", () => {
        const svg = new Triangle('unittest', 'red', 'blue')
            .generateSVGContent()
        // expect(svg).
        expect(svg).toMatch(/polygon/);
    });

    it("should...", () => {
        // For any additional code added in the future

    });
});

describe("Square", () => {
    it("should be an instance of square class...", () => {
        const instance = new Square('test square', 'white', 'square', 'black')
        expect(instance).toBeInstanceOf(Square)

    });

    it("should render an svg for square...", () => {
        const svg = new Square('unittest', 'red', 'blue')
            .generateSVGContent()
        // expect(svg).
        expect(svg).toMatch(/rect/);
    });

    it("should...", () => {
        // For any additional code added in the future

    });
});