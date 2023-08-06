const { Square } = require("./square");
const { Circle } = require("./circle");
const { Triangle } = require("./triangle");

function createShape(data) {
  switch (data.logoShape) {
    case "triangle":
      return new Triangle(data);
    case "circle":
      return new Circle(data);
    case "square":
      return new Square(data);
    default:
      throw new Error("Invalid logo shape!");
  }
}

module.exports = { createShape };