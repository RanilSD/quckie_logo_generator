//defining the constants
const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");
const colors = require("./lib/color");
//questions to create logo

const inputQuestion = [
    {
        name: "shape",
        type: "list",
        message: "Please choose a shape:",
        choices: ["Triangle", "Circle", "Square"],
    },
    {
        name: "shapeColor",
        type: "input",
        message: "Please enter Shape color(or hexadecimal number):",
    },
    {
        name: "text",
        type: "input",
        message: "Please enter text for logo up to 3 characters:",
        validate: (input) => input.length >= 1 && input.length <= 3
    },
    {
        name: "textColor",
        type: "input",
        message: "Please enter a color for text(or hexadecimal number):",
    },
];


//writing the file dependant on the answers of prompted inputQuestions

function writeFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/logo.svg', data, (err) => {
            if (err) {
                console.error(`Error writing to ${fileName}: ${err}`);
            } else {
                console.log(`Generated to ${fileName}`);
            }
            resolve({
                ok: true,
                message: console.log('Success! Navigate to the "dist" folder to see your logo!')
            });
        })
    });
}


//defining the logo file name

const logoFile = "logo.svg";

//creating the logo from user input

async function generateLogo() {
    const userInput = await inquirer.prompt(inputQuestion);
    const userText = userInput.text;
    const userTextColor = userInput.textColor;
    const userShapeColor = userInput.shapeColor;
    const userShapeType = userInput.shape;

    let createdShape;
    if (userShapeType === "Square") {
        createdShape = new Square(userShapeColor, userTextColor, userText);
        console.log("Square selected");
    } else if (userShapeType === "Triangle") {
        createdShape = new Triangle(userShapeColor, userTextColor, userText);
        console.log("Triangle selected");
    } else if (userShapeType === "Circle") {
        createdShape = new Circle(userShapeColor, userTextColor, userText);
        console.log("Circle selected");
    } else {
        console.log("Error selecting shape!");
    }
    console.log("Shape Color: " + userShapeColor);
    console.log("Text: " + userText);
    console.log("Text Color: " + userTextColor);

    createdShape.shapeColor = userShapeColor;
    createdShape.textColor = userTextColor;
    createdShape.text = userText;


    const svgString = createdShape.render();

    //writing logo to svg file
    writeFile(logoFile, svgString);


}

generateLogo();