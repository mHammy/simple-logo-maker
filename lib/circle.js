const isCss3Color = require("is-css3-color");
const Shape = require("./shape");

class Circle extends Shape {
    constructor(data) {
      super(data);
    }
  
    render() {
      const radius = 50; // Radius of the circle
      return `<circle cx="50" cy="50" r="${radius}" fill="${this.logoColor}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}"
          font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace">${this.logoName}</text>`;
    }
  }

module.exports = { Circle };