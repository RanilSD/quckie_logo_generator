//defining the constants
const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./shapes");
const colors = require("./color");


const shape = new Triangle();
shape.setShapeColor("blue");


expect(shape.render()).toEqual('<version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><<text x="150" y="135" font-size="48" text-anchor="middle" fill="red">URP</text>');