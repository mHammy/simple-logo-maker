const isCss3Color = require("is-css3-color");
const Shape = require("./shape");


class Square extends Shape {
    constructor(data) {
      super(data);
    }
  
    render() {
      const size = 100; // Side length of the square
      return `<rect width="${size}" height="${size}" fill="${this.logoColor}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}"
          font-size="2.3rem" letter-spacing="2" dy=".3em" font-family="monospace">${this.logoName}</text>`;
    }
  }

module.exports = { Square };