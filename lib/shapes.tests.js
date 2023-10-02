//importing constant shape classes
const { Triangle, Square, Circle } = require("./shapes.js");

//unit testing the triangle
describe("Triangle test", () => {
    test("test to see if triangle is blue", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        );
    });
});



