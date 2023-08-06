const isCss3Color = require("is-css3-color");

class Shape {
  constructor({ logoName, textColor, logoColor, logoShape }) {
    console.log("Shape Constructor - Input:", { logoName, textColor, logoColor, logoShape });
    this.logoShape = logoShape;
    this.validateAndSet("logoName", logoName, (input) => {
      this.ifResponseEmpty(input);
      if (input.length > 3) {
        throw new Error("Logo text cannot be more than 3 characters");
      }
      return input.toUpperCase(); // Convert to uppercase
    });
    this.validateAndSet("textColor", textColor);
    this.validateAndSet("logoColor", logoColor);
  }

  ifResponseEmpty(input) {
    if (!input) throw new Error("Input cannot be empty");
  }

  validateAndSet(property, input, validationFn = null) {
    this.ifResponseEmpty(input);
    input = input.toLowerCase(); // Convert to lowercase
    if (validationFn) {
      input = validationFn(input);
    } else if (!isCss3Color(input)) {
      throw new Error(`Please enter a valid CSS color keyword or hex code for ${property}`);
    }
    this[property] = input;
  }

  render() {
    throw new Error("Child shapes must incorporate a render() method");
  }
}

module.exports = Shape;
